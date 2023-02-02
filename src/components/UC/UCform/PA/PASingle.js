import React, { useState } from "react";
import classes from "./PASingle.module.css"

const PASingle = () => {
    //local state
    const [age, setAge] = useState("")

    const handleAge = (e) => {
        setAge(e.target.value)
    }
    return (
        <React.Fragment>
            <div className={classes.container}> 
           
                <label className={classes.age_label} htmlFor="age-select">Age group
                    <select id="age-select">
                        <option value={"NONE"}>--select--</option>
                        <option value={0}>Under 25</option>
                        <option value={25}>Over 25+</option>
                        <option value="SRP">Pension Age</option>
                        </select>
                        <p className={classes.age_warning}>Claim State pension and pension credit</p>
                </label>
                

{/* stream 1 - under 25 */}
                {age === 0 &&
                <label htmlFor={couple_select}>
                    <select>
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label> }
{/* stream 2 - over 25 */}
                {age === 25 &&     
                <label htmlFor={couple_select}>
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