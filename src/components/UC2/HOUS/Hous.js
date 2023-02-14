import React, { useState } from "react";
import classes from "./Hous.module.css"

const Hous = (props) => {

    // local state:
    const [rentFree, setRentFree] = useState(false)

    const [housing, setHousing] = useState( {
        type: '',
        rent: '',
        actualRent: '',
        SSSC: '',
        rates: '',
    })

    //helper functions:

    const findHousing = () => {
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
                <input className={classes.select_amount} placeholder="Eligible Costs"type="number"/>
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
                    <option>--select--</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2+ bedroom</option>
                </select>
            </label>
            <label htmlForm="rent_free" className={classes.rentfree_label}>Rent-free weeks
                <input type="checkbox" className={classes.rentfree_input}></input>
            </label>
            </div>
        </React.Fragment>
    )
}
export default Hous;