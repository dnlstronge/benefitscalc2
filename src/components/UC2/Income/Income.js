import React, { useReducer} from "react";
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect"

const incomeREDUCER = (state, action) => {
    switch(action.type) {
        case "SELECT" : {
            return
        }
        case "WAGE_CLAIMANT": {
            
            return {...state, earnings_claimant:Number(action.payload) }
        }
        case "WAGE_PARTNER": {
            return {...state, earnings_partner: Number(action.payload)}
        }
        case "UNEARN": {
            return {...state, unearned: Number(action.payload)}
        }
        case "OTH": {
            return {...state, other: Number(action.payload)}
        }
        case "CB": {
            return {...state, childbenefit: Number(action.payload)}
        }
        default: {
            return
        }

    }
}

const Income = (propState) => {


    const [incomeValues, dispatchIncome] = useReducer(incomeREDUCER, {
        earnings_claimant: "",
        earnings_partner: "",
        unearned: "",
        other: "",
        childbenefit: ""
    })

 
    return (
        <React.Fragment>
        
            <div className={classes.container}>
            <h4 className={classes.heading}>Income</h4>
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            </div>
            
            <div> TEST WAGES CLAIMANT: {incomeValues.earnings_claimant}</div>
            <div> TEST WAGES PARTNER: {incomeValues.earnings_partner}</div>
            <div> TEST WAGES unearned {incomeValues.unearned}</div>
            <div> TEST WAGES other: {incomeValues.other}</div>
            <div> TEST WAGES childbenefit: {incomeValues.childbenefit}</div>

        </React.Fragment>
    )
}
export default Income;