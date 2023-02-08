import React, { useReducer, useEffect } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements


const additionalReducer = (state, action) => {
    // if(action.type === "NONE") {
        
    //     return {...state, WCA: 0, CE: 0}
    // }
    // if(action.type === "LCWRA") {
        
    //     return {...state, WCA: action.WCA, CE: 0}
    // }
    switch(action.type) {
        case "NONE" : {
          return  {...state, WCA: 0, CE: 0  }
        }
        case "LCW_NONE": {
            return {...state, WCA: 0, CE: 0}
        }
        case "LCW": {
            return {...state, WCA: action.WCA, CE: 0}
        }
        case "LCWRA": {
            return {...state, WCA: action.WCA, CE: 0}
        }
        case "CARER": {
            return {...state, WCA: 0, CE: action.CE}
        }
        default : {
            return {...state, WCA: 0, CE: 0}
        }
    }
       
    }





const WCA = ({ propState, setPropState }) => {




    const [additional, dispatchAdditional] = useReducer( additionalReducer, 
                                                            {
                                                                WCA: 0,
                                                                CE: 0
                                                            })

    const handleElements = (e) => {
        if(e.target.value === "NONE" ) {
           return dispatchAdditional( {type: "NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW_NONE") {
           return dispatchAdditional( {type: "LCW_NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW") {
           return dispatchAdditional( {type: "LCW", WCA: UC_elements.LCW, CE: 0 })
        }
        if(e.target.value === "LCWRA") {
           return dispatchAdditional( {type: "LCWRA", WCA: UC_elements.LCWRA, CE: 0 })
        }
        if(e.target.value === "CARER") {
            return dispatchAdditional( {type: "CARER", WCA: 0, CE: UC_elements.carer })
         }
    }



    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4>Additional Elements</h4>
                <label htmlFor="select_WCA">Work Capabilty and carer element: 

                    <select onChange={handleElements}>
                        <option value="NONE">None</option>
                        <option value="LCW_NONE">Limited Capabilty (status only)</option>
                        <option value="LCW">Limited Capabilty (in payment)</option>
                        <option value="LCWRA">LCW and Work Related Activity</option>
                        <option value="CARER">Carer Element</option>
                        

                    </select>
                </label>
                <p>TEST VALUE: {additional.WCA} TEST VALUE {additional.CE}</p>
            </div>
        </React.Fragment>
    )
}
export default WCA;