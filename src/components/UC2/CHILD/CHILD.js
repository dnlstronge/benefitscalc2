import React, { useState } from "react";
import classes from "./CHILD.module.css"

const CHILD = ({ setPropState }) => {

    const[oldest, setOldest] = useState(false)

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Child Elements</h4>
                <label htmlFor="oldest_checkbox" className={classes.checkbox_label}> Oldest child born before 6-APR-2017
                    <input id="oldest_checkbox" type="checkbox"></input>
                </label>
                <label className={classes.dropdown_label} htmlFor="exempt_child"></label>
            </div>
        </React.Fragment>
    )
}
export default CHILD;