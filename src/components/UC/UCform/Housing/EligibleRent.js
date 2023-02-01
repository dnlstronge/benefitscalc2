import React, { useState } from 'react'
import classes from "./EligibleRent.module.css"
import HousingCosts from "../../../Calculations/HousingCosts"



const EligibleRent = ({ state_HOUSING, set_state_HOUSING, coowner, owner }) => {


  
  /* values for CALC order: (maxRent, SSSC, rentFree, NDD ) */
  
  const CALC = HousingCosts
   
/* Local state */
    const [freq, setfreq] = useState("")
    const [calcHOUSE, setCalcHOUSE] = useState(0)
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
    {owner === "OWN" && 
                <p className={classes.warning2} > Lease-holders who have service charges can claim but there is normally a 
                  waiting period, see other restrictions in relation to earned income etc.</p>}
    {coowner === "CO-OWN" &&  
                <p className={classes.warning}>Warning: ineligble for service charge if claimant has earned income. See other
                restrictions, they might be better off with the higher work allowance</p>}

                <label className={classes.ND_label} htmlFor="number_id">Enter number of non-dependent charges (e.g '2')</label>
                <input className={classes.ND_input} type="number" id="number_id" onChange={ND_handler}></input>
    
                <label className={classes.title}>Eligible rent and/or service charge(s)</label>
                <input 
                    className={classes.amount} 
                    value={maxRent}
                    onChange={calculateMonthly} 
                    type="number"></input>
               
                <select className={classes.select_freq} onChange={handleRent}>
                        <option value="select">-select-</option>
                        <option value="WEEKLY">Weekly</option>
                        <option value="MONTHLY">Monthly</option>
                    

                </select>
             
                
            
    </React.Fragment>
  )
}
export default EligibleRent;

