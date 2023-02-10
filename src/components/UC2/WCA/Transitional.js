import React from "react";
import classes from "./Transitional.module.css"

const Transitional = () => {
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts"></label>
                <select id="transitional_amount">
                    <option>--select</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
        </div>
    )
}
export default Transitional;