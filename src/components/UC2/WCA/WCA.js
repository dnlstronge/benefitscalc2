import React, { useEffect, useState } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements

const WCA = ({propState, setPropState }) => {

    //LOCAL_STATE: 
    const [clickLCW, setClickLCW] = useState(false)
    const [WCA_values, set_WCA_values] = useState({
        LCW: 0,
        LCWRA: 0,
        CARER: 0,
        LCW_COUPLE: 0,
        LCWRA_COUPLE: 0,
        CE: 0,
    })

    //Handle SINGLE

    const handleElements = (e) => {
        if(e.target.value === "NONE" ) {
           return setPropState( {type: "NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW_NONE") {
           return setPropState( {type: "LCW_NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW") {
           return setPropState({type: "LCW", WCA: UC_elements.LCW, CE: 0 })
        }
        if(e.target.value === "LCWRA") {
           return setPropState( {type: "LCWRA", WCA: UC_elements.LCWRA, CE: 0 })
        }
        if(e.target.value === "CARER") {
            return setPropState( {type: "CARER", WCA: 0, CE: UC_elements.carer })
         }
    }
    // Handle COUPLE:

    

       
        const handleLCW = (e) => {
            if(WCA_values.LCW_COUPLE === 0) {
                set_WCA_values({...WCA_values, LCW_COUPLE: e.target.value })
            }
            if(WCA_values.LCW_COUPLE > 0 ) {
                set_WCA_values({...WCA_values, LCW_COUPLE: 0})
            }
            }
        const handleLCWRA =(e) => {
            if(WCA_values.LCWRA_COUPLE === 0) {
             set_WCA_values({...WCA_values, LCWRA_COUPLE: e.target.value})
            }
            if(WCA_values.LCWRA_COUPLE > 0) {
             set_WCA_values({...WCA_values, LCWRA_COUPLE: 0})
                }
        }
        const handleCARER = (e) => {
            if(WCA_values.CE === 0) {
                set_WCA_values({...WCA_values, CE: e.target.value})
               }
            if(WCA_values.CE > 0) {
                set_WCA_values({...WCA_values, CE: 0})
              }
        }
        




    // DYNAMIC CSS variables: 

        const label_dynamic = propState.COUPLE === "RS_COUPLE" ? classes.dropdown_label : classes.dropdown_label_grey
        const label_dynamic_2 = propState.COUPLE === "RS_SINGLE" ? classes.dropdown_label : classes.dropdown_label_grey
        
  
   
    return (
        <React.Fragment>
            
            <h4 className={classes.heading}>Additional Elements</h4>
            
            <div className={classes.container}>
                  <br></br>
                    <label className={label_dynamic_2} htmlFor="select_WCA">Work Capabilty/Carer element: 
                         <select className={classes.dropdown_select} 
                                disabled={propState.COUPLE !== "RS_SINGLE"} 
                                onChange={handleElements}>
                            <option value="NONE">--select--</option>
                            <option value="NONE">None</option>
                            <option value="LCW_NONE">Limited Capabilty (status only)</option>
                            <option value="LCW">Limited Capabilty (in payment)</option>
                            <option value="LCWRA">LCW and Work Related Activity</option>
                            <option value="CARER">Carer Element</option>
                         </select>
                     </label>
                    
{/*=======COUPLE========= */}
                        <div className={classes.checkbox_container}>
                            <label className={classes.checkbox_label} htmlFor="additional_elements">Add LCW (paid element) to the claim:
                                <input 
                                  onClick={handleLCW} 
                                  value={UC_elements.LCW} 
                                  className="checkbox" 
                                  type="checkbox" 
                                  disabled={WCA_values.LCWRA_COUPLE > 0}
                                  />
                            </label>
                        </div>
                        <div className={classes.checkbox_container}>
                            <label className={classes.checkbox_label} htmlFor="additional_elements">Add LCWRA to the claim:
                                <input 
                                  onClick={handleLCWRA} 
                                  value={UC_elements.LCWRA} 
                                  className="checkbox" 
                                  type="checkbox" 
                                  disabled={WCA_values.LCW_COUPLE > 0}
                                  />
                            </label>
                        </div>
                        <div className={classes.checkbox_container}>
                            <label className={classes.checkbox_label} htmlFor="additional_elements">Add Carer Element to the claim:
                                <input 
                                  onClick={handleCARER} 
                                  value={UC_elements.carer} 
                                  className="checkbox" 
                                  type="checkbox" />
                            </label>
                        </div>
                        <div>TEST: {WCA_values.LCW_COUPLE} TEST: {WCA_values.LCWRA_COUPLE} TEST {WCA_values.CE} </div>
                     </div>
                
            
        </React.Fragment>
    )
}
export default WCA;