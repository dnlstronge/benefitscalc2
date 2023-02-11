
import classes from "./WCA.module.css"
import React, { useState}  from "react"
import UCElements from "../../UCElements/UCElements"
import LCWRA from "./LCWRA"
import LCWRA_C from "./LCWRA_C"

/* ===========================WCA + CARER etc======================== */

/* 
   [x] - this component should determine work status
   [x] - this module should determine whether a carer element should be added
   [x] - you cant have a carer element and a LCWRA element for one person
   [x] - you can get a carer element if one person receives LCWRA and the other is a carer
   [x] - having WCA or children + housing costs (rent) attracts a work allowance (lower)
   [x] - having WCA or children + no housing costs attracts a work allowance (higher)
   [x] - LCWRA adds a dynamic value to UC calculation
   [x] - in older claims a lower value for LCW might be added (rare)
   [x] - transitional SDP amounts

   [x] split based on joint single

   propsed STATE: 

        ESA_mig:
        SDP_trans: (amount)

 */

const WCA = ( { state_GLOBAL, set_state_GLOBAL } ) => {

    const UC_elements = UCElements
/* Local state*/
    const [ESA_migration, setESA_migration] = useState(false)
    const isCouple = state_GLOBAL.couple.toString()


/* handlers */
    const handleESA_mig = () => {
      
      !ESA_migration ? setESA_migration(true) : setESA_migration(false)
       if (ESA_migration === false) {
        return set_state_GLOBAL({...state_GLOBAL, ESA_mig: "true"})
       }
       if (ESA_migration === true ) {
        
            
            return set_state_GLOBAL({...state_GLOBAL, ESA_mig: "false", LCW: 0, WC: "No"})
         }
      }
      const handleLCW = (e) => {
        if(e.target.value === "LCW_Y" && state_GLOBAL.carer === 0) {
            set_state_GLOBAL({...state_GLOBAL, LCW: UC_elements.LCW, WC: "applies"})
        }
        if(e.target.value === "LCW_Y" && state_GLOBAL.LCWRA === 0) {
          set_state_GLOBAL({...state_GLOBAL, LCW: UC_elements.LCW, WC: "applies"})
      }
        if(e.target.value === "LCW_Y" && state_GLOBAL.LCWRA > 0) {
        set_state_GLOBAL({...state_GLOBAL, LCW: 0, WC: "applies"})
      }
        if(e.target.value === "LCW_Y" && state_GLOBAL.carer > 0) {
          set_state_GLOBAL({...state_GLOBAL, LCW: 0, WC: "applies"})
      }
        if(e.target.value === "LCW_N") {
            set_state_GLOBAL({...state_GLOBAL, LCW: 0, WC: "applies"})
        }
        if(e.target.value === "select") {
            set_state_GLOBAL({...state_GLOBAL, LCW: 0, WC: "No"})
        }

      }


    return (

        <React.Fragment>
     <div className={classes.WCA_container}>
                <h2 className={classes.head}>Work Capablity</h2>
                <label className={classes.ESA_mig_label} htmlFor="ESA_mig">ESA migration which includes LCW
                <input className={classes.ESA_mig_input} 
                       type="checkbox" 
                       onClick={handleESA_mig} 
                       id="ESA_mig"
                       value={ESA_migration}
                       /></label>
                {state_GLOBAL.couple === "NONE" &&              
                <p className={classes.select_couple}> {"<--- Please select couple or single"}</p>}
                <label className={classes.LCW_label} htmlFor="LCW"> Limited Capabilty for Work (LCW)
                    <select className={classes.LCW_select} id="LCW" onChange={handleLCW}>
                        <option value="select">--select--</option>

                        
                      {state_GLOBAL.couple === "No" && 
                      <React.Fragment>
                      {ESA_migration && 
                        <option value="LCW_Y">Claimant</option>}
                      {!ESA_migration && 
                        <option value="LCW_N">Claimant</option>}
                        <option value="select">None</option>
                      </React.Fragment> } 
                      {state_GLOBAL.couple === "Yes" && 
                      <React.Fragment>
                      {ESA_migration &&
                        <option value="LCW_Y">Partner</option>}
                      {ESA_migration && 
                        <option value="LCW_Y">Claimant</option>}
                      {!ESA_migration &&
                        <option value="LCW_N">Partner</option>}
                      {!ESA_migration && 
                        <option value="LCW_N">Claimant</option>}
                       
                       
                      </React.Fragment>}
                      
                     
                     
                    </select>
                </label>
                <LCWRA local_LCW = {ESA_migration} couple={isCouple} state_LCWRA={state_GLOBAL} set_state_LCWRA={set_state_GLOBAL}/>
                {state_GLOBAL.couple === "Yes" &&
                <LCWRA_C local_LCW = {ESA_migration} couple={isCouple} state_LCWRA={state_GLOBAL} set_state_LCWRA={set_state_GLOBAL}/>}            

                
                
            </div>

        </React.Fragment>
    )
} 
export default WCA;