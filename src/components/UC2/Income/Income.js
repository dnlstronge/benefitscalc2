import React, { useEffect, useReducer, useState} from "react";
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect"



const incomeREDUCER = (state, action) => {
    switch(action.type) {
        case "SELECT" : {
            return
        }
        case "WAGE_CLAIMANT": {
            if(state.earnings_claimant > 0) {
                return {...state, error: true}
            }
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
        childbenefit: "",
        error: false
    })
    const [ERROR, setERROR] = useState(false)

    useEffect(() => {
        incomeValues.error ? setERROR(true) : setERROR(false)
    }, [incomeValues.error])

    return (
        <React.Fragment>
        
            <div className={classes.container}>
            <h4 className={classes.heading}>Income</h4>
            {error && 
            <div className={classes.select_warning}> Error: Duplicate selected </div>}
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            <IncomeSelect GLOBAL={incomeValues} setParentState={dispatchIncome} />
            </div>
           

        </React.Fragment>
    )
}
export default Income;