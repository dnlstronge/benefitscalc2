import React from "react";
import classes from "./Totals.module.css"




const Totals = ({PA, WCA, LCW, CE, TA, CHILD, CDL, CDH, CC, HC}) => {
   
        //local state 
    const round = (x) => {
                return Math.ceil( x * 100) /100
             }

        
     


    return (
        <div className={classes.container}>
            
            <label className={classes.label_amount} htmlFor="amount">
                Personal Allowance:
                <p className={classes.label_p} id="amount">{PA}</p>
            </label>
            
            <label className={classes.label_amount} htmlFor="amount">Limited Capabilty for Work: 
                <p className={classes.label_p} id="amount">{LCW}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">LCW + Work Related Activity: 
                <p className={classes.label_p} id="amount">{WCA}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Legacy transitional amount: 
                <p className={classes.label_p} id="amount">{TA}</p>
            </label>
             <label className={classes.label_amount} htmlFor="amount">Carer element: 
                <p className={classes.label_p} id="amount">{CE}</p>
            </label>
            <label className={classes.label_amount} htmlFor="amount">Eligible Housing: 
                <p className={classes.label_p} id="amount">{HC}</p>
            </label>
            <div className={classes.children_container}>
                <h4 className={classes.heading_children}>Child elements</h4>
                
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Eligible Children:</label> 
                    <p className={classes.p_children} id="section">{CHILD}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Disabilty (low):</label>
                    <p className={classes.p_children} id="section">{CDL}</p> 
                </div>
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Disabilty (High):</label>
                    <p className={classes.p_children} id="section">{CDH}</p> 
                </div>
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Eligible childcare:</label> 
                    <p className={classes.p_children} id="section">{CC}</p> 
                </div>
                    
                
            </div>
            <label className={classes.label_amount} htmlFor="amount">Max UC: 
                <p className={classes.label_p} id="amount">{
                    round(PA
                    + WCA
                    + LCW
                    + CE
                    + TA
                    + CHILD
                    + CDL
                    + CDH
                    + CC
                    + HC
                    )
                }</p>
            </label>
         
        </div>
    )
}

export default Totals;