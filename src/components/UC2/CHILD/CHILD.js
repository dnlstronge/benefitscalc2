import React, { useState } from "react";
import classes from "./CHILD.module.css"
import UCElements from "../UCElements/UCElements"

const preAPRIL = UCElements.child_1st
const postAPRIL = UCElements.child_2nd
const dlaLow = UCElements.disabled_child_lower
const dlaHigh = UCElements.disabled_child_higher

const CHILD = ({ setPropState }) => {

     /* == Local state == */
    const [childDLA, setChildDLA ] = useState({ LOW: 0, HIGH: 0})
    const[oldest, setOldest] = useState(false)
    const[numChildren, setNumChildren] = useState(0)

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

    }
    const handleDLA_HIGH = (e) => {
        
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Child Elements</h4>
                <label htmlFor="oldest_checkbox" className={classes.checkbox_label}> Oldest child born before 6-APR-2017
                    <input value={oldest} onClick={handleOldest} id="oldest_checkbox" type="checkbox"></input>
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
          
          </div>

            
        </React.Fragment>
    )
}
export default CHILD;