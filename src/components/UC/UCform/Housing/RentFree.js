import classes from "./RentFree.module.css"
import React, { useState } from "react"

const RentFree = ({ handler }) => {

   
    return (
        <React.Fragment>
            <label className={classes.label_rentfree} htmlFor="rentFreeWeeks">Rent free weeks:</label>
            <input className={classes.input_rentfree} 
                    onChange={handler}
                    type="number"></input>
        </React.Fragment>
    )
}
export default RentFree;