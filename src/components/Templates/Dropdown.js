/* Tempate component for simple drop down which passes event object via props */

import React from "react";



const DROPDOWN = (props) => {

    return (
        <React.Fragment>
            <label htmlFor="dropdown_select">Dropdown</label>
            <select onChange={/*prop gets event object */} name="dropdown" id="dropdown_select">
                <option value="">---select---</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </React.Fragment>
    )
}

export default DROPDOWN;