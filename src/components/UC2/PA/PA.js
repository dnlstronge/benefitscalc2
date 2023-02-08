import React, { useReducer, useEffect } from "react";
import CardA from "../card/CardA";
import classes from "./PA.module.css"


const PA_reducer = (state, action) => {
    if(action.type === "RSTATUS") {
        return {...state, single: action.value}
    }
}

const PA = ({propState, setPropState}) => {

    const [PA_Select, dispatchPA] = useReducer( PA_reducer, 
                                
                                            {single: "",
                                             ageGroup: ""})

    const handleCouple = (e) => {
        dispatchPA({type: "RSTATUS", value: e.target.value})
    }

    useEffect(()=> {
        if(PA_Select.single === "NONE" && PA_Select.ageGroup === "NONE") {
            setPropState({...propState, PA: 0})
        }
    }, [])

    return (
        <React.Fragment>
        
            <div className={classes.container}>
                <label className={classes.dropdown_label} htmlFor="select_status">Couple/single:
                    <select onChange={handleCouple} className={classes.dropdown_select}>
                        <option value="NONE">--select--</option>
                        <option value="SINGLE">Single</option>
                        <option value="COUPLE">Couple</option>
                    </select>
                </label>
            </div>
          
        </React.Fragment>
    )
}

export default PA;