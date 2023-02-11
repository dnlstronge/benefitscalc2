import React, { useState }from 'react'
import HousingType from './HousingType'
import EligibleRent from './EligibleRent'
import SSSC from "./SSSC"
import RentFree from './RentFree'
import Rates from "./Rates"
import classes from "./SelectHousing.module.css"
import PrivateS from './PrivateS'

/* =================HOUSING======================= */

/* this will need access to CLIENT_GLOBAL and setCLIENT GLOBAL

    [] - it should return rental amount + size criteria reduction etc as state
    [] - it should set a variable for housing type
    [] - allow for input of rates/council tax if applicable as this can be dealt with later
    [] - prompt private tenants to put their LHA rate
    [] - non-dependent deductions */

const Select_Housing = ( {state_GLOBAL, set_state_GLOBAL} ) => {

    /* Local state */
    const [housing_Status, setHousing_Status] = useState(null)
    const [bedroomTax, setBedroomTax] = useState(null) 

    const handleHousing = (e) => {
        setHousing_Status(e.target.value)
        set_state_GLOBAL(
            {...state_GLOBAL, 
                tenancy: e.target.value, 
                SSSC: 0, 
                rentFree: 0,
                NDD: 0,
                housingPM: 0,
                rate_pw: 0,
            })
    }

    const handleSSSC = (e) => {
        setBedroomTax(e.target.value)
        set_state_GLOBAL({...state_GLOBAL, SSSC: e.target.value})

    }
    const handleRentFree = (e) => {
        set_state_GLOBAL({...state_GLOBAL, rentFree: e.target.value})
    }
    const handleRates = (arg) => {
        set_state_GLOBAL({...state_GLOBAL, rates_pw: arg })
    }
      

    return (

/* Housing Status */

        <React.Fragment>
        <div className={classes.container}>
            <h2>Housing</h2>
            <HousingType handler={handleHousing}/>
            {state_GLOBAL.tenancy === "SOCIAL" &&
            <SSSC handler={handleSSSC}/>}
            {state_GLOBAL.tenancy === "SOCIAL" &&
            <RentFree handler={handleRentFree}/>}
            {state_GLOBAL.tenancy === "SOCIAL" &&
            <EligibleRent state_HOUSING ={state_GLOBAL} set_state_HOUSING = {set_state_GLOBAL} />}
            {state_GLOBAL.tenancy === "OWN" && 
            <EligibleRent owner={state_GLOBAL.tenancy} state_HOUSING ={state_GLOBAL} set_state_HOUSING = {set_state_GLOBAL}/>}
            {state_GLOBAL.tenancy === "PRIVATE" && 
            <PrivateS state_HOUSING ={state_GLOBAL} set_state_HOUSING = {set_state_GLOBAL}/>}
            {state_GLOBAL.tenancy === "CO-OWN" &&
            <EligibleRent coowner={state_GLOBAL.tenancy} state_HOUSING ={state_GLOBAL} set_state_HOUSING = {set_state_GLOBAL}/>}
            
            {state_GLOBAL.tenancy !== "NONE"  && 
            <Rates handler={handleRates}/>}
            
       
            </div>
        </React.Fragment>
    )
}

export default Select_Housing;