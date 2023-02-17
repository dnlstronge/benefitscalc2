import React, { useState, useEffect } from "react";
import classes from "./ShowIncome.module.css"

const round = (x) => {

    return Math.ceil( x * 100) /100
 
 }

const ShowIncome = ({ wages1, wages2, unearned, other, childbenefit, workAllowance, deduct }) => {

    const[totalWAGE, setTotalWAGE] = useState("0")
    const[earningsFOR, setEarningsFOR] = useState("0")
    const[unearnedI, setUnearnedI] = useState("0")
    const [CB, setCB] = useState("0")
    const [totalDEDUCT, setTOTALDEDUCT] = useState("0")


    /*determine deductions */

    useEffect(() => {
        setTotalWAGE(wages1 + wages2)
        setEarningsFOR((wages1 + wages2 - workAllowance) * 0.55)
        setUnearnedI(unearned + other)
        setCB(childbenefit)
        setTOTALDEDUCT(earningsFOR + unearned)
    }, [wages1, wages2, unearned ,other, childbenefit, workAllowance, earningsFOR])

    /* pass total deductions */
    useEffect(() => {
        deduct(totalDEDUCT)
    },[totalDEDUCT, deduct])

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
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Unearned Income:</label>
                <p id="earnings" className={classes.income_p}>{round(unearnedI)}</p>
            </div>
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Total Deductions</label>
                <p id="earnings" className={classes.income_p}>{round(totalDEDUCT)}</p>
            </div>
            

        </React.Fragment>
    )
}

export default ShowIncome;