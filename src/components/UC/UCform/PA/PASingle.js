import React, { useState } from "react";
import classes from "./PASingle.module.css"
import UCElements from "../../UCElements/UCElements";

const UC_elements = UCElements

const PASingle = ({lift_state, set_lift_state, PA_state, set_PA_state}) => {
    // local state
    const [age, setAge] = useState("")
    const [couple, setCouple] = useState("")

    // handlers

    const handleAge = (e) => {
        setAge(e.target.value)
        set_PA_state({...PA_state, PERSONAL_ALLOWANCE: 0})

    }
    const handlePA_under = (e) => {
        setCouple(e.target.value)
        if(e.target.value === "SINGLE") {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.single_under25})
        }
        
       else if(e.target.value === "COUPLE") {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.joint_under25})
        }
        else {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: 0})
        }
    } 
    const handlePA_over = (e) => {
        setCouple(e.target.value)
        if(e.target.value === "SINGLE") {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.single_over25})
        }
       else if(e.target.value === "COUPLE") {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.joint_over25})
        }
        else {
            set_lift_state({...lift_state, COUPLE: e.target.value})
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: 0})
        }
    }


    return (
        <React.Fragment>
            <div className={classes.container}> 
           
                <label className={classes.pa_label} htmlFor="age-selecter">Age group
                    <select className={classes.pa_select} onChange={handleAge} id="age-selecter">
                        <option value="NONE">--select--</option>
                        <option value="UNDER">Under 25</option>
                        <option value="OVER">Over 25+</option>
                        <option value="MIX">Mixed Age Couple</option>
                        <option value="SRP">Pensioner (single)</option>
                        </select>
                        {age === "SRP" &&
                        <p className={classes.age_warning}>Claim State pension and pension credit</p>}
                </label>
                

{/* stream 1 - under 25 */}
                {age === "UNDER" &&
                <label className={classes.pa_label} onChange={handlePA_under} htmlFor="selectcouple">Couple/Single
                    <select className={classes.pa_select} id="selectcouple">
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label> }
{/* stream 2 - over 25 */}
                {age === "OVER" &&     
                <label className={classes.pa_label} onChange={handlePA_over} htmlFor="couple_select1">Couple/Single
                    <select className={pa_select} id="couple_select1">
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label>}
{/* handle mixed age */}
                {age === "MIX" &&     
                <label className={classes.pa_label} onChange={handlePA_over}htmlFor={classes.couple_select2}>Couple/Single
                    <select className={classes.pa_select} id="couple_select2">
                        <option value="NONE">--select--</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label>}
            
            </div>
        </React.Fragment>
    )
    
    
}
export default PASingle;