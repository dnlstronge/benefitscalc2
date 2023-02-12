import React from "react";
import classes from "./Hous.module.css"

const Hous = (props) => {
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
                    <option>--frequency--</option>
                    <option>--Weekly--</option>
                    <option>--Monthly--</option>
                </select>
                
            </label>
            </div>
        </React.Fragment>
    )
}
export default Hous;