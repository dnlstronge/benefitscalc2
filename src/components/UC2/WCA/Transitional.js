import React, { useState } from "react";
import classes from "./Transitional.module.css"
import UCElements from "../UCElements/UCElements";

const UC_elements = UCElements
const transA = UC_elements.TA_1
const transB = UC_elements.TA_2
const transC = UC_elements.TA_3

const Transitional = (props) => {

    const [trans, setTrans] = useState(0)


    const handleTrans = (e) => {
        e.target.value && setTrans(e.target.value)
    }
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts"></label> Transiton from SDP legacy
                <select className={classes.TA_select} id="transitional_amount">
                    <option value={0}>--select</option>
                    <option value={0} >No</option>
                    <option value={transA}>£{transA}</option>
                    <option value={transB}>£{transB}</option>
                    <option value={transC}>£{transC}</option>
                    
                </select>
                <div>TEST: {trans} </div>
        </div>
    )
}
export default Transitional;