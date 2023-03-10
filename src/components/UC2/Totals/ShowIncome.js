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
        if(wages1 + wages2 - workAllowance < 0) {setEarningsFOR(0)}
        else {setEarningsFOR((wages1 + wages2 - workAllowance) * 0.55)}
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
        <h4 className={classes.heading}>Income & deductions</h4>
        {totalWAGE> 0 &&  
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Total wages:
                <p id="earnings" className={classes.income_p}>{totalWAGE}</p> </label>
                
            </div>}
        {workAllowance > 0 && 
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Work Allowance:
                <p id="earnings" className={classes.income_p}>-{workAllowance}</p> 
                </label>
                
            </div>}
        {earningsFOR > 0 && 
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Earnings for UC:
                <p id="earnings" className={classes.income_p}>{round(earningsFOR)}</p></label>
                
            </div>}
        {unearnedI > 0 && 
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Unearned Income:
                <p id="earnings" className={classes.income_p}>{round(unearnedI)}</p></label>
                
            </div>}
        {totalDEDUCT > 0 && 
            <div className={classes.container}>
                <label className={classes.income_label} htmlFor="earnings">Total Deductions
                <p id="earnings" className={classes.income_p}>{round(totalDEDUCT)}</p></label>
                
            </div>}
            

        </React.Fragment>
    )
}

export default ShowIncome;