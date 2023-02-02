import React, { useState } from "react";
import classes from "./PASingle.module.css"

const PASingle = () => {
    // local state
    const [age, setAge] = useState("")


    // handlers

    const handleAge = (e) => {
        setAge(e.target.value)
    }
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
                <label htmlFor={classes.couple_select}>Couple/Single
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