import React, { useEffect, useState } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements

const WCA = ({propState, setPropState }) => {

    //LOCAL_STATE: 
    
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
        const handleLCWRA = (e) => {
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
        
        useEffect( () => {
            if(WCA_values.LCW_COUPLE === 0 ) {
                setPropState({type: "LCW_COUPLE", val: WCA_values.LCW_COUPLE})
            }
            if(WCA_values.LCW_COUPLE > 0 ) {
                setPropState({type: "LCW_COUPLE", val: WCA_values.LCW_COUPLE})
            }
            if(WCA_values.LCWRA_COUPLE === 0) {
                setPropState({type: "LCWRA_COUPLE", val: WCA_values.LCWRA_COUPLE})
            }
            if(WCA_values.LCWRA_COUPLE > 0) {
                setPropState({type: "LCWRA_COUPLE", val: WCA_values.LCWRA_COUPLE})
            }
            if(WCA_values.LCW_COUPLE === 0 ) {
                setPropState({type: "CE", val: WCA_values.CE})
            }
            if(WCA_values.LCW_COUPLE > 0 ) {
                setPropState({type: "CE", val: WCA_values.CE})
            }
           
          
               

        }, 
        
        [WCA_values.LCW_COUPLE, WCA_values.LCWRA_COUPLE, WCA_values.CE, setPropState])



    // DYNAMIC CSS variables: 

        const checkbox_dynamic = propState.COUPLE === "RS_COUPLE" ? classes.checkbox_container : classes.checkbox_container_disabled
        const label_dynamic_2 = propState.COUPLE !== "RS_SINGLE" ? classes.dropdown_label_grey : classes.dropdown_label
        const label_dynamic_3 = propState.WCA > 0 ? classes.checkbox_label_disabled : classes.checkbox_label
        const label_dynamic_4 = propState.LCW > 0 ? classes.checkbox_label_disabled : classes.checkbox_label
   
    return (
        <React.Fragment>
            
            
            
            <div className={classes.container}>
                <h4 className={classes.heading}>Additional Elements</h4>
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


                        <div className={checkbox_dynamic}>
                            <label className={label_dynamic_3} htmlFor="additional_elements">Add LCW (paid)
                                <input 
                                  id="additional_elements"
                                  onClick={handleLCW} 
                                  value={UC_elements.LCW} 
                                  className={classes.checkbox_input} 
                                  type="checkbox" 
                                  disabled={WCA_values.LCWRA_COUPLE > 0 || propState.COUPLE !== "RS_COUPLE"}
                                  />
                            </label>
                        </div>
                        <div className={checkbox_dynamic}>
                            <label className={label_dynamic_4} htmlFor="additional_elements">Add LCWRA
                                <input 
                                  id="additional_elements"
                                  onClick={handleLCWRA} 
                                  value={UC_elements.LCWRA} 
                                  className={classes.checkbox_input}
                                  type="checkbox" 
                                  disabled={WCA_values.LCW_COUPLE > 0 || propState.COUPLE !== "RS_COUPLE"}
                                  />
                            </label>
                        </div>
                        <div className={checkbox_dynamic}>
                            <label className={classes.checkbox_label} htmlFor="additional_elements">Add Carer Element
                                <input 
                                  id="additional_elements"
                                  onClick={handleCARER} 
                                  value={UC_elements.carer} 
                                  className={classes.checkbox_input} 
                                  type="checkbox" 
                                  disabled={propState.COUPLE !== "RS_COUPLE"}/>
                            </label>
                        </div>
                     </div>
                
            
        </React.Fragment>
    )
}
export default WCA;