import React, { useState } from "react";
import classes from "./LCWRA.module.css";
import UCElements from "../../UCElements/UCElements";


const UC_elements = UCElements

const LCWRA = ( { lift_state, PA_state, set_PA_state }) => {
    const handle_single = (e) => {
            if(e.target.value === "NONE") {
                set_PA_state({...PA_state, LCWRA: 0,  WORK_CAPABILTY: 0 })
            }
            else {
                set_PA_state({...PA_state, LCWRA: UC_elements.LCWRA, WORK_CAPABILTY: UC_elements.LCWRA })
            }
    }
    return (
        
        <React.Fragment>
            {lift_state.LCW_LCWRA === "LCWRA" && 
                <div className={classes.container}>
                    <label className={classes.LCWRA_label} htmlFor="single_label">Add LCWRA component
                        <select onChange={handle_single} className={classes.LCWRA_select} id="single_label">
                            <option value="NONE">--select</option>
                            <option value="YES">Yes</option>
                            <option value="NONE">No</option>
                        </select>
                    </label>
                </div>}
        </React.Fragment>
    )
}

export default LCWRA; 