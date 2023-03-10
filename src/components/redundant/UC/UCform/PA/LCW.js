import React from "react";
import classes from "./LCW.module.css"
import UCElements from "../../UCElements/UCElements"

const UC_elements = UCElements

const LCW = ({ lift_state, set_lift_state, PA_state, set_PA_state }) => {

   const LCW_LCWRA_handler = (e) => {
         set_PA_state({...PA_state, LCW: 0, LCW_NOPAYMENT: "", WORK_CAPABILTY: 0})
         set_lift_state({...lift_state, LCW_LCWRA: e.target.value})
    }

   const LCW_handler = (e) => {
        if(e.target.value === "YES") {
            set_PA_state({...PA_state, LCW: UC_elements.LCW, LCW_NOPAYMENT: e.target.value, WORK_CAPABILTY: UC_elements.LCW })
        }
        if(e.target.value === "NO") {
            set_PA_state({...PA_state, LCW: 0, LCW_NOPAYMENT: e.target.value, WORK_CAPABILTY: 0})
        }
    }


    return (
        <div className={classes.LCW_container}>
        <label className={classes.LCW_label} htmlFor="LCW_LCWRA"></label>
        Does the claim include LCW or LCWRA
        <select onChange={LCW_LCWRA_handler} className={classes.LCW_select} id="LCW_LCWRA">
            <option value="NO">--select--</option>
            <option value="LCW">LCW only</option>
            <option value="LCWRA">LCWRA</option>
            <option value="NO">Neither</option>
        </select>
       
       {lift_state.LCW_LCWRA === "LCW" && 
            <label className={classes.LCW_label} htmlFor="selectLCW">Add LCW to claim 
            <select onChange={LCW_handler} className={classes.LCW_select} id="selectLCW">
                <option value="NO">--select--</option>
                <option value="YES">Yes (LCW element payable)</option>
                <option value="NO">No (has LCW status only)</option>
                
            </select>
            </label>}
            
            
        </div>
    )
}

export default LCW;