import React, {useRef} from "react";
import {
    makeStyles,
    TextField,
    CircularProgress,
    Button, Chip, AccordionSummary, Accordion, Typography, AccordionDetails
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import {useDropzone} from "react-dropzone";

import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import Docxtemplater from "docxtemplater";
import InspectModule from "docxtemplater/js/inspect-module";

const iModule = InspectModule();

import MomentUtils from "@date-io/moment";
import "moment/locale/it";

import {className} from "../function";
import "../styles/main.css";
import {AttachFile, ExpandMore} from "@material-ui/icons";

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

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        onDrop
    });

    const removeAll = () => setMyFile([]);
    const file = myFile.map((file, key) => (
        <Chip
            key={key}
            icon={<AttachFile/>}
            label={`${file.path} - ${file.size} bytes`}
            color="primary"
            onDelete={() => {
                removeAll();
                onDelete();
            }}
            style={{cursor: "pointer"}}
        />
    ));

    return (
        <>
      <span {...getRootProps({className: "drop-zon"})}>
        {<input {...getInputProps()} multiple={multiple}/>}
          {file.length > 0 ? (
              file
          ) : (
              <Chip
                  icon={<AttachFile/>}
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

export default function Copy({darkState}) {
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
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    const [value, setValue] = React.useState("");
    const [progress, setProgress] = React.useState(false);
    const [name, setName] = React.useState("myFile");
    const [num, setNum] = React.useState("01");

    const showFile = async (files) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            setProgress(true)
            const text = e.target.result;
            var doc = new Docxtemplater(new PizZip(text), {modules: [iModule], linebreaks: true});
            const t = doc.getFullText();
            console.log(t)

            if (t.length > 0) {
                let c = t.split('\n').map((el) => {
                    if (el.includes("->"))
                        el = el.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g, "$1,$2")
                    return el
                })
                setValue(c.join('\n'))
                setProgress(false)
            }
        };
        reader.readAsBinaryString(files[0]);
    };

    return (
        <MuiPickersUtilsProvider locale="it" utils={MomentUtils}>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                Copy
                <span className="text-primary">Srt</span>
            </h1>

            <div id={"space"}>
                {false && <Dropzone
                    onOperation={showFile}
                    onDelete={() => {
                        setValue("")
                    }}
                />}
                <TextField id="name" label="Name file" variant="outlined" value={name}
                           size={"small"} onChange={({target: {value}}) => setName(value)}/>
                <TextField id="num" label="Num file" variant="outlined" value={num}
                           size={"small"} onChange={({target: {value}}) => setNum(value)}/>
                <Button variant="contained" color="primary"
                        onClick={() => {
                            let _num = String(parseInt(num) + 1).padStart(2, '0')
                            setNum(_num)
                        }}
                >Inc</Button>
                <Button variant="contained" color="primary"
                        onClick={async (e) => {
                            setProgress(true)
                            const text = await navigator.clipboard.readText();
                            if (text.length > 0) {
                                let c = text.split('\n').map((el) => {
                                    if (el.includes("->"))
                                        el = el.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g, "$1,$2")
                                    return el
                                })
                                setValue(c.join('\n'))
                                setProgress(false)
                                navigator.clipboard.writeText("")
                            }
                        }}
                >Paste</Button>

                <Button variant="contained" color="primary"
                        onClick={() => {
                            const element = document.createElement("a");
                            const file = new Blob([value], {type: 'text/plain'});
                            element.href = URL.createObjectURL(file);
                            element.download = name + num + ".srt";
                            document.body.appendChild(element); // Required for this to work in FireFox
                            element.click();
                        }}
                >Download</Button>
            </div>
            <br/>

            {progress && <CircularProgress/>}

            {value.length > 0 && value.split('\n\n').map((el, key) => {
                let row = el.split('\n')
                const num = row.shift();
                const time = row.shift();
                return <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}><span
                            style={{color: "#155e14"}}>{num}</span> <span
                            style={{color: "#e26823"}}>({time})</span></Typography>
                        <Typography className={classes.secondaryHeading}>{row.join('\n')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{color: "#1292d5"}}>
                            {row.join('\n')}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            })}

        </MuiPickersUtilsProvider>
    );
}
