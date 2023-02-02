import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    

    const handleAge = (e) => {
        if(e.target.value === "25+" && state_GLOBAL.couple === "NONE") { 
        set_state_GLOBAL({...state_GLOBAL, over25: "Yes"})
        
    }
        if(e.target.value === "under 25" && state_GLOBAL.couple === "NONE") {
        set_state_GLOBAL({...state_GLOBAL, over25: "No"})
        
    }

    if (e.target.value === "under 25" && state_GLOBAL.couple === "SINGLE") {
        set_state_GLOBAL({...state_GLOBAL, over25: "No", couple: "SINGLE", PERSONAL_VALUE: UC_elements.single_under25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "25+" && state_GLOBAL.over25 === "SINGLE") {
        set_state_GLOBAL({...state_GLOBAL, over25: "Yes", couple: "SINGLE", PERSONAL_VALUE: UC_elements.single_over25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "under 25" && state_GLOBAL.over25 === "COUPLE") {
        set_state_GLOBAL({...state_GLOBAL, over25: "No", couple: "COUPLE", PERSONAL_VALUE: UC_elements.joint_under25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "25+" && state_GLOBAL.over25 === "COUPLE") {
        set_state_GLOBAL({...state_GLOBAL, over25: "yes", couple: "COUPLE", PERSONAL_VALUE: UC_elements.joint_over25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
   
    }

 

    const handleCouple = (e) => {

        if (e.target.value === "NONE" && state_GLOBAL.over25 === "NONE") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "NONE") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "NONE") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        
      
        
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "No") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "SINGLE", 
                PERSONAL_VALUE: UC_elements.single_under25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"
            })
        }
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "Yes") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "SINGLE",
                PERSONAL_VALUE: UC_elements.single_over25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "No") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "COUPLE",
                PERSONAL_VALUE: UC_elements.joint_under25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "Yes") {
            set_state_GLOBAL({
                ...state_GLOBAL, 
                couple: "COUPLE", 
                PERSONAL_VALUE: UC_elements.joint_over25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        
        
    }


    return (
        <React.Fragment>
        <label htmlFor="age-select">Relevant age group: </label>
        <select onChange={handleAge} name="age group" id="age-select">
            {state_GLOBAL.over25 === null && <option value="NONE">--Please choose an option--</option>}
            <option value="25+">25+</option>
            <option value="under 25">under 25</option>
            
        </select>

        <label htmlFor="couple-select">Single or Couple: </label>

        <select onChange={handleCouple}name="couple" id="couple-select">
                <option value="NONE">--Please choose an option--</option>
                <option value="SINGLE">Single</option>
                <option value="COUPLE">Couple</option>
                
            
        </select>
        </React.Fragment>
    )
}
export default Select_PA;