import React, { useState } from "react";
import classes from "./CHILD.module.css"

const CHILD = ({ setPropState }) => {

    const[oldest, setOldest] = useState(false)

    const handleOldest = (e) => {
          oldest ? setOldest(false) : setOldest(true)
          
          
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
            {oldest && 
            <div>TEST BABY!!! </div>}

            
        </React.Fragment>
    )
}
export default CHILD;