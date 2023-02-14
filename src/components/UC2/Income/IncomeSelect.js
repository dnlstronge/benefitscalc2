import React, { useState } from "react";
import classes from "./IncomeSelect.module.css"

const IncomeSelect = ({ setParentState }) => {

    //local state:

    const [type, setType] = useState("SELECT")
    const [amount, setAmount] = useState("SELECT")
    const [freq, setFreq ] = useState("0")

    // handlers: 


    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleFreq = (e) => {
        setFreq(e.target.value)
    }
    return (
        <React.Fragment>
            <div className={classes.sub_container}>
                <select onChange={handleType} className={classes.select_type}>
                    <option value="SELECT">--Income Type--</option>
                    <option value="WAGE_CLAIMANT">Wages (claimant)</option>
                    <option value="WAGE_PARTNER">Wages (partner)</option>
                    <option value="UNEARN">Unearned Income</option>
                    <option value="OTH">Other income</option>
                    <option value="CB">Child Benefit</option>
                </select>
                <input disabled={type === "SELECT"} onChange={handleAmount} className={classes.select_amount} placeholder="Eligible Costs" type="number"/>
                <select disabled={amount === "SELECT"} onChange={handleFreq} className={classes.select_freq}>
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