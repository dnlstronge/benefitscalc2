import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"

const UC_elements = UCElements;

const Select_PA = ({ state_GLOBAL, set_state_GLOBAL }) => {

    

    const handleAge = (e) => {

        if (e.target.value === "NONE" && state_GLOBAL.couple === "NONE") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "NONE", 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }

        if (e.target.value === "NONE" && state_GLOBAL.couple === "COUPLE") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "NONE", 
                couple: "COUPLE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if (e.target.value === "NONE" && state_GLOBAL.couple === "SINGLE") {
           return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "NONE", 
                couple: "SINGLE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if(e.target.value === "25+" && state_GLOBAL.couple === "NONE") { 
        return set_state_GLOBAL({...state_GLOBAL, over25: "25+", couple: "NONE", PERSONAL_VALUE: 0})
        
    }
        if(e.target.value === "under 25" && state_GLOBAL.couple === "NONE") {
        return set_state_GLOBAL({...state_GLOBAL, over25: "under 25", couple: "NONE", PERSONAL_VALUE: 0})
        
    }

    if (e.target.value === "under 25" && state_GLOBAL.couple === "SINGLE") {
       return set_state_GLOBAL({...state_GLOBAL, over25: "under 25", couple: "SINGLE", PERSONAL_VALUE: UC_elements.single_under25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "25+" && state_GLOBAL.over25 === "SINGLE") {
    return  set_state_GLOBAL({...state_GLOBAL, over25: "25+", couple: "SINGLE", PERSONAL_VALUE: UC_elements.single_over25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "under 25" && state_GLOBAL.over25 === "COUPLE") {
        return set_state_GLOBAL({...state_GLOBAL, over25: "under 25", couple: "COUPLE", PERSONAL_VALUE: UC_elements.joint_under25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
    if (e.target.value === "25+" && state_GLOBAL.over25 === "COUPLE") {
        return set_state_GLOBAL({...state_GLOBAL, over25: "25+", couple: "COUPLE", PERSONAL_VALUE: UC_elements.joint_over25,
        ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",})
    }
   
    }

 

    const handleCouple = (e) => {

        if (e.target.value === "NONE" && state_GLOBAL.over25 === "NONE") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "NONE", 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})

        }
        if (e.target.value === "NONE" && state_GLOBAL.over25 === "25+") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "25+", 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if (e.target.value === "NONE" && state_GLOBAL.over25 === "under 25") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "under 25", 
                couple: "NONE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
            }
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "NONE") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "NONE", 
                couple: "SINGLE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "NONE") {
            return set_state_GLOBAL({
                ...state_GLOBAL, 
                over25: "NONE",
                couple: "COUPLE", 
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, icLCWRA: "no", isCarer: "no", carer: "0",
                PERSONAL_VALUE: 0})
        }
        
      
        
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "under 25") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "under 25", 
                couple: "SINGLE", 
                PERSONAL_VALUE: UC_elements.single_under25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"
            })
        }
        if (e.target.value === "SINGLE" && state_GLOBAL.over25 === "25+") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "25+", 
                couple: "SINGLE",
                PERSONAL_VALUE: UC_elements.single_over25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "under 25") {
            return set_state_GLOBAL({
                ...state_GLOBAL, 
                over25: "under 25",
                couple: "COUPLE",
                PERSONAL_VALUE: UC_elements.joint_under25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        if (e.target.value === "COUPLE" && state_GLOBAL.over25 === "25+") {
            return set_state_GLOBAL({
                ...state_GLOBAL,
                over25: "25+", 
                couple: "COUPLE", 
                PERSONAL_VALUE: UC_elements.joint_over25,
                ESA_mig: false, WC: "no", LCW: 0, LCWRA: 0, isLCWRA: "no", isCarer: "no", carer: "0"})
        }
        
        
    }


    return (
        <React.Fragment>
        <label htmlFor="age-select">Relevant age group: </label>
        <select onChange={handleAge} name="age group" id="age-select">
            <option value="NONE">--Please choose an option--</option>
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