import React from "react";
import classes from "./CHILD.module.css"

const CHILD = ({ setPropState }) => {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Child Elements</h4>

            </div>
        </React.Fragment>
    )
}
export default CHILD;