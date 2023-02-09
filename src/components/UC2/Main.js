import React, {useState} from "react"
import classes from "./Main.module.css"
import CardA from "./card/CardA"
import PA from "./PA/PA"
import Totals from "./Totals/Totals"
import WCA from "./WCA/WCA"

const MAIN_REDUCER = (state, action) => {
    switch(action.type) {
        case "NONE" : {

        }
        case "NONE" : {

        }
        case "NONE" : {

        }
        case "NONE" : {

        }
        case "NONE" : {

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
                
                    <PA propState={MAINSTATE} setPropState={SET_MAINSTATE} />
                    <Totals propState={MAINSTATE} setPropState={SET_MAINSTATE}/>
                    <WCA propState={MAINSTATE} setPropState={SET_MAINSTATE}/>
            </div>
        </React.Fragment>
)
}


export default Main;