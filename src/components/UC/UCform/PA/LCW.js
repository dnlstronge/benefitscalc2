import React from "react";
import classes from "./LCW.module.css"
import UCElements from "../../UCElements/UCElements"

const UC_elements = UCElements

const LCW = ({ lift_state, set_lift_state, PA_state, set_PA_state }) => {


   const LCW_handler = (e) => {
        if(e.target.value === "YES") {

        }
    }


    return (
        <div className={classes.LCW_container}>
        <label className={classes.LCW_label} htmlFor="LCW_LCWRA"></label>
        <select className={classes.LCW_select} id="LCW_LCWRA"></select>
        <h4>For ESA migration case with ESA LCW in payment</h4>
            <label className={LCW_label} htmlFor="selectLCW">Add LCW to claim 
            <select className{LCW_select} id="selectLCW">
                <option value="NONE">--select--</option>
                <option value="YES (LCW element payable)">Yes</option>
                <option value="NO (has LCW status only)">No</option>
                <option value="NONE"></option>
            </select>
            </label>
            
            
        </div>
    )
}

export default LCW;