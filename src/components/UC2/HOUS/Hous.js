import React, { useState } from "react";
import classes from "./Hous.module.css"

const Hous = (props) => {

    const [housing, setHousing] = useState( {
        type: '',
        rent: '',
        actualRent: '',
        SSSC: '',
        rates: '',
    })
    return (
        <React.Fragment>
        <div className={classes.container}>
        <h4 className={classes.heading}>Housing Costs</h4>
            <div className={classes.sub_container}>
                <select className={classes.select_type}>
                    <option>--Housing Type--</option>
                    <option>Social sector</option>
                    <option>Private landlord</option>
                    <option>Co-ownership</option>
                    <option>Owner Occupier</option>
                    <option>None</option>
                </select>
                <input className={classes.select_amount} type="number"/>
                <select className={classes.select_freq}>
                    <option>--frequency--</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
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
            </div>
        </React.Fragment>
    )
}
export default Hous;