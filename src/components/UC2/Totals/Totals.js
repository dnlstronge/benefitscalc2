import React, { useState, useEffect } from "react";
import classes from "./Totals.module.css"




const Totals = ({PA, WCA, LCW, CE, TA, CHILD, CDL, CDH, CC, HC, NDD, W1, W2, UI, OI, CB, WA}) => {
    
        //local state 
    const round = (x) => {
                return Math.ceil( x * 100) /100
             }

    const [checknumber, setchecknumber] = useState("0")   
    const [housing, setHousing] = useState("0")
    const [total, setTotal] = useState("")
    /*housing less non dependents */
    useEffect(() => {
        if(HC === isNaN) {
            setHousing("0")
        }
        if(HC - NDD < 0) {
            setHousing("0")
        }
        else {
            setHousing(HC - NDD)
        }

    }, [HC, NDD] )


    /* Returns Total */

    useEffect(() => {
        
        let value = PA + WCA + LCW + CE + TA + CHILD + CDL + CDH + housing + NDD
        setTotal(value)
    }, [PA, WCA, LCW, CE, TA, CHILD, CDL, CDH, CC, housing, NDD])

    /* isNaN  */

    useEffect(() => {
        
        if(isNaN(total)) {
            setchecknumber((prev) => prev)
        }
        if(!isNaN(total)) {
            setchecknumber(Number(total))
        }
    }, [total])
    return (

        
        <React.Fragment>
        <div className={classes.container}>
            {PA > 0 && 
            <label className={classes.label_amount} htmlFor="amount">
                Personal Allowance:
                <p className={classes.label_p} id="amount">{PA}</p>
            </label>}
            {LCW > 0 && 
            <label className={classes.label_amount} htmlFor="amount">Limited Capabilty for Work: 
                <p className={classes.label_p} id="amount">+{LCW}</p>
            </label>}
            {WCA > 0 && 
            <label className={classes.label_amount} htmlFor="amount">LCW + Work Related Activity: 
                <p className={classes.label_p} id="amount">+{WCA}</p>
            </label>}
            {TA > 0 &&
            <label className={classes.label_amount} htmlFor="amount">Legacy transitional amount: 
                <p className={classes.label_p} id="amount">+{TA}</p>
            </label>}
            {CE > 0 && 
             <label className={classes.label_amount} htmlFor="amount">Carer element: 
                <p className={classes.label_p} id="amount">+{CE}</p>
            </label>}
            {HC > 0 &&
            <label className={classes.label_amount} htmlFor="amount">Eligible Housing: 
                <p className={classes.label_p} id="amount">+{round(housing)}</p>
            </label>}
            {CHILD > 0 && 
            <div className={classes.children_container}>
                <h4 className={classes.heading_children}>Child elements</h4>
                
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Eligible Children:</label> 
                    <p className={classes.p_children} id="section">+{CHILD}</p> 
                </div>
                {CDL > 0 &&
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Disabilty (low):</label>
                    <p className={classes.p_children} id="section">+{CDL}</p> 
                </div>}
                {CDH > 0 && 
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Disabilty (High):</label>
                    <p className={classes.p_children} id="section">+{CDH}</p> 
                </div>}
                {CC > 0 && 
                <div className={classes.children_sub_container}>
                    <label className={classes.label_children} htmlFor="section">Eligible childcare:</label> 
                    <p className={classes.p_children} id="section">{CC}</p> 
                </div>}
            </div>}
            <label className={classes.label_amount} htmlFor="amount">Max UC: 
                    <p className={classes.label_p} id="amount">{checknumber}</p>
            </label>
         
        </div>
        <div className={classes.container}>

      
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Wages Claimant</label>
                    <p className={classes.p_children} id="section">{W1}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Wages Partner</label>
                    <p className={classes.p_children} id="section">{W2}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Unearned Income</label>
                    <p className={classes.p_children} id="section">{UI}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Other Income</label>
                    <p className={classes.p_children} id="section">{OI}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Child Benefit</label>
                    <p className={classes.p_children} id="section">{CB}</p> 
                </div>
                <div className={classes.children_sub_container}>
                <label className={classes.label_children} htmlFor="section">Work Allowance</label>
                    <p className={classes.p_children} id="section">{WA}</p> 
                </div>
               
        </div>
</React.Fragment>
        
    )
}

export default Totals;