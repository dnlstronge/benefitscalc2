import React, { useState, useEffect } from "react";
import classes from "./Transitional.module.css"
import UCElements from "../UCElements/UCElements";

const UC_elements = UCElements
const transA = UC_elements.TA_1
const transB = UC_elements.TA_2
const transC = UC_elements.TA_3
const trans_zero = 0

const Transitional = ({ setPropState }) => {

    const [trans, setTrans] = useState("0")


    const handleTrans = (e) => {
        setTrans(e.target.value)
    }

    useEffect(() => {
        setPropState({type: "TRANS", val: trans })
    }, [trans, setPropState])
    
    return (
        <div className={classes.container}>
            <label className={classes.TA_label} htmlFor="transitional_amounts">Transiton from SDP legacy 
                <select onChange={handleTrans} className={classes.TA_select} id="transitional_amount">
                    <option value={trans_zero}>--select</option>
                    <option value={trans_zero} >No</option>
                    <option value={transA}>£{transA}</option>
                    <option value={transB}>£{transB}</option>
                    <option value={transC}>£{transC}</option>
                </select>
            </label>
        </div>
    )
}
export default Transitional;