import React from "react";
import classes from "./Hous.module.css"

const Hous = (props) => {
    return (
        <React.Fragment>
            <div className={classes.container}>
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
        </React.Fragment>
    )
}
export default Hous;