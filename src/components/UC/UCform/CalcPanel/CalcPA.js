import React, { useState, useEffect } from "react"; 
import UCElements from "../../UCElements/UCElements";




const CalcPA = ({state_PA, set_state_PA}) => {

    const UC_elements = UCElements
    

return (

  <React.Fragment>
    <div>
      <p>{state_PA.PERSONAL_ALLOWANCE}</p>
    </div>
    </React.Fragment>
)
    
}
export default CalcPA;