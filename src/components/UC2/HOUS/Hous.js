import React, { useReducer, useEffect, useState } from "react";
import classes from "./Hous.module.css"
import UCElements from "../UCElements/UCElements";


const UC_elements = UCElements


const housing_REDUCER = (state, action) => {
    switch(action.type) {
        case "NDC" : {
            return {...state, NDC: action.payload}
        }
       
        case "TYPE" : {
            
            return {...state, type: action.payload, 
            rent: '',
            freq: '',
            SSSC: '1',
            rates: '',
            ratesFreq: '',
            rentFree: '0',
            NDC: ''}
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
        default : {
            return;
        }
    }
}

const Hous = ({setPropState}) => {

    // local state:

    const [lift, setLift] = useState({
        RENT: "",
        RATES: "0",
        RATES_F: "",
        NDC: ""
    })
    

    const [housing, dispatchHousing] = useReducer(housing_REDUCER, {
        type: '',
        rent: '',
        freq: '',
        SSSC: '1',
        rates: '',
        ratesFreq: '',
        rentFree: '0',
        NDC: ''
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

    const handleNDC = (e) => {
        dispatchHousing({type: "NDC", payload: e.target.value})
    }
    
    
    // get eligible housing: 

    useEffect(() => {

        const ROUND = (x) => {

            return Math.ceil( x * 100) /100
         
         }
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
          
            case "SOCIAL" : {
                if(housing.rent > 0) {
                return setLift({RENT: ROUND(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC)), RATES: housing.rates, RATES_F: housing.ratesFreq, NDC: housing.NDC * UC_elements.NDC})
            } break }
            case "PRIVATE" : {
                return setLift({RENT: ROUND(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC)), RATES: housing.rates, RATES_F: housing.ratesFreq, NDC: housing.NDC * UC_elements.NDC})
            }
            case "COOWN" : {
                return setLift({RENT: ROUND(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC)), RATES: housing.rates, RATES_F: housing.ratesFreq, NDC: housing.NDC * UC_elements.NDC})
            }
            case "OWN" : {
                return setLift({RENT: ROUND(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC)), RATES: housing.rates, RATES_F: housing.ratesFreq, NDC: housing.NDC * UC_elements.NDC})
            }
            case "NONE" : {
                return setLift({RENT: ROUND(RECKONER(housing.rent, housing.freq, housing.rentFree, housing.SSSC)), RATES: housing.rates, RATES_F: housing.ratesFreq, NDC: housing.NDC * UC_elements.NDC})
            }
            default : {
                return
            }
        }
    }, [ housing.type, housing.freq, housing.SSSC, housing.NDC, housing.rentFree, housing.rates, housing.ratesFreq, housing.rent, setPropState])



    // effect lifts to main state: 

    useEffect(() => {
       
        setPropState( {type: "HOUS", HOUSING: lift.RENT, RATES: lift.RATES, RATES_FREQ: lift.RATES_F, NDC: lift.NDC} )
    
    }, [lift.RENT, lift.NDC, lift.RATES, lift.RATES_F, setPropState])

    // conditional css: 

    const rentfree_dynamic = housing.type === "SOCIAL" ? classes.rentfree_label : classes.rentfree_label_disabled
    const SSSC_dynamic = housing.type === "SOCIAL" ? classes.sssc_label : classes.sssc_label_disabled
    const rates_dynamic = housing.type === "" ? classes.rates_label_disabled : classes.rates_label

    return (
        <React.Fragment>
        <div className={classes.container}>
        <h4 className={classes.heading}>Housing Costs</h4>
            <div className={classes.sub_container}>
                <select onChange={handleType} className={classes.select_type}>
                    <option value="">--Select Type--</option>
                    <option value="SOCIAL">Social sector</option>
                    <option value="PRIVATE">Private landlord</option>
                    <option value="COOWN">Co-ownership</option>
                    <option value="OWN">Owner Occupier</option>
                    <option value="">None</option>
                </select> 
                <input value={housing.rent} disabled={housing.type === "" } onChange={handleAmount} className={classes.select_amount} placeholder="Amount" type="number"/>
                <select value={housing.freq} disabled={housing.type === "" } onChange={handleFreq} className={classes.select_freq}>
                    <option value="">--frequency--</option>
                    <option value="PW">Weekly</option>
                    <option value="PM">Monthly</option>
                </select>   
            </div>
            <div className={classes.warning_box}>
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
                {housing.freq === "" && 
                <p className={classes.warning2}>Select Frequency</p>}
                </div>}
            </div>
            <div className={classes.info}>
                {housing.type === "PRIVATE" &&
                    <p>Enter LHA rate or Rent whichever is lower</p>}
                {housing.type === "OWN"  &&
                    <p>Owners can get help with service charge but see restrictions & 
                    whether this affects work allowance, also see SMI</p>}
                {housing.type === "COOWN" &&
                    <p>Co-owners may get help with rent & service charge but this may
                        affect work allowance </p>}
                </div>
            <label htmlFor="rates" className={rates_dynamic}>Rates: 
                <input value={housing.rates} disabled={housing.type === ""} onChange={handleRates} className={classes.rates_input} id="rates" type="number"></input>
                <select  value={housing.ratesFreq} disabled={housing.type === ""} onChange={handleRatesFreq} className={classes.rates_freq}>
                    <option value="">--frequency--</option>
                    <option value="PW">--Weekly--</option>
                    <option value="PM">--Monthly--</option>
                </select>
            </label>
            <label className={SSSC_dynamic} htmlFor="SizeCriteria">Social Sector Size Criteria (bedroom tax)
                <select value={housing.SSSC} disabled={housing.type !== "SOCIAL"} onChange={handleSSSC} className={classes.sssc_select} id="SizeCriteria">
                    <option value="1">--select--</option>
                    <option value="1">None</option>
                    <option value="0.86">1 bedroom</option>
                    <option value="0.75">2+ bedroom</option>
                </select>
            </label>
            <label htmlFor="rent_free" className={rentfree_dynamic}>Number of rent-free weeks
                <input value={housing.rentFree} disabled={housing.type !== "SOCIAL"} onChange={handleRentFree} type="number" className={classes.rentfree_input}></input>
            </label>
            <label htmlFor="NDC" className={rates_dynamic}> Non-dependent charges
                <select value={housing.NDC} onChange={handleNDC} id="NDC" disabled={housing.type === ""} className={classes.NDC_select}>
                    <option value="0">--select--</option>
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </label>
            </div>
        </React.Fragment>
    )
}
export default Hous;