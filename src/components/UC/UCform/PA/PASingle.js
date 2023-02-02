import React, { useState } from "react";
import classes from "./PASingle.module.css"

const PASingle = () => {
    //local state
    const [age, setAge] = useState("")


    return (
        <React.Fragment>
            <div className={classes.container}>
                <label className={classes.age_label} htmlFor="age-select">Age group
                    <select id="age-select">
                        <option value={0}>--select--</option>
                        <option value={25}>25+</option>
                        <option value="SRP">Pension Age</option>
                        </select>
                        <p className={classes.age_warning}></p>
                </label>
            </div>
        </React.Fragment>
    )
    
    
}
export default PASingle;