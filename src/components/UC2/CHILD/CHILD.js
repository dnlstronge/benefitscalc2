import React, { useEffect, useState } from "react";
import classes from "./CHILD.module.css"
import UCElements from "../UCElements/UCElements"

const preAPRIL = UCElements.child_1st
const postAPRIL = UCElements.child_2nd
const dlaLow = UCElements.disabled_child_lower
const dlaHigh = UCElements.disabled_child_higher
const C1 = UCElements.childcare_1
const C2 = UCElements.childcare_2

const CHILD = ({ setPropState }) => {

     /* == Local state == */
    const [childDLA, setChildDLA ] = useState({ LOW: '', HIGH: ''})
    const [childcare, setChildCare] = useState({children: 0, amount: 0})
    const [warning, setWarning] = useState({warn1: false, warn2: false})
    const [oldest, setOldest] = useState(false)
    const [numChildren, setNumChildren] = useState(0)

    /* == handlers == */
    const handleOldest = (e) => {
          setNumChildren(0)
          oldest ? setOldest(false) : setOldest(true)  
    }
    const calcChildren = (n) => {
            return (n * postAPRIL - postAPRIL) + preAPRIL
    }

    const handleChildren = (e) => {
        if(e.target.value === 0 ) {
            return
        } 
        if(oldest === true) {
            return  setNumChildren(calcChildren(e.target.value))
        }
        else {
            setNumChildren(postAPRIL * e.target.value)
        }
    }

     
    const handleDLA_LOW = (e) => {
        setChildDLA({...childDLA, LOW: dlaLow * e.target.value})
    }
    const handleDLA_HIGH = (e) => {
        setChildDLA({...childDLA, HIGH: dlaHigh * e.target.value})
    }
    const handleChildcare = (e) => {
        setChildCare({...childcare, children: e.target.value})
    }
    const handleChildcareValue = (e) => {
        if(childcare.children === "1") {
            
            setChildCare({...childcare, amount: e.target.value * 0.85})
            e.target.value > C1 ? setWarning({...warning, warn1: true}) : setWarning({...warning, warn1: false})
        }
        if(childcare.children === "2") {
            
            setChildCare({...childcare, amount: e.target.value * 0.85})
            e.target.value > C2 ? setWarning({...warning, warn2: true}) : setWarning({...warning, warn2: false})
        }
    }
        
    /* Push to reducer */

    useEffect(() => {

       
        setPropState({

            type: "CHILD_ELEMENTS" , 
            children: numChildren, 
            disability_low: childDLA.LOW,
            disability_high: childDLA.HIGH,
            childcare: childcare.amount })
    }, 
    [ numChildren, 
      childDLA.LOW, 
      childDLA.HIGH,
      childcare.amount, 
      setPropState ])


    /* conditional Style */

    const disabled  = childcare.children > 0 ? classes.childcare_label : classes.childcare_label_disabled

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Child Elements</h4>
                <label htmlFor="oldest_checkbox" className={classes.checkbox_label}> Oldest child born before 6-APR-2017
                    <input className={classes.checkbox_input} value={oldest} onClick={handleOldest} id="oldest_checkbox" type="checkbox"></input>
                </label>
          {/* oldest born after */}     
                <label className={classes.dropdown_labelB} htmlFor="children_selection"> The oldest 2 children plus any who are exempt from 2 child limit
                  {!oldest && 
                   <select onChange={handleChildren} className={classes.dropdown_select} id="children_selection">
                    <option value="0">--select--</option>
                    <option value="0">none</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>}
          {/* oldest born before */}   
                  {oldest && 
                  <select onChange={handleChildren} className={classes.dropdown_select} id="children_selection">
                    <option value="0">--select--</option>
                    <option value="0">none</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                 </select>}
               </label>
            
         {/*Disability */}
                <label htmlFor="child_disabled" className={classes.dropdown_label}>Disability Low
                    <select onChange={handleDLA_LOW} id="child_disabled" className={classes.dropdown_select}>
                        <option value="0">--select--</option>
                        <option value="0">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label htmlFor="child_disabled" className={classes.dropdown_label}>Disability High
                    <select onChange={handleDLA_HIGH} id="child_disabled" className={classes.dropdown_select}>
                        <option value="0">--select--</option>
                        <option value="0">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
        {/* Childcare Costs */}
                <label htmlFor="childcare1" className={classes.dropdown_label}>Select childcare
                    <select id="childcare1" onChange={handleChildcare} className={classes.dropdown_childcare}>
                        <option value="0">--select--</option>
                        <option value="0">None</option>
                        <option value="1">1 child</option>
                        <option value="2">2+ children</option>
                    </select>
                </label>
                <label className={disabled} htmlFor="childcare_value"> Enter childcare amount
                    <input disabled={childcare.children === "0"} onChange={handleChildcareValue} className={classes.input_childcare} type="number"></input>
                </label>
                <div className={classes.warning_container}>
                    {warning.warn1 && 
                    <p>Error: childcare for one child cannot exceed £{C1}</p>}
                    {warning.warn2 && 
                    <p>Error: childcare for two children cannot exceeed £{C2}</p>}
                </div>
                

                
           </div>

            
        </React.Fragment>
    )
}
export default CHILD;