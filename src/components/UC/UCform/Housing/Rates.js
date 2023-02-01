

// ============RATES (NI only)============== //

/* drop down which handles weekly or monthly rates and stores this in state via props */

import React, { useState } from "react";
import classes from "./Rates.module.css"



const Rates = ({ handler }) => {


    /* Local State */
    
    const [values, setVal] = useState(0)


    const amountHandler = (e) => {

        setVal(e.target.value)
        handler(e.target.value)

        

    }
    const freqHandler = (e) => {
        if(e.target.value === "select") {
            return handler(0)
        }
        if(e.target.value === "monthly") {
            const truncate =  (value, numDecimalPlaces) =>
            Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces)

            let VAL = truncate((values * 12) / 52, 2)
            
            return handler(VAL)
        }
        if(e.target.value === "weekly") {
            return handler(values)
        }

    }


    return (
        <React.Fragment>
        <div className="container">
           <label 
            className={classes.label_amount} 
            htmlFor="amount">Rates: </label>
            <input 
              className={classes.input_amount} 
              
              onChange={amountHandler} 
              type="number" 
              id="amount"/>
            <label 
              className={classes.label_freq} 
              htmlFor="dropdown_select"/>
            <select 
              className={classes.select_freq} 
              onChange={freqHandler} 
              name="dropdown" 
              id="dropdown_select">
                <option value="select">---select---</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            
            </div>
        </React.Fragment>
    )
}

export default Rates;