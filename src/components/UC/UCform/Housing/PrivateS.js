import classes from "./PrivateS.module.css"
import React, { useState } from "react"
/* ==========for Private Sector tenants========= /*

/*
 - may need access to Global state: to update
 - if after certain considerations housing costs are being calculated in essence the same
    way, it might be better to create a custom function, which these components
    can import and use. 
 -  converts to monthly, deducts any ND if applicable, SSSC. then returns a value to be
    used in the state as a HC element
 -  provide link to LHA rates (NI ==> NIHE)(this is acceptable as it varies so much and
    is very case sensitive due area and househould circs)

- update: all eligble housing components will return state which can later be used to generate
   the total housing costs 
*/

const PrivateS = ({ state_HOUSING, set_state_HOUSING }) => {

    const [freq, setfreq] = useState("")
    
    const [maxRent, setMaxRent] = useState(0)
    const [non_deps, set_nonDeps] = useState(0)
    
    const rounded = (value) => {
       return Math.round(value*Math.pow(10,2))/Math.pow(10,2)
    }
   
    const handleRent = (e) => {
      
        if (e.target.value === "select") { 
          setMaxRent(maxRent)
           set_state_HOUSING({...state_HOUSING, housingPM: 0})
        }
        if (e.target.value === "WEEKLY"){ 
          setMaxRent(maxRent)
           set_state_HOUSING({...state_HOUSING, housingPM: rounded(maxRent / 12 * 52)} ) 
            
          }
        if (e.target.value === "MONTHLY") {
          setMaxRent(maxRent)
           set_state_HOUSING({...state_HOUSING, housingPM: maxRent})
          
        }
    }


    const calculateMonthly = (e) => {
      setMaxRent(e.target.value)
      set_state_HOUSING({...state_HOUSING, housingPM: e.target.value})
    }
    const ND_handler = (e) => {
     set_nonDeps(e.target.value)
      
     set_state_HOUSING({...state_HOUSING, NDD: e.target.value })
    }


    return (
        <React.Fragment>
            <div className={classes.container}>
                <p className={classes.info}>Please enter the relevant LHA rate which
               applies to the household. Users should enter the actual contractual rent (inclusive
                of eligible charges) only if it is lower than the LHA rate.</p>
                <a className={classes.link} target="_blank"href="https://www.nihe.gov.uk/housing-help/local-housing-allowance/current-lha-rent-levels">
                Up to date LHA rates are found on the NIHE website</a>
                <label htmlFor="amount_input">LHA rate or amount</label>
                <input value={maxRent} onChange={calculateMonthly} className={classes.amount} type="number" id="amount_input"></input>
                <label className={classes.freq_label}>Frequency</label>
                <select onChange={handleRent}className={classes.freq_select} name="freq" id="freq-select">
                    <option value="select">---select---</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="MONTHLY">Montly</option>
                </select>
                <label className={classes.ND_label} htmlFor="number_id">Enter number of non-dependent charges (e.g '2')</label>
                <input onChange={ND_handler} className={classes.ND_input} type="number" id="number_id"></input>
            </div>
        </React.Fragment>
    )
}
export default PrivateS;