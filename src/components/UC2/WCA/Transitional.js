import React from "react";
import classes from "./Transitional.module.css"
import UCElements from "../UCElements/UCElements";

const UC_elements = UCElements

const Transitional = () => {
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts"></label> Transiton from SDP legacy
                <select id="transitional_amount">
                    <option>--select</option>
                    <option>No</option>
                    <option>£{UC_elements.TA_1}</option>
                    <option>£{UC_elements.TA_2}</option>
                    <option>£{UC_elements.TA_3}</option>
                    
                </select>
        </div>
    )
}
export default Transitional;