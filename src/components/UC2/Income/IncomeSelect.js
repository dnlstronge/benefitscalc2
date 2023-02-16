import React, { useEffect, useState } from "react";
import classes from "./IncomeSelect.module.css"

const IncomeSelect = ({ setParentState }) => {

    //local state:

    

    const [type, setType] = useState("")
    const [amount, setAmount] = useState("")
    const [actual, setActual] = useState("")
    const [freq, setFreq ] = useState("")

    // handlers: 


    const handleType = (e) => {
      
        setAmount("")
        setActual("")
        setFreq("")
        setType(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleFreq = (e) => {
        setFreq(e.target.value)
        switch(e.target.value) {
            case "PW": {
                return setActual(amount / 12 * 52)
            }
            case "2W": {
                return setActual(amount / 12 * 26)
            }
            case "4W": {
                return setActual(amount / 12 * 13)
            }
            case "PM": {
                return setActual(amount)
            }
            default : {
                return
            }
        }
        
    }

    // finds actual
    useEffect(() => {
        const round = (x) => {

            return Math.ceil( x * 100) /100
         
         }
         if(type !== "" && actual !== "") {
       return setParentState({type: type, payload: round(actual)} )}
    }, [type, actual, setParentState])

    return (
        <React.Fragment>
            <div className={classes.sub_container}>
                <select value={type} onChange={handleType} className={classes.select_type}>
                    <option value="SELECT">--Income Type--</option>
                    
                    <option value="WAGE_CLAIMANT">Wages (claimant)</option>
                    
                    <option value="WAGE_PARTNER">Wages (partner)</option>
                    
                    <option value="UNEARN">Unearned Income</option>
                    
                    <option value="OTH">Other income</option>
                    
                    <option value="CB">Child Benefit</option>
                    
                </select>
                
                <input value={amount} disabled={type === ""} onChange={handleAmount} className={classes.select_amount} placeholder="Eligible Costs" type="number"/>
                <select value={freq} disabled={amount === ""} onChange={handleFreq} className={classes.select_freq}>
                    <option value="SELECT">--frequency--</option>
                    <option value="PW">Weekly</option>
                    <option value="2W">Fortnightly</option>
                    <option value="4W">Four-weekly</option>
                    <option value="PM">Monthly</option>
                </select>
                
            </div>
           
                
        </React.Fragment>
    )
}
export default IncomeSelect;