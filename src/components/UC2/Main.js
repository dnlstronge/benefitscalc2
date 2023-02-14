import React, { useReducer, useEffect } from "react"
import classes from "./Main.module.css"
import PA from "./PA/PA"
import Totals from "./Totals/Totals"
import WCA from "./WCA/WCA"
import Transitional from "./WCA/Transitional"
import CHILD from "./CHILD/CHILD"
import UCElements from "./UCElements/UCElements"
import Hous from "./HOUS/Hous"
import Income from "./Income/Income"



      


const MAIN_REDUCER = (state, action) => {
    switch(action.type) {
        
        /* Child elements */

        case "CHILD_ELEMENTS": {
            return {...state, 
                CHILD: action.children,
                CHILD_D_LOW: action.disability_low,
                CHILD_D_HIGH: action.disability_high,
                CHILDCARE: action.childcare
            }
        }

        /* Work Capabilty (couple) */
        
        case "TRANS" : {
            return {...state, TA: action.val}
        }
        case "LCW_COUPLE" : {
            return {...state, LCW: action.val} 
        }
        case "LCWRA_COUPLE" : {
            return {...state, WCA: action.val}
        }
        case "CE" : {
            return {...state, CE: action.val}
        }
          /* Work Capabilty (single) */
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
        /* Personal Allowances */

        case "RESET_WCA": {
            return {...state, WCA: '', CE: ''}
        }
        case "PA" : {
            return {...state, PA: action.value}
        }

        case "COUPLE" : {
            return {...state, COUPLE: action.COUPLE}
        }
        case "AGE" : {
            return {...state, AGE: action.AGE}
        }
      
        default : {
        return }
    }
}

const round = (x) => {
    return Math.ceil( x * 100) /100
 }

const Main = (props) => {

    // const [ MAINSTATE, SET_MAINSTATE ] = useState (
    //     {
    //      PA: 0
    //     }
    // )

   
  

    const [MAIN_STATE, MAIN_DISPATCH] = useReducer(MAIN_REDUCER, {
        AGE: "",
        COUPLE: "",
        PA: 0,
        WCA: 0,
        CE: 0,
        LCW: 0,
        TA: 0,
        HC: 0,
        CHILD: 0,
        CHILD_D_LOW: 0,
        CHILD_D_HIGH: 0,
        CHILDCARE: 0

    })

    useEffect(() => {

      
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
              <div className={classes.HOUS_container}>
                <Hous propState={MAIN_STATE} setPropState={MAIN_DISPATCH}/>
              </div>
              <div className={classes.INCOME_container}>
                <Income />
              </div>
              <Totals 
                PA={round(MAIN_STATE.PA)} 
                WCA={round(MAIN_STATE.WCA)}
                LCW={round(MAIN_STATE.LCW)}
                CE={round(MAIN_STATE.CE)} 
                TA={round(MAIN_STATE.TA)}
                CHILD={round(MAIN_STATE.CHILD)}
                CDL={round(MAIN_STATE.CHILD_D_LOW)}
                CDH={round(MAIN_STATE.CHILD_D_HIGH)}
                CC={round(MAIN_STATE.CHILDCARE)}  />
            </div>
        </React.Fragment>
)
}


export default Main;