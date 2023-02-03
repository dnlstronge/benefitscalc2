import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"
import PASingle from "./PASingle";

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    const [local, setLocal] = useState( {
        couple: '',
    })

             
 return (
        <React.Fragment>
        <PASingle 
            lift_state={local} 
            set_lift_state={setLocal} 
            PA_state={state_GLOBAL} 
            set_PA_state ={set_state_GLOBAL}/>



        <div className={classes.localstatelog_container}></div>
        </React.Fragment>
    )
}
export default Select_PA;