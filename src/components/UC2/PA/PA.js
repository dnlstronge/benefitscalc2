import React from "react";
import UCElements from "../UCElements/UCElements"
import classes from "./PA.module.css"


const UC_elements = UCElements;



const PA = ({propState, setPropState}) => {

   const handleCouple = (e) => {
    setPropState({type: "COUPLE", COUPLE: e.target.value})
    setPropState({type: "RESET_WCA"})
   }
   const handleAge = (e) => {
    setPropState({type: "AGE", AGE: e.target.value})
    setPropState({type: "RESET_WCA"})
   }
             
     
       
      
    return (
        <React.Fragment>
        
            <div className={classes.container}>
                <label className={classes.dropdown_label} htmlFor="select_status">Couple/Single:
                    <select onChange={handleCouple} className={classes.dropdown_select}>
                        <option value="RS_NONE">--select--</option>
                        <option value="RS_SINGLE">Single</option>
                        <option value="RS_COUPLE">Couple</option>
                    </select>
                </label>

                <label className={classes.dropdown_label} htmlFor="select_status">Age group:
                    <select onChange={handleAge} className={classes.dropdown_select}>
                        <option value="AGE_NONE">--select--</option>
                        <option value="AGE_UNDER">Under 25</option>
                        <option value="AGE_OVER">Over 25</option>
                    </select>
                </label>

                 {propState.COUPLE !== 0 &&
                <div className={classes.warning_container}>
                    {propState.AGE === 0 &&
                        <p className={classes.warning}>Select an age group</p>}
               </div>}
            </div>
          
        </React.Fragment>
    )
}

export default PA;