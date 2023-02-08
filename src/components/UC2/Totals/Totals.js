import React, { useState } from "react";
import classes from "./Totals.module.css"

const Totals = ({ propState }) => {

   
    return (
        <div className={classes.container}>
            <label className={classes.label_amount} htmlFor="amount">Personal Allowance: 
                <p className={classes.label_p} id="amount">{propState.PA}</p>
            </label>
            
        </div>
    )
}

export default Totals;