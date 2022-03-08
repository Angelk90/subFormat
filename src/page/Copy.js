import React from "react";
import {
    makeStyles,
    TextField,
    CircularProgress,
    Button,
    Chip,
    AccordionSummary,
    Accordion,
    Typography,
    AccordionDetails
} from "@material-ui/core";
import {AttachFile, ExpandMore} from "@material-ui/icons";
import { ReactGhLikeDiff } from "react-gh-like-diff";
import { useDropzone } from "react-dropzone";
import PizZip from "pizzip";

import { className } from "../function";

import "react-gh-like-diff/dist/css/diff2html.min.css";
import "../styles/main.css";
import "../styles/styles.css";

const { DOMParser } = require("@xmldom/xmldom");

function Dropzone({
                      multiple = false, onOperation, onDelete = () => {
    }
                  }) {
    const [myFile, setMyFile] = React.useState([]);

    const onDrop = React.useCallback(
        (acceptedFiles) => {
            setMyFile([...acceptedFiles]);
            onOperation(acceptedFiles);
        },
        [myFile, onOperation]
    );

    const { getRootProps, getInputProps } = useDropzone({
        accept:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        onDrop
    });

    const removeAll = () => setMyFile([]);
    const file = myFile.map((file, key) => (
        <Chip
            key={key}
            icon={<AttachFile />}
            label={`${file.path} - ${file.size} bytes`}
            color="primary"
            onDelete={() => {
                removeAll();
                onDelete();
            }}
            style={{ cursor: "pointer" }}
        />
    ));

    return (
        <>
      <span {...getRootProps({ className: "drop-zon" })}>
        {<input {...getInputProps()} multiple={multiple} />}
          {file.length > 0 ? (
              file
          ) : (
              <Chip
                  icon={<AttachFile />}
                  label={"File"}
                  color="primary"
                  style={{
                      cursor: "pointer"
                  }}
              />
          )}
      </span>
        </>
    );
}

export default function Copy({ darkState }) {
    const useStyles = makeStyles((theme) => ({
        title: {
            color: darkState ? "#ffffff" : "#343a40",
            textShadow: `3px 3px 2px ${darkState ? "rgba(0, 0, 0, 1)" : "rgba(150, 150, 150, 1)"
            }`
        },
        button: {
            margin: theme.spacing(1)
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: "33.33%",
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary
        }
    }));
    const classes = useStyles();

    const [original, setOriginal] = React.useState("");
    const [value, setValue] = React.useState("");
    const [progress, setProgress] = React.useState(false);
    const [name, setName] = React.useState("myFile");
    const [num, setNum] = React.useState("01");

    const showFile = async (files) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            setProgress(true);
            setName("aa")
            setNum("")

            const text = e.target.result;
            const zip = new PizZip(text);
            const xml = str2xml(zip.files["word/document.xml"].asText());

            /*
            const par = Object.values(xml.getElementsByTagName("w:p")).reduce((pre, value) =>
            {
                const fullText = Object.values(value.getElementsByTagName("w:t")).reduce((pre2, value2) =>
                {
                    if (value2.childNodes) pre2 += (value2.childNodes[0]?.nodeValue) || "";
                    return pre2;
                }, "")
                console.log(fullText)
                pre.push(fullText);
                return pre;
            }, []);
            */

            const paragraphsXml = xml.getElementsByTagName("w:p");
            const paragraphs = [];
            for (let i = 0, len = paragraphsXml.length; i < len; i++) {
                let fullText = "";
                const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
                for (let j = 0, len2 = textsXml.length; j < len2; j++) {
                    const textXml = textsXml[j];
                    if (textXml.childNodes) {
                        fullText += (textXml.childNodes[0]?.nodeValue) || "";
                    }
                }

                paragraphs.push(fullText);
            }

            setOriginal(paragraphs.join("\n"));

            if (paragraphs.length > 0) {
                let c = paragraphs.map((el) => {
                    if (el.includes("->"))
                        el = el.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g, "$1,$2");
                    return el;
                });
                setValue(c.join("\n"));
                setProgress(false);
            }
        };
        reader.readAsBinaryString(files[0]);
    };

    function str2xml(str) {
        if (str.charCodeAt(0) === 65279) str = str.substr(1);
        return new DOMParser().parseFromString(str, "text/xml");
    }

    return (
        <>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                Copy
                <span className="text-primary">Srt</span>
            </h1>

            <div id={"space"}>

                <Dropzone
                    onOperation={showFile}
                    onDelete={() => {
                        setValue("");
                        setName("myFile")
                        setNum("01")
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={async (e) => {
                        setProgress(true);
                        const text = await navigator.clipboard?.readText();
                        if (text !== undefined && text.length > 0) {
                            setOriginal(text)
                            let c = text.split("\n").map((el) => {
                                if (el.includes("->"))
                                    el = el.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g, "$1,$2");
                                return el;
                            });
                            setValue(c.join("\n"));
                            setProgress(false);
                            navigator.clipboard.writeText("");
                        } else {
                            setProgress(false);
                        }
                    }}
                >
                    Paste
                </Button>

                <TextField
                    id="name"
                    label="Name file"
                    variant="outlined"
                    value={name}
                    size={"small"}
                    onChange={({ target: { value } }) => setName(value)}
                />
                <TextField
                    id="num"
                    label="Num file"
                    variant="outlined"
                    value={num}
                    size={"small"}
                    onChange={({ target: { value } }) => setNum(value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        let _num = String(parseInt(num) + 1).padStart(2, "0");
                        setNum(_num);
                    }}
                >
                    Inc
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        const element = document.createElement("a");
                        const file = new Blob([value], { type: "text/plain" });
                        element.href = URL.createObjectURL(file);
                        element.download = name + num + ".srt";
                        document.body.appendChild(element); // Required for this to work in FireFox
                        element.click();
                    }}
                >
                    Download
                </Button>
            </div>
            <br />

            {progress && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <CircularProgress />
                </div>
            )}

            {value.length > 0 &&
                <ReactGhLikeDiff
                    options={{
                        originalFileName: name + num,
                        updatedFileName: name + num,
                        outputFormat: 'side-by-side'
                    }}
                    past={original}
                    current={value}
                />
            }

            {value.length > 0 &&
                value.split("\n\n").map((el, key) => {
                    let row = el.split("\n");
                    const num = row.shift();
                    const time = row.shift();
                    return (
                        <Accordion key={key}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>
                                    <span style={{ color: "#155e14" }}>{num}</span>{" "}
                                    <span style={{ color: "#e26823" }}>({time})</span>
                                </Typography>
                                <Typography className={classes.secondaryHeading}>
                                    {row.join("\n")}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: "#1292d5" }}>
                                    {row.join("\n")}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
        </>
    );
}
