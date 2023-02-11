import React from "react";
import classes from "./CHILD.module.classes"

const CHILD = ({ setPropState }) => {
    return (
        <React.Fragment>
            <div className={classes.container}></div>
        </React.Fragment>
    )
}