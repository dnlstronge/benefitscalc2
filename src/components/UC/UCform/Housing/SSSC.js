import React from "react";
import classes from "./SSSC.module.css"


const SSSC = ({ handler }) => {
    return (
        <React.Fragment>
            <label className={classes.label_SSSC} htmlFor="SSSC-select">Extra bedrooms (SSSC)
                <select className={classes.select_SSSC} onChange={handler} name="SSSC" id="SSSC-select">
                    <option value={1}>--Please choose an option--</option>
                    <option value={0.86}> one bedroom</option>
                    <option value={0.75}> two or more</option>
                </select>
            
            </label>

        </React.Fragment>
    )
}

export default SSSC;