import React from "react";
import classes from "./Income.module.css"

const Income = (props) => {


    const [incomeValues, setIncomeValues] = useState( {
        earnings: 0,
        unearned: 0,
        other: 0,
        childbenefit: 0
    })

    const placeHolder = (e) => {

    }
    return (
        <React.Fragment>
            <div className={classes.container}>
            <h4 className={classes.heading}>Income</h4>
            <div className={classes.sub_container}>
                <select onChange={placeHolder} className={classes.select_type}>
                    <option value="SELECT">--Income Type--</option>
                    <option value="WAGE">Wages (claimant)</option>
                    <option value="WAGE">Wages (partner)</option>
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
            </div>
        </React.Fragment>
    )
}
export default Income;