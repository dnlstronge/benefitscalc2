import React, { useState } from "react"; 
import UCElements from "../UCElements/UCElements";
import classes from "./WCA.module.css"

const UC_elements = UCElements

const WCA = ({propState, setPropState }) => {

    //LOCAL_STATE: 
    const [clickLCW, setClickLCW] = useState(false)
    const [WCA_values, set_WCA_values] = useState({
        LCW_STATUS: '',
        LCW: '',
        LWRA: '',
        CARER: ''
    })

    //Handle SINGLE

    const handleElements = (e) => {
        if(e.target.value === "NONE" ) {
           return setPropState( {type: "NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW_NONE") {
           return setPropState( {type: "LCW_NONE", WCA: 0, CE: 0 })
        }
        if(e.target.value === "LCW") {
           return setPropState({type: "LCW", WCA: UC_elements.LCW, CE: 0 })
        }
        if(e.target.value === "LCWRA") {
           return setPropState( {type: "LCWRA", WCA: UC_elements.LCWRA, CE: 0 })
        }
        if(e.target.value === "CARER") {
            return setPropState( {type: "CARER", WCA: 0, CE: UC_elements.carer })
         }
    }
    // Handle COUPLE:

        const handleClick = (e) => {
            clickLCW ? setClickLCW(false) : setClickLCW(true)
        }
        const handleLCW_A = (e) => {
                set_WCA_values({...WCA_values, LCW: e.target.value})
        }
        const handleLCW_B = (e) => {
                set_WCA_values({...WCA_values, LCW_STATUS: e.target.value})
        }
        const handleLCWRA = (e) => {
                set_WCA_values({...WCA_values, LCWRA: e.target.value})
        }
        const handleCarer = (e) => {
                set_WCA_values({...WCA_values, CARER: e.target.value})
        }

    // Couple Effects:

        useEffect(() => {
            if(
                WCA_values.LCW === "CLAIMANT" && 
                WCA_values.CARER === "NONE" && 
                WCA_values.LCWRA === "NONE") {
                    /*Code to pay */
                }
            if(
                WCA_values.LCW === "CLAIMANT" && 
                WCA_values.CARER === "PARNTER")


        }, [WCA_values])







    // DYNAMIC CSS variables: 

        const label_dynamic = propState.COUPLE === "RS_COUPLE" ? classes.dropdown_label : classes.dropdown_label_grey
        const label_dynamic_2 = propState.COUPLE === "RS_SINGLE" ? classes.dropdown_label : classes.dropdown_label_grey
        
  
   
    return (
        <React.Fragment>
            
            <h4 className={classes.heading}>Additional Elements</h4>
            
            <div className={classes.container}>
                  <br></br>
                    <label className={label_dynamic_2} htmlFor="select_WCA">Work Capabilty/Carer element: 
                         <select className={classes.dropdown_select} 
                                disabled={propState.COUPLE !== "RS_SINGLE"} 
                                onChange={handleElements}>
                            <option value="NONE">--select--</option>
                            <option value="NONE">None</option>
                            <option value="LCW_NONE">Limited Capabilty (status only)</option>
                            <option value="LCW">Limited Capabilty (in payment)</option>
                            <option value="LCWRA">LCW and Work Related Activity</option>
                            <option value="CARER">Carer Element</option>
                         </select>
                     </label>
                    
{/*=======COUPLE========= */}
                   
                        <label className={label_dynamic}>Migration with LCW
                            <input 
                                onClick={handleClick} 
                                value={true} 
                                className={classes.checkbox} 
                                disabled={propState.COUPLE !== "RS_COUPLE"}
                                type="checkbox"/>
                        </label>
                        {clickLCW && 
                        <label className={label_dynamic}
                                style= {{color: propState.COUPLE !== "RS_COUPLE" && "grey" }}  
                                htmlFor="select_WCA1">Limited capabilty for work (paid)
                            <select 
                                id="select_WCA1"
                                className={classes.dropdown_select}
                                onChange={handleLCW_A}>
                                <option value="NONE">--select--</option>
                                <option value="CLAIMANT">Claimant</option>
                                <option value="PARTNER">Partner</option>
                                <option Value="BOTH">Both</option>
                            </select>  
                        </label>}
                         {!clickLCW && 
                        <label className={label_dynamic} htmlFor="select_WCA2">LCW (Work Allowance only)
                            <select
                              id="select_WCA2" 
                              className={classes.dropdown_select} 
                              onChange={handleLCW_B}
                              disabled={propState.COUPLE !== "RS_COUPLE"}>
                                <option value="NONE">--select--</option>
                                <option value="CLAIMANT">Claimant</option>
                                <option value="PARTNER">Partner</option>
                                <option value="BOTH">Both</option>
                            </select>  
                        </label>}
                        <label className={label_dynamic} htmlFor="select_LCWRA"> LCW + Work Related Activity
                            <select
                              id="select_LCWRA" 
                              className={classes.dropdown_select} 
                              onChange={handleLCWRA}
                              disabled={propState.COUPLE !== "RS_COUPLE"}>
                                <option>--select--</option>
                                <option>Claimant</option>
                                <option>Partner</option>
                                <option>Both</option>
                            </select>  
                        </label>
                        <label className={label_dynamic} htmlFor="select_carer"> Carer Element
                            <select
                              id="select_carer" 
                              className={classes.dropdown_select} 
                              onChange={handleCarer}
                              disabled={propState.COUPLE !== "RS_COUPLE"}>
                                <option>--select--</option>
                                <option>Claimant</option>
                                <option>Partner</option>
                                <option>Both</option>
                            </select>  
                        </label>
                     </div>
                
            
        </React.Fragment>
    )
}
export default WCA;