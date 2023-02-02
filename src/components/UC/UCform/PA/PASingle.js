import React, { useState } from "react";
import classes from "./PASingle.module.css"
import UCElements from "../../UCElements/UCElements";

const UC_elements = UCElements

const PASingle = ({PA_state, set_PA_state}) => {
    // local state
    const [age, setAge] = useState("")


    // handlers

    const handleAge = (e) => {
        setAge(e.target.value)
        set_PA_state({...PA_state, PERSONAL_ALLOWANCE: 0})
    }
    const handlePA_under = (e) => {
        if(e.target.value === "SINGLE") {
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.single_under25})
        }
       else if(e.target.value === "COUPLE") {
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: UC_elements.joint_under25})
        }
        else {
            return set_PA_state({...PA_state, PERSONAL_ALLOWANCE: 0})
        }
    } 
    const handlePA_over = (e) => {}
    return (
        <React.Fragment>
            <div className={classes.container}> 
           
                <label className={classes.age_label} htmlFor="age-selecter">Age group
                    <select className={classes.age_select} onChange={handleAge} id="age-selecter">
                        <option value="NONE">--select--</option>
                        <option value="UNDER">Under 25</option>
                        <option value="OVER">Over 25+</option>
                        <option value="SRP">Pension Age</option>
                        </select>
                        {age === "SRP" &&
                        <p className={classes.age_warning}>Claim State pension and pension credit</p>}
                </label>
                

{/* stream 1 - under 25 */}
                {age === "UNDER" &&
                <label onChange={handlePA_under} htmlFor={classes.couple_select}>Couple/Single
                    <select>
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label> }
{/* stream 2 - over 25 */}
                {age === "OVER" &&     
                <label htmlFor={classes.couple_select}>Couple/Single
                    <select>
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label>}

            
            </div>
        </React.Fragment>
    )
    
    
}
export default PASingle;