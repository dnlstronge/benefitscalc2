import React from "react"
import classes from "./HousingType.module.css"

const HousingType = ({ handler }) => {
    return (
        <React.Fragment>
        <div className={classes.container}>
            <label className={classes.label_housing} htmlFor="housing-select">Housing Status:
            <select className={classes.select_housing}onChange={handler} name="housing" id="housing-select">
                <option value="">--Please choose an option--</option>
                <option value="SOCIAL"> Social Tenant</option>
                <option value="PRIVATE"> Private Landlord</option>
                <option value="CO-OWN"> Co-ownership</option>
                <option value="OWN"> Owner</option>
                <option value="NONE"> None (e.g live with family)</option>
            </select>
        
        </label>
        </div>
        </React.Fragment>
    )

}
export default HousingType;