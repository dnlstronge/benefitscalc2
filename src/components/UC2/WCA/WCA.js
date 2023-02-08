import React, { useReducer, useEffect } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements


const additionalReducer = (state, action) => {
    if(action.type === "SINGLE" && action.value === "NONE") {
      return  { isLCW: "", isCarer: "", WCA: 0, CE: 0 }
    }
    if(action.type === "SINGLE" && action.value === 0) {
        return { isLCW: "YES", isCarer: "", WCA: 0, CE: 0}
    }
    if(action.type === "SINGLE" && action.value === UC_elements.LCW) {
        return { isLCW: "YES", isCarer: "", WCA: action.value, CE: 0 }
    }
    if(action.type === "SINGLE" && action.value === UC_elements.LCWRA) {
        return { isLCW: "YES", isCarer: "", WCA: action.value, CE: 0}
    }
    if(action.type === "SINGLE" && action.value === UC_elements.carer) {
        return {  isLCW: "", isCarer: "YES", WCA: 0, CE: action.value} 
    }
    }





const WCA = ({ propState, setPropState }) => {




    const [additional, dispatchAdditional] = useReducer( additionalReducer, 
                                                            {isLCW: "",
                                                            isCarer: "",
                                                            WCA: "",
                                                            CE: ""})

    const handleElements = (e) => {
        if(e.target.value === "NONE" ) {
            dispatchAdditional( { type: "SINGLE", value: e.target.value })
        }
    }


    useEffect(() => {
       if(additional.CE > 0) {
        return setPropState({...propState, CE: UC_elements.carer} )
       }
    }, [additional])

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4>Addtional Elements</h4>
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