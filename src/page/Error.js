import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { className } from "../function";
import "../styles/main.css";
import {ReactGhLikeDiff} from "react-gh-like-diff";
import "react-gh-like-diff/dist/css/diff2html.min.css";
import "../styles/styles.css";

export default function Error({ darkState }) {
    const useStyles = makeStyles(() => ({
        title: {
            color: darkState ? "#ffffff" : "#343a40",
            textShadow: `3px 3px 2px ${
                darkState ? "rgba(0, 0, 0, 1)" : "rgba(150, 150, 150, 1)"
            }`
        }
    }));
    const classes = useStyles();
    return (
        <div className="text-center">
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>404</h1>
            <Typography paragraph variant="h5" color="textSecondary">
                We are sorry but we could not find the page you are looking.
            </Typography>
            <ReactGhLikeDiff
                options={{
                    originalFileName: "fileName",
                    updatedFileName: "s",
                    outputFormat:  'side-by-side'
                }}
                past={"ciao\nciao"}
                current={"ss"}
            />
        </div>
    );
}
