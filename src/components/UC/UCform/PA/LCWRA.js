import React, { useState } from "react";
import classes from "./LCWRA.module.css";

const LCWRA = ( {set_lift_state, PA_state, set_PA_state }) => {
    const handle_single = (e) => {
            
    }
    return (

        <div className={classes.container}>
            <label className={classes.LCWRA_label} htmlFor="single_label">Add LCWRA component
                <select className={classes.LCWRA_select} id="single_label">
                    <option value="NONE">--select</option>
                    <option value="YES">Yes</option>
                    <option value="NONE">No</option>
                </select>
            </label>
        </div>
    )
}

export default LCWRA; 