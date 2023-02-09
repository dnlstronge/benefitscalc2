import React, { useState, useEffect } from "react";
import classes from "./Totals.module.css"
import UCElements from "../UCElements/UCElements";


const Totals = ({
     propState, 
     rs = propState.AGE, 
     age = propState.COUPLE
     }) => {

       
  
   
   

    const [PA, setPA ] = useState(null)
         
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

    return (
        <div className={classes.container}>
        
            <label className={classes.label_amount} htmlFor="amount">
            
                <p className={classes.label_p} id="amount"> {PA}</p>
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