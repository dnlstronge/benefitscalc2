import React from "react";
import classes from "./Totals.module.css"




const Totals = ({PA, WCA, LCW, CE, TA}) => {
   
        //local state 
    const round = (x) => {
                return Math.ceil( x * 100) /100
             }

        
     


    return (
        <div className={classes.container}>
            
            <label className={classes.label_amount} htmlFor="amount">
                Personal Allowance:
                <p className={classes.label_p} id="amount">{PA}</p>
            </label>
            
            <label className={classes.label_amount} htmlFor="amount">Limited Capabilty for Work: 
                <p className={classes.label_p} id="amount">{LCW}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">LCW + Work Related Activity: 
                <p className={classes.label_p} id="amount">{WCA}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Legacy transitional amount: 
                <p className={classes.label_p} id="amount">{TA}</p>
            </label>
             <label className={classes.label_amount} htmlFor="amount">Carer element: 
                <p className={classes.label_p} id="amount">{CE}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Max UC: 
                <p className={classes.label_p} id="amount">{
                    round(PA
                    + WCA
                    + LCW
                    + CE
                    + TA
                    )
                }</p>
            </label>
         
        </div>
    )
}

export default Totals;