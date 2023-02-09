import React, { useState, useEffect } from "react";
import classes from "./Totals.module.css"
import UCElements from "../UCElements/UCElements";


const Totals = ({
     propState, 
     rs = propState.AGE, 
     age = propState.COUPLE
     }) => {

    const UC_elements = UCElements
   
   

    const [PA, setPA ] = useState(null)
         
   useEffect(() => {
    if(propState.AGE === "AGE_NONE" || propState.COUPLE === "RS_NONE")
        console.log("the amount is zero babe!")
    if(propState.AGE === "AGE_UNDER" && propState.COUPLE === "RS_SINGLE")
        console.log("the amount is dynamic 100")
    if(propState.AGE === "AGE_UNDER" && propState.COUPLE === "RS_COUPLE")
        console.log("the amount is dynamic 200")
    if(propState.AGE === "AGE_OVER" && propState.COUPLE === "RS_SINGLE")
        console.log("Oooooh it be working!!")
    if(propState.AGE === "AGE_OVER" && propState.COUPLE === "RS_COUPLE")
        console.log("Hopefully thats it!!!")
     }, [propState])

    return (
        <div className={classes.container}>
            <label className={classes.label_amount} htmlFor="amount">Personal Allowance: 
            {rs === "RS_SINGLE" &&
                <p className={classes.label_p} id="amount"> 2000</p>}
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