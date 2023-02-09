import React, {useState, useReducer } from "react"
import classes from "./Main.module.css"
import CardA from "../UC2/card/CardA"
import PA from "./PA/PA"
import Totals from "./Totals/Totals"
import WCA from "./WCA/WCA"

const MAIN_REDUCER = (state, action) => {
    switch(action.type) {
        case "RESET_WCA": {
            return {...state, WCA: null, CE: null}
        }

        case "COUPLE" : {
            return {...state, COUPLE: action.COUPLE}
        }
        case "AGE" : {
            return {...state, AGE: action.AGE}
        }
        case "NONE" : {
            return {...state, WCA: action.WCA, CE: action.CE}
        }
        case "LCW_NONE" : {
            return {...state, WCA: action.WCA, CE: action.CE}
        }
        case "LCW" : {
            return {...state, WCA: action.WCA, CE: action.CE}
        }
        case "LCWRA" : {
            return {...state, WCA: action.WCA, CE: action.CE}
        }
        case "CARER" : {
            return {...state, WCA: action.WCA, CE: action.CE}
        }
    }
}

const Main = (props) => {
    const [ MAINSTATE, SET_MAINSTATE ] = useState (
        {
         PA: 0
        }
    )
    const [MAIN_STATE, MAIN_DISPATCH] = useReducer(MAIN_REDUCER, {
        AGE: 0,
        COUPLE: 0,
        WCA: 0,
        CE: 0,
        HC: 0

    })

return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.PA_container}>
                    <PA propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
                    <WCA propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
            </div>
                    <Totals propState={MAIN_STATE}/>
                    
            </div>
        </React.Fragment>
)
}


export default Main;