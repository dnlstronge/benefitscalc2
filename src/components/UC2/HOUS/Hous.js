import React, { useReducer, useEffect } from "react";
import classes from "./Hous.module.css"








const housing_REDUCER = (state, action) => {
    switch(action.type) {
        case "TYPE" : {
            return {...state, type: action.payload}
        }
        case "COSTS" :{
          return  {...state, rent: action.payload}
        }
        case "FREQ" : {
            return {...state, freq: action.payload}
        }
        case "SSSC" :{
            return  {...state, SSSC: action.payload}
          }
        case "RATES" : {
            return {...state, rates: action.payload}
        }
        case "RATESFREQ" : {
            return {...state, ratesFreq: action.payload}
        }
        case "RENTFREE" : {
            return {...state, rentFree: action.payload}
        }
    
    }
}

const Hous = (setPropState) => {

    // local state:
    

    const [housing, dispatchHousing] = useReducer(housing_REDUCER, {
        type: '',
        rent: '',
        freq: '',
        SSSC: '',
        rates: '',
        ratesFreq: '',
        rentFree: '',
    })

    // handlers

    const handleType = (e) => {
        dispatchHousing({ type: "TYPE", payload: e.target.value })
         }
    const handleAmount = (e) => {
        dispatchHousing({type: "COSTS", payload: e.target.value })
    }
    const handleSSSC = (e) => {
        dispatchHousing({type: "SSSC", payload: e.target.value })
    }
    const handleFreq = (e) => {
       dispatchHousing({type: "FREQ", payload: e.target.value })
    }
    const handleRates = (e) => {
        dispatchHousing({type: "RATES" , payload: e.target.value })
    }
    const handleRatesFreq = (e) => {
        dispatchHousing({type: "RATESFREQ", payload: e.target.value})
    }

    const handleRentFree = (e) => {
        dispatchHousing({type: "RENTFREE", payload: e.target.value})
    }
    
    
    // get eligible housing: 

    useEffect(() => {
        const RECKONER = (amount, freq, rentFree, sssc) => {
            let findweekly = amount / 52 * 12 
            if(freq === "PW") {
                let value = (amount / 12 * (52 - rentFree)) * sssc
                return value 
                }
        
            if(freq === "PM") {
                let value = (findweekly * (52 - rentFree)) / 12
                return value
            }
        }


        switch(housing.type) {
            case "SELECT" : {
                return
            }
            case "SOCIAL" : {
                console.log(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC))
            }
        }
    }, [housing.freq])

    return (
        <React.Fragment>
        <div className={classes.container}>
        <h4 className={classes.heading}>Housing Costs</h4>
            <div className={classes.sub_container}>
                <select onChange={handleType} className={classes.select_type}>
                    <option value="SELECT">--Select Type--</option>
                    <option value="SOCIAL">Social sector</option>
                    <option value="PRIVATE">Private landlord</option>
                    <option value="COOWN">Co-ownership</option>
                    <option value="OWN">Owner Occupier</option>
                    <option value="NONE">None</option>
                </select> 
                <input onChange={handleAmount} className={classes.select_amount} placeholder="Eligible Costs" type="number"/>
                <select onChange={handleFreq} className={classes.select_freq}>
                    <option value="SELECT">--frequency--</option>
                    <option value="PW">Weekly</option>
                    <option value="PM">Monthly</option>
                </select>   
            </div>
            {housing.type === "" &&
            <div className={classes.warning_container}>
             <p className={classes.warning}>Select Housing Type</p>
             </div>}
                {housing.type !== "" && 
                <div className={classes.warning_container}>
                {housing.rent === "" &&
                <p className={classes.warning}>Enter an amount</p>}
                </div>}
                {housing.rent !== "" &&
                <div className={classes.warning_container}>
                {housing.freq === "SELECT" && 
                <p className={classes.warning}>Select Frequency</p>}
                </div>}
            
            <label htmlFor="rates" className={classes.rates_label}>Rates: 
                <input onChange={handleRates} className={classes.rates_input} id="rates" type="number"></input>
                <select onChange={handleRatesFreq} className={classes.rates_freq}>
                    <option value="0">--frequency--</option>
                    <option value="PW">--Weekly--</option>
                    <option value="PM">--Monthly--</option>
                </select>
            </label>
            <label className={classes.sssc_label}htmlFor="SizeCriteria">Social Sector Size Criteria (bedroom tax)
                <select onChange={handleSSSC} className={classes.sssc_select} id="SizeCriteria">
                    <option value="1">--select--</option>
                    <option value="1">None</option>
                    <option value="0.86">1 bedroom</option>
                    <option value="0.75">2+ bedroom</option>
                </select>
            </label>
            <label htmlForm="rent_free" className={classes.rentfree_label}>Number of rent-free weeks
                <input onChange={handleRentFree} type="number" className={classes.rentfree_input}></input>
            </label>
            </div>

            <div> type: {housing.type} rent: {housing.rent} frequency: {housing.freq}</div>
            <div> SSSC: {housing.SSSC} rentFree: {housing.rentFree} </div>
            <div> Rates: {housing.rates} frequency: {housing.ratesFreq}</div>
        </React.Fragment>
    )
}
export default Hous;