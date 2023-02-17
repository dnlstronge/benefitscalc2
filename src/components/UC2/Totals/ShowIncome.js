import React, { useState, useEffect } from "react";
import classes from "./ShowIncome.module.css"

const round = (x) => {

    return Math.ceil( x * 100) /100
 
 }

const ShowIncome = ({ wages1, wages2, unearned, other, childbenefit, workAllowance }) => {

    const[totalWAGE, setTotalWAGE] = useState("")
    const[earningsFOR, setEarningsFOR] = useState("")
    const[unearned, setUnearned] = useState("")

    useEffect(() => {
        setTotalWAGE(wages1 + wages2)
        setEarningsFOR((wages1 + wages2 - workAllowance) * 0.55)
    }, [wages1, wages2, workAllowance])

    return (
        <React.Fragment>
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Total wages: </label>
                <p id="earnings" className={classes.income_p}>{totalWAGE}</p>
            </div>
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Work Allowance: </label>
                <p id="earnings" className={classes.income_p}>-{workAllowance}</p>
            </div>
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Earnings for UC:</label>
                <p id="earnings" className={classes.income_p}>{round(earningsFOR)}</p>
            </div>

        </React.Fragment>
    )
}

export default ShowIncome;