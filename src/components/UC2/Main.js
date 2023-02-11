import React, { useReducer, useEffect } from "react"
import classes from "./Main.module.css"
import PA from "./PA/PA"
import Totals from "./Totals/Totals"
import WCA from "./WCA/WCA"
import Transitional from "./WCA/Transitional"
import CHILD from "./CHILD/CHILD"
import UCElements from "./UCElements/UCElements"

const UC_elements = UCElements

      
const round = (x) => {
    return Math.ceil( x * 100) /100
 }


const MAIN_REDUCER = (state, action) => {
    switch(action.type) {
        
        case "TRANS" : {
            return {...state, TA: round(action.val)}
        }
        case "LCW_COUPLE" : {
            return {...state, LCW: round(action.val)} 
        }
        case "LCWRA_COUPLE" : {
            return {...state, WCA: round(action.val)}
        }
        case "CE" : {
            return {...state, CE: round(action.val)}
        }
        
        case "RESET_WCA": {
            return {...state, WCA: '', CE: ''}
        }
        case "PA" : {
            return {...state, PA: round(action.value)}
        }

        case "COUPLE" : {
            return {...state, COUPLE: action.COUPLE}
        }
        case "AGE" : {
            return {...state, AGE: action.AGE}
        }
        case "NONE" : {
            return {...state, WCA: round(action.WCA), CE: round(action.CE)}
        }
        case "LCW_NONE" : {
            return {...state, WCA: round(action.WCA), CE: round(action.CE)}
        }
        case "LCW" : {
            return {...state, WCA: round(action.WCA), CE: round(action.CE)}
        }
        case "LCWRA" : {
            return {...state, WCA: round(action.WCA), CE: round(action.CE)}
        }
        case "CARER" : {
            return {...state, WCA: round(action.WCA), CE: round(action.CE)}
        }
        default : {
        return }
    }
}

const Main = (props) => {

    // const [ MAINSTATE, SET_MAINSTATE ] = useState (
    //     {
    //      PA: 0
    //     }
    // )

    useEffect(() => {
        console.log(typeof(MAIN_STATE.PA))
        console.log(typeof(MAIN_STATE.WCA))
        console.log(typeof(MAIN_STATE.LCW))
        console.log(typeof(MAIN_STATE.CE))
        console.log(typeof(MAIN_STATE.TA))
    }, [])
  

    const [MAIN_STATE, MAIN_DISPATCH] = useReducer(MAIN_REDUCER, {
        AGE: '',
        COUPLE: '',
        PA: '',
        WCA: '',
        CE: '',
        LCW: '',
        TA: '',
        HC: '',

    })

    useEffect(() => {

        
        const round = (x) => {
            return Math.ceil( x * 100) /100
         }
         const rs = MAIN_STATE.COUPLE
         const age = MAIN_STATE.AGE
       
        let S_UNDER = UCElements.single_under25
        let S_OVER = UCElements.single_over25
        let C_UNDER = UCElements.joint_under25
        let C_OVER = UCElements.joint_over25

        if(age === "AGE_NONE" || rs === "RS_NONE")
            
           MAIN_DISPATCH({type: "PA", value: 0})
            
        if(age === "AGE_UNDER" && rs === "RS_SINGLE")
            
           MAIN_DISPATCH({type: "PA", value: S_UNDER})
               
        if(age === "AGE_UNDER" && rs === "RS_COUPLE")
           MAIN_DISPATCH({type: "PA", value: C_UNDER})
            
            
        if(age === "AGE_OVER" && rs === "RS_SINGLE")
        
           MAIN_DISPATCH({type: "PA", value: S_OVER})
        
        if(age === "AGE_OVER" && rs === "RS_COUPLE")
           MAIN_DISPATCH({type: "PA", value: C_OVER})

        }, [MAIN_STATE.AGE, MAIN_STATE.COUPLE])

return (
        <React.Fragment>
            <div className={classes.container}>
               <div className={classes.PA_container}>
                 <PA propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
                <WCA propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
                <Transitional propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
              </div>
              <div className={classes.CHILD_container}>
                <CHILD propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
              </div>
              <Totals 
                PA={round(MAIN_STATE.PA)} 
                WCA={round(MAIN_STATE.WCA)}
                LCW={round(MAIN_STATE.LCW)}
                CE={round(MAIN_STATE.CE)} 
                TA={round(MAIN_STATE.TA)} />
            </div>
        </React.Fragment>
)
}


export default Main;