import React, { useState } from "react";
import classes from "./Totals.module.css"

const Totals = ({ propState }) => {

   
    return (
        <div className={classes.container}>
            <label className={classes.label_amount} htmlFor="amount">Personal Allowance: 
                <p className={classes.label_p} id="amount">{propState.PA}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Work capability component: 
                <p className={classes.label_p} id="amount">{propState.WCA}</p>
            </label> <label className={classes.label_amount} htmlFor="amount">Carer element 
                <p className={classes.label_p} id="amount">{propState.CE}</p>
            </label>
            
        </div>
    )
}

export default Totals;