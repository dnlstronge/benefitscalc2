import React, { useState } from "react";
import UCElements from "../../UCElements/UCElements";
import classes from "./LCWRA_C.module.css"

const LCWRA_C = ({ couple, state_LCWRA, set_state_LCWRA }) => {

const UC_elements = UCElements    

const [local_values, setLocalValues]  = useState( {
    claimant: null,
    partner: null,
    claimant_carer: null,
    partner_carer: null
})
const [local_actual, setLocalActual] = useState(
    {
        carer: 0,
        LCWRA: 0,
    }
)


    const handle_LCWRA = (e) => {


            if(e.target.value === "select") {
                setLocalValues({...local_values, claimant: null, partner: null})
                set_state_LCWRA({...state_LCWRA, LCWRA: 0})   
            }
            if(e.target.value === "select" && state_LCWRA.isCarer === "yes") {
                setLocalValues({...local_values, claimant: null, partner: null})
                set_state_LCWRA({...state_LCWRA, LCWRA: 0, carer: UC_elements.carer})   
            }
            
            
            if (e.target.value === "LCWRA_claimant") {
                setLocalValues({...local_values, claimant: true, partner: false})
                set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA})
            }
            if (e.target.value === "LCWRA_claimant" && local_values.partner_carer) {
                setLocalValues({...local_values, claimant: true, partner: false})
                set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: UC_elements.carer})
            }
            if (e.target.value === "LCWRA_partner") {
                setLocalValues({...local_values, claimant: false, partner: true})
                set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA})
            }
            if (e.target.value === "LCWRA_partner" && local_values.partner_carer) {
                setLocalValues({...local_values, claimant: false, partner: true})
                set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: 0, isCarer: "yes"})
            }
            if (e.target.value === "LCWRA_partner" && local_values.claimant_carer) {
                setLocalValues({...local_values, claimant: false, partner: true})
                set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: UC_elements.carer, isCarer: "yes"})
            }

           
         
            
            
            
    }

    const handle_carer = (e) => {
        if(e.target.value === "select") {
            setLocalValues({...local_values, claimant_carer: null, partner_carer: null}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: 0, carer: 0})  
        }
        if(e.target.value === "carer_claimant") {
            setLocalValues({...local_values, claimant_carer: true, partner_carer: false}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, isCarer: true})  
        }
        if(e.target.value === "carer_claimant" && state_LCWRA.LCWRA > 0 ) {
            setLocalValues({...local_values, claimant_carer: true, partner_carer: false}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: 0, isCarer: true})  
        }
        if(e.target.value === "carer_claimant" && state_LCWRA.LCWRA === 0 ) {
            setLocalValues({...local_values, claimant_carer: true, partner_carer: false}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, carer: UC_elements.carer, isCarer: true})  
        }
        if(e.target.value === "carer_partner" && state_LCWRA.LCWRA > 0) {
            setLocalValues({...local_values, claimant_carer: false, partner_carer: true}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: 0, isCarer: true})   
        }
        if(e.target.value === "carer_partner" && local_values.claimant) {
            setLocalValues({...local_values, claimant_carer: false, partner_carer: true}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: UC_elements.carer, isCarer: true})   
        }
        if(e.target.value === "carer_partner" && local_values.partner) {
            setLocalValues({...local_values, claimant_carer: false, partner_carer: true}) 
            set_state_LCWRA({...state_LCWRA, LCW: 0, LCWRA: UC_elements.LCWRA, carer: 0, isCarer: true})   
        }
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <label className={classes.LCWRA_couple} htmlFor="couple_LCWRA_select"> LCW & work related activity (LCWRA)
                    <select onChange={handle_LCWRA}className={classes.LCWRA_select} id="couple_LCWRA_select">
                        <option value="select">--select--</option>
                        <option value="LCWRA_claimant">Claimant</option>
                        <option value="LCWRA_partner">Partner</option>
                    </select>
                </label>
                <label className={classes.LCWRA_couple} htmlFor="couple_carer_select">Carer Element
                    <select onChange={handle_carer} className={classes.LCWRA_select}id="couple_carer_select">
                    <option value="select">--select--</option>
                    
                    <option value="carer_claimant">Claimant</option>}
                    
                    <option value="carer_partner">Partner</option>}
                    </select>
                </label>

            </div>
        </React.Fragment>
        
    )
}

export default LCWRA_C;