import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"
import LCW from "./LCW";
import PASingle from "./PASingle";
import classes from "./SelectPA.module.css"

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    const [local, setLocal] = useState( {
        couple: '',
        LCW: "",
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

      



        <div className={classes.localstatelog_container}>
            <label className={classes.stateLabel} htmlFor="P_couple">
                Couple status: <p id="P_couple" className={classes.stateP}>{local.couple}</p>
            </label>
        </div>
        </container>
        </React.Fragment>
    )
}
export default Select_PA;