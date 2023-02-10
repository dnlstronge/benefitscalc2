import React, { useState, useEffect } from "react";
import classes from "./Totals.module.css"
import UCElements from "../UCElements/UCElements";



const Totals = ({
     propState, 
     rs = propState.AGE, 
     age = propState.COUPLE,
     
     }) => {

        //local state 

    const [PA, setPA ] = useState(null)
    const [tally, setTally] = useState(0)
            
    useEffect(() => {

        
        let S_UNDER = UCElements.single_under25
        let S_OVER = UCElements.single_over25
        let C_UNDER = UCElements.joint_under25
        let C_OVER = UCElements.joint_over25

        if(propState.AGE === "AGE_NONE" || propState.COUPLE === "RS_NONE")
            
            setPA(null)
            

        if(propState.AGE === "AGE_UNDER" && propState.COUPLE === "RS_SINGLE")
            
            setPA(S_UNDER)
            
            
        if(propState.AGE === "AGE_UNDER" && propState.COUPLE === "RS_COUPLE")
            
            setPA(C_UNDER)
            
        if(propState.AGE === "AGE_OVER" && propState.COUPLE === "RS_SINGLE")
        
            setPA(S_OVER)
        
        if(propState.AGE === "AGE_OVER" && propState.COUPLE === "RS_COUPLE")
            
            setPA(C_OVER)
            
        }, [propState.AGE, propState.COUPLE, PA])

        //handle totals: 

        useEffect(() => {
            const round = (x) => {
                return Math.ceil( x * 100) /100
             }


            let a = round(PA)
            let b = round(propState.WCA)
            let c = round(propState.CE)
            let d = round(propState.LCW)
            let e = round(propState.TA)
          setTally(round(a + b + c + d + e))              
        }, [ PA, propState.WCA, propState.CE, propState.LCW, propState.TA])

        // lift GLOBAL: 
        
     


    return (
        <div className={classes.container}>
            
            <label className={classes.label_amount} htmlFor="amount">
                Personal Allowance:
                <p className={classes.label_p} id="amount"> {PA}</p>
            </label>
            
            <label className={classes.label_amount} htmlFor="amount">Limited Capabilty for Work: 
                <p className={classes.label_p} id="amount">{propState.LCW}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">LCW + Work Related Activity: 
                <p className={classes.label_p} id="amount">{propState.WCA}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Legacy transitional amount: 
                <p className={classes.label_p} id="amount">{propState.TA}</p>
            </label>
             <label className={classes.label_amount} htmlFor="amount">Carer element: 
                <p className={classes.label_p} id="amount">{propState.CE}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Max UC: 
                <p className={classes.label_p} id="amount">{tally}</p>
            </label>
         
        </div>
    )
}

export default Totals;