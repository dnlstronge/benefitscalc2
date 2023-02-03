import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"
import PASingle from "./PASingle";
import classes from "./SelectPA.module.css"

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    const [local, setLocal] = useState( {
        couple: '',
    })

             
 return (
        <React.Fragment>
        <container className={classes.component_container}>
        <PASingle 
            lift_state={local} 
            set_lift_state={setLocal} 
            PA_state={state_GLOBAL} 
            set_PA_state ={set_state_GLOBAL}/>



        <div className={classes.localstatelog_container}>
            <label className={classes.stateLabel} htmlFor="P_couple"><p id="P_couple" className={classes.stateP}></p></label>
        </div>
        </container>
        </React.Fragment>
    )
}
export default Select_PA;