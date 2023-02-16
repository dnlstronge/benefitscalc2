import React, { useEffect, useReducer, useState} from "react";
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect"
import UCElements from "../UCElements/UCElements"

const UC_elements = UCElements

const incomeREDUCER = (state, action) => {
    switch(action.type) {
        case "SELECT" : {
            return
        }
        case "WAGE_CLAIMANT": {
            if(state.earnings_claimant > 0) {
                return {...state, error: true}
            }
            return {...state, earnings_claimant: Number(action.payload), error: false }
        }
        case "WAGE_PARTNER": {
            if(state.earnings_partner > 0) {
                return {...state, error: true}
            }
            return {...state, earnings_partner: Number(action.payload), error: false}
        }
        case "UNEARN": {
            if(state.unearned > 0) {
                return {...state, error: true}
            }
            return {...state, unearned: Number(action.payload), error: false}
        }
        case "OTH": {
            if(state.other > 0) {
                return {...state, error: true}
            }
            return {...state, other: Number(action.payload), error: false}
        }
        case "CB": {
            if(state.childbenefit > 0) {
                return {...state, error: true}
            }
            return {...state, childbenefit: Number(action.payload), error: false}
        }
        default: {
            return
        }

    }
}

const Income = ({setPropState}) => {
    const [WA, setWA] = useState("")

    const [incomeValues, dispatchIncome] = useReducer(incomeREDUCER, {
        earnings_claimant: "",
        earnings_partner: "",
        unearned: "",
        other: "",
        childbenefit: "",
        error: false
    })
    const [ERROR, setERROR] = useState(false)

    // handles duplicate income values

    useEffect(() => {
        incomeValues.error ? setERROR(true) : setERROR(false)
    }, [incomeValues.error])

    // lift up to main state

    useEffect(() => {
        setPropState({
           type: "INCOME", 
           WAGE1: incomeValues.earnings_claimant, 
           WAGE2: incomeValues.earnings_partner, 
           UNEARNED: incomeValues.unearned  ,
           OTHER: incomeValues.other,
           CHILD: incomeValues.childbenefit,
           WORKALLOWANCE: WA }
        )
    }, [
        WA,
        incomeValues.earnings_claimant, 
        incomeValues.earnings_partner, 
        incomeValues.unearned,
        incomeValues.other,
        incomeValues.childbenefit, setPropState])

        const handleWA = (e) => {
            setWA(e.target.value)
        }

    return (
        <React.Fragment>
        
            <div className={classes.container}>
            <h4 className={classes.heading}>Income</h4>
            {ERROR && 

            <div className={classes.select_warning}> Error: Duplicate income value selected </div>}
            <label htmlFor="workallowance" className={classes.WA_label} >
                <select onChange={handleWA} id="workallowance" className={classes.WA_select}>
                    <option value={UC_elements.WA_NULL}>--select Work Allowance--</option>
                    <option value={UC_elements.WA_NULL}>None</option>
                    <option value={UC_elements.work_allowance_higher}>£{UC_elements.work_allowance_higher} (no housing costs) £{}</option>
                    <option value={UC_elements.work_allowance}>£{UC_elements.work_allowance} (LCW or Children) £{} </option>
                </select>
            </label>
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