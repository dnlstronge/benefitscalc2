import React, { useReducer, useEffect } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements


const additionalReducer = (state, action) => {
    switch(action.type) {
        case "NONE" : {
          return  {...state, WCA: 0, CE: 0  }
        }
        case "LCW"
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
           return dispatchAdditional( {type: "NONE", amount: e.target.value })
        }
        if(e.target.value === 0) {
           return dispatchAdditional( {type: "LCW_NONE", amount: e.target.value })
        }
        if(e.target.value === UC_elements.LCW) {
           return dispatchAdditional( {type: "LCW", amount: e.target.value })
        }
        if(e.target.value === UC_elements.LCWRA) {
           return dispatchAdditional( {type: "LCWRA", amount: e.target.value})
        }
        if(e.target.value === UC_elements.carer) {
            return dispatchAdditional( {type: "CARER", amount: e.target.value})
         }
    }


    useEffect(() => {
       
        return setPropState({...propState, CE: UC_elements.WCA} )
       
    }, [additional, propState, setPropState])

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4>Additional Elements</h4>
                <label htmlFor="select_WCA">Work Capabilty and carer element: 

                    <select onChange={handleElements}>
                        <option value="NONE">None</option>
                        <option value={0}>Limited Capabilty (status only)</option>
                        <option value={UC_elements.LCW}>Limited Capabilty (in payment)</option>
                        <option value={UC_elements.LCWRA}>LCW and Work Related Activity</option>
                        <option value={UC_elements.carer}>Carer Element</option>

                    </select>
                </label>
            </div>
        </React.Fragment>
    )
}
export default WCA;