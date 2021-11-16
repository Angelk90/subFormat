import React, { useState, useEffect, useRef } from "react";
import {
    TextField,
    makeStyles,
    Button,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    TimePicker
} from "@material-ui/pickers";
import {
    AttachFile,
    CloudDownload,
    CloudUpload,
    ExpandMore
} from "@material-ui/icons";
import { useDropzone } from "react-dropzone";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import Docxtemplater from "docxtemplater";
import InspectModule from "docxtemplater/js/inspect-module";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import "moment/locale/it";
const iModule = InspectModule();
import WebViewer from "@pdftron/webviewer";

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

import { className } from "../function";
import "../styles/main.css";

function Dropzone({ multiple = false, onOperation, onDelete = () => {} }) {
    const [myFile, setMyFile] = React.useState([]);

    const onDrop = React.useCallback(
        (acceptedFiles) => {
            setMyFile([...acceptedFiles]);
            onOperation(acceptedFiles);
        },
        [myFile, onOperation]
    );

    const { getRootProps, getInputProps } = useDropzone({
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

export default function Docx({ darkState }) {
    const useStyles = makeStyles((theme) => ({
        title: {
            color: darkState ? "#ffffff" : "#343a40",
            textShadow: `3px 3px 2px ${
                darkState ? "rgba(0, 0, 0, 1)" : "rgba(150, 150, 150, 1)"
            }`
        },
        button: {
            margin: theme.spacing(1)
        }
    }));
    const classes = useStyles();
    const [url, setUrl] = useState("");
    const [docs, setDocs] = useState("");
    const [state, setState] = useState({});
    const viewer = useRef(null);
    const [instance, setInstance] = useState(null);

    const [upload, setUpload] = useState(false);

    useEffect(() => {
        if (
            !(
                state &&
                Object.keys(state).length === 0 &&
                state.constructor === Object
            ) &&
            upload
        )
            generateDocument();
    }, [state, upload, instance]);

    useEffect(() => {
        if (upload)
            WebViewer(
                {
                    path: "/docx/webviewer/lib",
                    extension: "docx"
                },
                viewer.current
            ).then((instance) => {
                instance.setLanguage('it');
                setInstance(instance);
            });
    }, [upload]);

    const showFile = async (files) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            var doc = new Docxtemplater(new PizZip(content), { modules: [iModule] });
            var tags = iModule.getAllTags();
            var out = doc.getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
            const objectURL = URL.createObjectURL(out);
            setUrl(objectURL);
            setUpload(true);

            setState(
                Object.fromEntries(
                    Object.entries(tags).map((el) => {
                        let [name, type] = el[0]?.split("::");
                        let value;
                        if (type !== undefined) [type, value] = type?.split("||");
                        else [name, value] = name?.split("||");
                        return [
                            el[0],
                            value !== undefined
                                ? ["date", "time"].includes(type)
                                ? moment(
                                    value === "now" ? new Date() : value,
                                    type === "date" ? "DD/MM/YYYY" : "HH:mm"
                                )
                                : value
                                : ["date", "time"].includes(type)
                                ? null
                                : ""
                        ];
                    })
                )
            );
        };
        reader.readAsBinaryString(files[0]);
    };

    const generateDocument = (save = false) => {
        loadFile(url, function (error, content) {
            if (error) {
                throw error;
            }
            var zip = new PizZip(content);
            var doc = new Docxtemplater().loadZip(zip).setOptions({ linebreaks:true});
            let b = Object.entries(state)
                .map(el => console.log(el[0].replace(/||[A-Z]+(?:_[A-Z]+)*/ig,""))
                    //.replace(/||[A-Z]+(?:_[A-Z]+)*/ig,"")
                )
            const t = Object.fromEntries(
                Object.entries(state).map((el) => {
                    let [, type] = el[0]?.split("::");
                    if (type !== undefined) type = type?.split("||")[0];
                    let value = el[1];
                    if(typeof value === "string") {
                        let c = value.match(/{[A-Z]+(?:_[A-Z]+)*}/ig)
                        //if(c?.length > 0)
                            //c = c.map(el => el.replace("{", "").replace("}", ""))
                       // console.log("c: ", value, c, b, state)
                    }
                    if (value !== null && ["date", "time"].includes(type))
                        value = moment(
                            value,
                            type === "date" ? "DD/MM/YYYY" : "HH:mm"
                        ).format(type === "date" ? "DD/MM/YYYY" : "HH:mm");
                    if (value === "" || !value) value = `{${el[0]}}`;
                    return [el[0], value];
                })
            );

            doc.setData(t);
            try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
            } catch (error) {
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
                function replaceErrors(key, value) {
                    if (value instanceof Error) {
                        return Object.getOwnPropertyNames(value).reduce(function (
                            error,
                            key
                            ) {
                                error[key] = value[key];
                                return error;
                            },
                            {});
                    }
                    return value;
                }
                console.log(JSON.stringify({ error: error }, replaceErrors));

                if (error.properties && error.properties.errors instanceof Array) {
                    const errorMessages = error.properties.errors
                        .map(function (error) {
                            return error.properties.explanation;
                        })
                        .join("\n");
                    console.log("errorMessages", errorMessages);
                    // errorMessages is a humanly readable message looking like this :
                    // 'The tag beginning with "foobar" is unopened'
                }
                throw error;
            }
            var out = doc.getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            }); //Output the document using Data-URI
            instance?.loadDocument(out, { filename: "name.docx" });
            if(save) saveAs(out, "output.docx");
        });
    };

    const onChange = ({ target: { value } }, name) => {
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const onChangeDatePicker = (value, name) => {
        setState((prev) => ({ ...prev, [name]: value }));
    };

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    console.log(state)

    return (
        <MuiPickersUtilsProvider locale="it" utils={MomentUtils}>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                Upload
                <span className="text-primary">Docx</span>
            </h1>

            <div style={{ paddingBottom: 12 }}>
                <Dropzone
                    onOperation={showFile}
                    onDelete={() => {
                        setUpload(false);
                        setState({});
                    }}
                />
            </div>

            {upload && (
                <div
                    style={{
                        display: "flex"
                    }}
                >
                    <div
                        style={{
                            width: "30%",
                            minHeight: "500px",
                            marginTop: 7
                        }}
                    >
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div style={{}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<CloudDownload />}
                                        onClick={() => generateDocument(true)}
                                    />
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ flex: 1 }}>
                                    {Object.entries(state).map((el, key) => {
                                        let [label, type] = el[0]?.split("::");
                                        if (type !== undefined) type = type?.split("||")[0];
                                        else label = label?.split("||")[0];
                                        label = label.replaceAll("_", " ").capitalize();
                                        if (type === "date")
                                            return (
                                                <div key={key} style={{ paddingBottom: 15 }}>
                                                    <KeyboardDatePicker
                                                        fullWidth
                                                        id={`field_${key}`}
                                                        size="small"
                                                        label={label}
                                                        inputVariant="outlined"
                                                        placeholder="dd/mm/yyyy"
                                                        value={el[1]}
                                                        onChange={(value) =>
                                                            onChangeDatePicker(value, el[0])
                                                        }
                                                        format="DD/MM/YYYY"
                                                    />
                                                </div>
                                            );
                                        else if (type === "time")
                                            return (
                                                <div key={key} style={{ paddingBottom: 15 }}>
                                                    <TimePicker
                                                        fullWidth
                                                        id={`field_${key}`}
                                                        size="small"
                                                        label={label}
                                                        inputVariant="outlined"
                                                        placeholder="hh:mm"
                                                        ampm={false}
                                                        value={el[1]}
                                                        onChange={(value) =>
                                                            onChangeDatePicker(value, el[0])
                                                        }
                                                    />
                                                </div>
                                            );
                                        else
                                            return (
                                                <div key={key} style={{ paddingBottom: 15 }}>
                                                    <TextField
                                                        fullWidth
                                                        id={`field_${key}`}
                                                        label={label}
                                                        variant="outlined"
                                                        size="small"
                                                        value={el[1]}
                                                        onChange={(value) => onChange(value, el[0])}
                                                        multiline={type === "multiline"}
                                                        rows={4}
                                                    />
                                                </div>
                                            );
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div
                        style={{
                            width: "70%",
                            height: "100vh",
                            float: "right",
                            marginTop: 7,
                            marginLeft: 5
                        }}
                    >
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Reader
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ flex: 1 }}>
                                    <div
                                        className="webviewer"
                                        ref={viewer}
                                        style={{
                                            flex: 1,
                                            height: "100vh",
                                        }}
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>
            )}
        </MuiPickersUtilsProvider>
    );
}
