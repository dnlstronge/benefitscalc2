import React from "react";
import classes from "./PA.module.css"






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
                <h4 className={classes.heading}>Personal Allowance</h4>
                <label className={classes.dropdown_label} htmlFor="select_status">Couple/Single:
                    <select onChange={handleCouple} className={classes.dropdown_select}>
                        <option value="RS_NONE">--select--</option>
                        <option value="RS_SINGLE">Single</option>
                        <option value="RS_COUPLE">Couple</option>
                    </select>
                </label>
                
                {propState.COUPLE !== 0 &&
                <div className={classes.warning_container}>
                    {propState.AGE === 0 &&
                        <p className={classes.warning}>Select an age group</p>}
               </div>}

                <label className={classes.dropdown_label} htmlFor="select_status">Age group:
                    <select onChange={handleAge} className={classes.dropdown_select}>
                        <option value="AGE_NONE">--select--</option>
                        <option value="AGE_UNDER">Under 25</option>
                        <option value="AGE_OVER">Over 25</option>
                    </select>
                </label>

                
            </div>
          
        </React.Fragment>
    )
}

export default PA;