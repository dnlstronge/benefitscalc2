import React, { useState, useEffect } from "react";
import classes from "./Totals.module.css"
import UCElements from "../UCElements/UCElements";



const Totals = ({PA, WCA, LCW, CE, TA}) => {
   
        //local state 
    
  console.log(typeof(PA))
  console.log(typeof(WCA))
  console.log(typeof(LCW))
  console.log(typeof(CE))
  console.log(typeof(TA))

    
   
            
    const round = (x) => {
                return Math.ceil( x * 100) /100
             }
            
     

        //handle totals: 

        // useEffect(() => {
        //     const round = (x) => {
        //         return Math.ceil( x * 100) /100
        //      }
        //     let a = round(propState.PA)
        //     let b = round(propState.WCA)
        //     let c = round(propState.CE)
        //     let d = round(propState.LCW)
        //     let e = round(propState.TA)

        //     setTally(round(a + b + c + d + e))             
        // }, [ propState.PA, propState.WCA, propState.CE, propState.LCW, propState.TA])

       
        
     


    return (
        <div className={classes.container}>
            
            <label className={classes.label_amount} htmlFor="amount">
                Personal Allowance:
                <p className={classes.label_p} id="amount"> {PA}</p>
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