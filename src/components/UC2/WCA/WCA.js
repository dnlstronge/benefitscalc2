import React from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements

const WCA = ({propState, setPropState }) => {


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

  
   
    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Additional Elements</h4>
                <label className={classes.dropdown_label} htmlFor="select_WCA">Work Capabilty and carer element: 
                    {propState.COUPLE === "RS_SINGLE" &&
                    <select className={classes.dropdown_select} onChange={handleElements}>
                    
            {propState.AGE !== 0 && <option value="NONE">None</option>}
            {propState.AGE !== 0 && <option value="LCW_NONE">Limited Capabilty (status only)</option>}
            {propState.AGE !== 0 && <option value="LCW">Limited Capabilty (in payment)</option>}
            {propState.AGE !== 0 && <option value="LCWRA">LCW and Work Related Activity</option>}
            {propState.AGE !== 0 && <option value="CARER">Carer Element</option>}
                    </select>}
                </label>
                
            </div>
        </React.Fragment>
    )
}
export default WCA;