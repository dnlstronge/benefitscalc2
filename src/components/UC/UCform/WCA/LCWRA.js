import classes from "./LCWRA.module.css"
import React, { useState } from "react"
import UCElements from "../../UCElements/UCElements"

/* [x] - needs access to state
   [x] - deals with LCWRA element
   [x] - has dependencies outside of component (carers etc)
   [x] - the value this ultimately provides to state will override LCW value (if any)
   [x] - may need to set carer to none
 */

const UC_elements = UCElements

const LCWRA = ({ state_LCWRA, set_state_LCWRA }) => {

    /*LOCAL STATE */

 

    /*SINGLE HANDLERS */
    const handle_reset_LCWRA = () => {
        set_state_LCWRA({...state_LCWRA, LCWRA: 0})
    }

    const handle_reset_carer = () => {
        set_state_LCWRA({...state_LCWRA, Carer: 0 })
    }

    const handle_single_LCWRA = (e) => {
        if(e.target.value === "select" && state_LCWRA.isCarer === "yes") {
            return set_state_LCWRA({...state_LCWRA, LCWRA: 0, isLCWRA: "no", carer: UC_elements.carer, isCarer: "yes" })
        }
        
        if(e.target.value === "select") {
            return set_state_LCWRA({...state_LCWRA, LCWRA: 0, isLCWRA: "no", carer: 0, isCarer: "no" })
        }
        if (e.target.value === "yes" && state_LCWRA.LCW === 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, isLCWRA: "yes", carer: 0})
        }
        if (e.target.value === "yes" && state_LCWRA.LCW > 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, isLCWRA: "yes", carer: 0})
        }
        if(e.target.value === "yes" && state_LCWRA.carer > 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, isLCWRA: "yes", carer: 0})
         }
        if(e.target.value === "yes" && state_LCWRA.carer === 0) {
          return set_state_LCWRA({...state_LCWRA, LCW:0, LCWRA: UC_elements.LCWRA, isLCWRA: "yes"})
        }
        if(e.target.value === "no" && state_LCWRA.isCarer === "yes") {
           return set_state_LCWRA({...state_LCWRA, LCWRA: 0, carer: UC_elements.carer, isLCWRA: "no" })
        }
        if(e.target.value === "no" && state_LCWRA.isCarer === "no") {
            return set_state_LCWRA({...state_LCWRA, LCWRA: 0, carer: 0, isLCWRA: "no" })
        }
        
    }

    const handle_single_carer = (e) => {
        
        if(e.target.value === "yes" && state_LCWRA.LCWRA === 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, carer: UC_elements.carer, LCWRA: 0, isCarer: "yes"})
        } 
        if(e.target.value === "yes" && state_LCWRA.LCWRA > 0) {
            return set_state_LCWRA({...state_LCWRA, carer: 0, LCWRA: UC_elements.LCWRA, isCarer: "yes"})
        }
        if(e.target.value === "no") {
        return set_state_LCWRA({...state_LCWRA, LCW: 0, carer: 0, isCarer: "no"}) }
        
        if(e.target.value === "no" && state_LCWRA.LCWRA > 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, carer: 0, isCarer: "no"}) }
        if(e.target.value === "no" && state_LCWRA.ESA_mig === false) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, carer: 0, isCarer: "no"}) }
        if(e.target.value === "no" && state_LCWRA.LWCRA > 0) {
            return set_state_LCWRA({...state_LCWRA, LCW: 0, carer: 0, isCarer: "no"}) }
        if(e.target.value === "no" && state_LCWRA.WC === "applies") {
            return set_state_LCWRA({...state_LCWRA, LCW: UC_elements.LCW, carer: 0, isCarer: "no"}) }
        if(e.target.value === "no" && state_LCWRA.isLCWRA === "no") {
            return set_state_LCWRA({...state_LCWRA, carer: 0, isCarer: "no"})}
        if(e.target.value === "no" && state_LCWRA.isLCWRA === "yes") {
                return set_state_LCWRA({...state_LCWRA, carer: 0, isCarer: "no"})}
        if(e.target.value === "no" && state_LCWRA.isCarer === "no") {
            return set_state_LCWRA({...state_LCWRA, carer: 0, isCarer: "no"})
        } 
        if(e.target.value === "select") {
            return set_state_LCWRA({...state_LCWRA, LCWRA: 0, isLCWRA: "no", carer: 0, isCarer: "no" })
        } 
    }


    return (
        <React.Fragment>
           {state_LCWRA.couple === "No" && 
            <section className={classes.LCWRA_container}>
                <label className={classes.LCWRA_label} htmlFor="single" > LCW & work-related activity
                
                        <select onChange={handle_single_LCWRA} id="single" className={classes.LCWRA_select}>
                            <option value="select">--select--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                </label>
             </section>}

           {state_LCWRA.couple === "No" && 
             <section className={classes.LCWRA_carer_container}>
                <label className={classes.LCWRA_carer_label} htmlFor="single" >Carer Element
                
                        <select onChange={handle_single_carer} id="single" className={classes.LCWRA_carer_select}>
                            <option value="select">--select--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                </label>
             </section>}
        </React.Fragment>
       
        

      
    )

}
export default LCWRA;