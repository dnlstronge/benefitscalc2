import React, { useReducer} from "react";
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect"

const incomeREDUCER = (state, action) => {
    switch(action.type) {
        case "SELECT" : {
            return
        }
        case "WAGE_CLAIMANT": {
            
            return {...state, earnings_claimant: Number(state.earnings_claimant) + Number(action.payload) }
        }
        case "WAGE_PARTNER": {
            return {...state, earnings_partner: Number(state.earnings_partner) + Number(action.payload)}
        }
        case "UNEARN": {
            return {...state, Nunearned: Number(state.unerned) + Number(action.payload)}
        }
        case "OTH": {
            return {...state, other: Number(state.other) + Number(action.payload)}
        }
        case "CB": {
            return {...state, childbenefit: Number(state.childbenefit) + Number(action.payload)}
        }
        default: {
            return
        }

    }
}

const Income = (props) => {


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
            <IncomeSelect setParentState={dispatchIncome} />
            <IncomeSelect setParentState={dispatchIncome} />
            </div>
            {incomeValues.earnings_claimant !== undefined &&
            <div> TEST WAGES CLAIMANT: {incomeValues.earnings_claimant}</div>}
        </React.Fragment>
    )
}
export default Income;