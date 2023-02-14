import React, { useState } from "react";
import classes from "./IncomeSelect.module.css"

const IncomeSelect = ({ setParentState }) => {

    //local state:

    const [type, setType] = useState("0")
    const [amount, setAmount] = useState("0")
    const [freq, setFreq ] = useState("0")

    // handlers: 

    const placeHolder = (e) => {

    }
    const handleType = () => {

    }

    const handleAmount = () => {

    }

    const handle_feq = () => {

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
                <input onChange={placeHolder} className={classes.select_amount} placeholder="Eligible Costs" type="number"/>
                <select onChange={placeHolder} className={classes.select_freq}>
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