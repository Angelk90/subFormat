import React, { useState, useEffect, useRef } from "react";
import {
    makeStyles,
    TextField,
    CircularProgress,
    Button
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "moment/locale/it";

import { className } from "../function";
import "../styles/main.css";

export default function Copy({ darkState }) {
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
    const ref = useRef(null);

    const [value, setValue] = React.useState("");
    const [progress, setProgress] = React.useState(false);

    return (
        <MuiPickersUtilsProvider locale="it" utils={MomentUtils}>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                Copy
                <span className="text-primary">Srt</span>
            </h1>

            <Button variant="contained" color="primary"
            onClick={(e) => {
                setProgress(true)
                navigator.clipboard.readText()
                    .then(text => {
                        let c = text.split('\n').map((el) => {
                            if(el.includes("->"))
                                el = el.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g, "$1,$2")
                            return el
                        })
                        setValue(c.join('\n'))
                        setProgress(false)
                    })
                    .catch(err => {
                        console.error('Failed to read clipboard contents: ', err);
                    });
            }}
            >Paste</Button>

            <Button variant="contained" color="primary"
             onClick={(e) => {
                 const element = document.createElement("a");
                 const file = new Blob([value], {type: 'text/plain'});
                 element.href = URL.createObjectURL(file);
                 element.download = "myFile.srt";
                 document.body.appendChild(element); // Required for this to work in FireFox
                 element.click();
             }}
            >Download</Button><br/><br/>

            {progress && <CircularProgress />}

            {value.split('\n').map((el, key) => {
                if(parseInt(el) && !el.includes("->"))
                    return <div key={key} style={{color:"#155e14"}}>{el}</div>
                else  if(el.includes("->"))
                    return <div key={key} style={{color:"#e26823"}}>{el}</div>
                else return <div key={key} style={{color:"#1292d5"}}>{el}</div>
            })}

        </MuiPickersUtilsProvider>
    );
}
