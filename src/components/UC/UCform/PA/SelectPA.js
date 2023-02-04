import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"
import LCW from "./LCW";
import LCWRA from "./LCWRA";
import PASingle from "./PASingle";
import classes from "./SelectPA.module.css"

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    const [local, setLocal] = useState( {
        couple: '',
        LCW_LCWRA: '',
        
    })

             
 return (
        <React.Fragment>
        <container className={classes.component_container}>
        <PASingle 
            lift_state={local} 
            set_lift_state={setLocal} 
            PA_state={state_GLOBAL} 
            set_PA_state ={set_state_GLOBAL}/>
        <LCW lift_state={local} 
            set_lift_state={setLocal} 
            PA_state={state_GLOBAL} 
            set_PA_state ={set_state_GLOBAL}/>
        <LCWRA lift_state={local} 
            set_lift_state={setLocal} 
            PA_state={state_GLOBAL} 
            set_PA_state ={set_state_GLOBAL}/>


      



        <div className={classes.localstatelog_container}>
            <label className={classes.stateLabel} htmlFor="P_couple">
                Couple status: <p id="P_couple" className={classes.stateP}>{local.couple}</p>
            </label>
            <label className={classes.stateLabel} htmlFor="P_couple">
                LCW_LCWRA: <p id="P_couple" className={classes.stateP}>{local.LCW_LCWRA}</p>
            </label>
            <label className={classes.stateLabel} htmlFor="P_couple">
                LCW amount: <p id="P_couple" className={classes.stateP}>{state_GLOBAL.LCW}</p>
            </label>
            <label className={classes.stateLabel} htmlFor="P_couple">
                LCWRA: <p id="P_couple" className={classes.stateP}>{state_GLOBAL.LCWRA}</p>
            </label>
        </div>
        </container>
        </React.Fragment>
    )
}
export default Select_PA;