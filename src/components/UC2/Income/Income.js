import React from "react";
import classes from "./Income.module.css"

const Income = (props) => {


    const placeHolder = (e) => {

    }
    return (
        <React.Fragment>
            <div className={classes.container}>
            <div className={classes.sub_container}>
                
                <select onChange={placeHolder} className={classes.select_type}>
                    <option value="SELECT">--Income Type--</option>
                    <option value="SOCIAL">Wages (claimant)</option>
                    <option value="PRIVATE">Wages(partner)</option>
                    <option value="COOWN">Unearned Income</option>
                    <option value="OWN">Other income</option>
                    <option value="NONE">Child Benefit</option>
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
            </div>
        </React.Fragment>
    )
}
export default Income;