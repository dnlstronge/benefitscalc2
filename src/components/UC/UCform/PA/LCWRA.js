import React, { useState } from "react";
import classes from "./LCWRA.module.css";

const LCWRA = ( {set_lift_state, PA_state, set_PA_state }) => {
    return (

        <div className={classes.container}>
            <label htmlFor="single_label">
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
        </div>
    )
}

export default LCWRA; 