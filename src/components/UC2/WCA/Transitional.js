import React from "react";
import classes from "./Transitional.module.css"
import UCElements from "../UCElements/UCElements";

const UC_elements = UCElements
const transA = UC_elements.TA_1
const transB = UC_elements.TA_2
const transC = UC_elements.TA_3

const Transitional = (props) => {
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts"></label> Transiton from SDP legacy
                <select id="transitional_amount">
                    <option>--select</option>
                    <option>No</option>
                    <option>£{transA}</option>
                    <option>£{transB}</option>
                    <option>£{transC}</option>
                    
                </select>
        </div>
    )
}
export default Transitional;