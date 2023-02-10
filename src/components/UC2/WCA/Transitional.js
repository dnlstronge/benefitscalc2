import React from "react";
import classes from "./Transitional.module.css"

const Transitional = () => {
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts"></label> Transiton from SDP legacy
                <select id="transitional_amount">
                    <option>--select</option>
                    <option>No</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    
                </select>
        </div>
    )
}
export default Transitional;