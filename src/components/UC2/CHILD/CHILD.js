import React, { useState } from "react";
import classes from "./CHILD.module.css"
import UCElements from "../UCElements/UCElements"

const preARIL = UCElements.child_1st
const postARIL = UCElements.child_2nd

const CHILD = ({ setPropState }) => {

    const[oldest, setOldest] = useState(false)

    const handleOldest = (e) => {
          oldest ? setOldest(false) : setOldest(true)
          
          
    }
    const calcChildren = (n) => {
        if(oldest && n === 1) {
            return preARIL 
        }
        if(oldest && n > 1 ) {
            return (n * postARIL - postARIL) + preARIL
        }
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
                    <option>--select--</option>
                    <option>none</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </label>
          </div>

            
        </React.Fragment>
    )
}
export default CHILD;