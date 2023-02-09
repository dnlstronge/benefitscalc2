import React, {useState, useReducer } from "react"
import classes from "./Main.module.css"

import PA from "./PA/PA"
import Totals from "./Totals/Totals"
import WCA from "./WCA/WCA"

const MAIN_REDUCER = (state, action) => {
    switch(action.type) {
        case "PA" : {
            return {...state, PA: action.val}
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
            PA: 0,
            WCA: 0,
            CE: 0,
            HC: 0
        }
    )
    const [MAIN_STATE, MAIN_DISPATCH] = useReducer(MAIN_REDUCER, {
        PA: 0,
        WCA: 0,
        CE: 0,
        HC: 0

    })

return (
        <React.Fragment>
            <div className={classes.container}>
                
                    <PA propState={MAIN_STATE} setPropState={MAIN_DISPATCH} />
                    <Totals propState={MAIN_STATE}/>
                    <WCA propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
            </div>
        </React.Fragment>
)
}


export default Main;