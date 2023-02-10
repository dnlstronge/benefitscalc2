import React, { useState } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements

const WCA = ({propState, setPropState }) => {

    //LOCAL_STATE: 
    const [clickLCW, setClickLCW] = useState(false)

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
    // Handle COUPLE
        const handleClick = (e) => {
            clickLCW ? setClickLCW(false) : setClickLCW(true)
        }
        const handleLCW_A = (e) => {

        }

    // DYNAMIC CSS variables: 

        const label_dynamic = propState.COUPLE === "RS_COUPLE" ? classes.dropdown_label : classes.dropdown_label_grey
        const label_dynamic_2 = propState.COUPLE === "RS_SINGLE" ? classes.dropdown_label : classes.dropdown_label_grey
        
  
   
    return (
        <React.Fragment>
            
            <h4 className={classes.heading}>Additional Elements</h4>
            
            <div className={classes.container}>
                  <div className={classes.sub_container}> 
                    <label className={label_dynamic_2} htmlFor="select_WCA">Work Capabilty/Carer element: 
                         <select className={classes.dropdown_select} 
                                disabled={propState.COUPLE !== "RS_SINGLE"} 
                                onChange={handleElements}>
                            <option value="NONE">None</option>
                            <option value="LCW_NONE">Limited Capabilty (status only)</option>
                            <option value="LCW">Limited Capabilty (in payment)</option>
                            <option value="LCWRA">LCW and Work Related Activity</option>
                            <option value="CARER">Carer Element</option>
                         </select>
                     </label>
                    </div>

                    <div className={classes.sub_container}>
                        <label className={label_dynamic}>Migration with LCW
                            <input 
                                onClick={handleClick} 
                                value={true} 
                                className={classes.checkbox} 
                                disabled={propState.COUPLE !== "RS_COUPLE"}
                                type="checkbox"/>
                        </label>
                        {clickLCW && 
                        <label className={label_dynamic}
                                style= {{color: propState.COUPLE !== "RS_COUPLE" && "grey" }}  
                                htmlFor="select_WCA">Limited capabilty for work (paid)
                            <select 
                                className={classes.dropdown_select}
                                onChange={handleLCW_A}>
                                <option>--select--</option>
                                <option>Claimant</option>
                                <option>Partner</option>
                                <option>Both</option>
                            </select>  
                        </label>}
                         {!clickLCW && 
                        <label className={label_dynamic} htmlFor="select_WCA">LCW (Work Allowance only)
                            <select 
                              className={classes.dropdown_select} 
                              onChange={handleLCW_A}
                              disabled={propState.COUPLE !== "RS_COUPLE"}>
                                <option>--select--</option>
                                <option>Claimant</option>
                                <option>Partner</option>
                                <option>Both</option>
                            </select>  
                        </label>}
                     </div>
                </div>
            
        </React.Fragment>
    )
}
export default WCA;