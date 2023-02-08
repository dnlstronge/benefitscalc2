import React, { useReducer, useEffect } from "react";
import UCElements from "../UCElements/UCElements"
import classes from "./PA.module.css"


const UC_elements = UCElements;


const PA_reducer = (state, action) => {
    if(action.type === "RSTATUS") {
        return {...state, single: action.value}
    }
    if(action.type === "AGE") {
        return {...state, ageGroup: action.value}
    }
}

const PA = ({propState, setPropState}) => {

    const [PA_Select, dispatchPA] = useReducer( PA_reducer, 
                                
                                            {single: "",
                                             ageGroup: ""})

    const handleCouple = (e) => {
        dispatchPA({type: "RSTATUS", value: e.target.value})
    }
    const handleAge = (e) => {
        dispatchPA({type: "AGE", value: e.target.value})
    }

    useEffect(()=> {
        if(PA_Select.single === "NONE" || PA_Select.ageGroup === "NONE") {
         return   setPropState({...propState, PA: 0})
        }
        
        if(PA_Select.single === "SINGLE" && PA_Select.ageGroup === "UNDER") {
         return setPropState({...propState, PA: UC_elements.single_under25 })
        }
        if(PA_Select.single === "SINGLE" && PA_Select.ageGroup === "OVER") {
         return setPropState({...propState, PA: UC_elements.single_over25 })
        }
        if(PA_Select.single === "COUPLE" && PA_Select.ageGroup === "UNDER") {
         return setPropState({...propState, PA: UC_elements.joint_under25 })
        }
        if(PA_Select.single === "COUPLE" && PA_Select.ageGroup === "OVER") {
         return setPropState({...propState, PA: UC_elements.joint_over25 })
        }
        

    }, [PA_Select])

    return (
        <React.Fragment>
        
            <div className={classes.container}>
                <label className={classes.dropdown_label} htmlFor="select_status">Couple/Single:
                    <select onChange={handleCouple} className={classes.dropdown_select}>
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label>
                <label className={classes.dropdown_label} htmlFor="select_status">Age group:
                    <select onChange={handleAge} className={classes.dropdown_select}>
                        <option value="NONE">--select--</option>
                        <option value="UNDER">Under 25</option>
                        <option value="OVER">Over 25</option>
                    </select>
                </label>
            </div>
          
        </React.Fragment>
    )
}

export default PA;