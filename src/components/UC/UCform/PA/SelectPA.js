import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"
import PASingle from "./PASingle";

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    

             
 return (
        <React.Fragment>
        <PASingle PA_state={state_GLOBAL} set_PA_state ={set_state_GLOBAL}/>
        
        </React.Fragment>
    )
}
export default Select_PA;