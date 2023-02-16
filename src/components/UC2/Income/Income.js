import React, { useReducer, useState } from "react";
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect"

const incomeREDUCER = (state, action) => {
    switch(action.type) {
        case "SELECT" : {
            return
        }
        case "WAGES_CLAIMANT": {
            return {...state, earnings_claimant: action.payload}
        }
        case "WAGES_PARTNER": {
            return {...state, earnings_partner: action.payload}
        }
        case "UNEARN": {
            return {...state, unearned: action.payload}
        }
        case "OTH": {
            return {...state, other: action.payload}
        }
        case "CB": {
            return {...state, childbenefit: action.payload}
        }

    }
}

const Income = (props) => {


    const [incomeValues, dispatchIncome] = useReducer(incomeREDUCER, {
        earnings_claimant: 0,
        earnings_partner: 0,
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
            <IncomeSelect setParentState={dispatchIncome} />
            
            </div>
        </React.Fragment>
    )
}
export default Income;