import React, { useReducer } from "react";
import classes from "./Hous.module.css"


const housing_REDUCER = (state, action) => {
    switch(action.type) {
        case "TYPE" : {
            return {...state, type: action.payload}
        }
    }
}

const Hous = (props) => {

    // local state:
    

    const [housing, dispatch] = useReducer(housing_REDUCER, {
        type: '',
        rent: '',
        actualRent: '',
        SSSC: '',
        rates: '',
        rentFree: '',
    })

    //helper functions:

    const handleInput = (e) => {
        return { type: "TYPE", payload: e.target.value }
         }




    const handleRentFree = () => {

    }        
    return (
        <React.Fragment>
        <div className={classes.container}>
        <h4 className={classes.heading}>Housing Costs</h4>
            <div className={classes.sub_container}>
                <select className={classes.select_type}>
                    <option value="SELECT">--Select Type--</option>
                    <option value="SOCIAL">Social sector</option>
                    <option value="PRIVATE">Private landlord</option>
                    <option value="COOWN">Co-ownership</option>
                    <option value="OWN">Owner Occupier</option>
                    <option value="NONE">None</option>
                </select>
                <input className={classes.select_amount} placeholder="Eligible Costs" type="number"/>
                <select className={classes.select_freq}>
                    <option value="SELECT">--frequency--</option>
                    <option value="PW">Weekly</option>
                    <option value="PM"></option>
                </select>
            </div>
            <label htmlFor="rates" className={classes.rates_label}>Rates: 
                <input className={classes.rates_input} id="rates" type="number"></input>
                <select className={classes.rates_freq}>
                    <option value="0">--frequency--</option>
                    <option value="PW">--Weekly--</option>
                    <option value="PM">--Monthly--</option>
                </select>
            </label>
            <label className={classes.sssc_label}htmlFor="SizeCriteria">Social Sector Size Criteria (bedroom tax)
                <select className={classes.sssc_select} id="SizeCriteria">
                    <option value="0">--select--</option>
                    <option value="0">None</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2+ bedroom</option>
                </select>
            </label>
            <label htmlForm="rent_free" className={classes.rentfree_label}>Number of rent-free weeks
                <input type="number" className={classes.rentfree_input}></input>
            </label>
            </div>
        </React.Fragment>
    )
}
export default Hous;