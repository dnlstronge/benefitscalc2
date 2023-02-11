import React, { useState } from "react";
import classes from "./CHILD.module.css"
import UCElements from "../UCElements/UCElements"

const preARIL = UCElements.child_1st
const postARIL = UCElements.child_2nd

const CHILD = ({ setPropState }) => {

    const[oldest, setOldest] = useState(false)
    const[numChildren, setNumChildren] = useState(0)
    const handleOldest = (e) => {
          oldest ? setOldest(false) : setOldest(true)
          
          
    }
    const calcChildren = (n) => {
        if(oldest && n == 1) {
            return preARIL 
        }
        if(oldest && n > 1 ) {
            return (n * postARIL - postARIL) + preARIL
        }
    }

    const handleChildren = (e) => {
        
    }
    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Child Elements</h4>
                <label htmlFor="oldest_checkbox" className={classes.checkbox_label}> Oldest child born before 6-APR-2017
                    <input value={oldest} onClick={handleOldest} id="oldest_checkbox" type="checkbox"></input>
                </label>
                <label className={classes.dropdown_label} htmlFor="exempt_child"></label>
            </div>

          {/* oldest born after */}
          <div className={classes.sub_container}>
            <label className={classes.child_label} htmlFor="children_selection"> Number of Children exempt from 2 child limit
                <select className={classes.child_select} id="children_selection">
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
                </select>
            </label>
          </div>

            
        </React.Fragment>
    )
}
export default CHILD;