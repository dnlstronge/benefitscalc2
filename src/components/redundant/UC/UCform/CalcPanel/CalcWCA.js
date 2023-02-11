import React, { useState, useEffect } from "react"; 
import UCElements from "../../UCElements/UCElements";




const CalcWCA = ({state_PA, set_state_PA}) => {

    const UC_elements = UCElements
    

return (

  <React.Fragment>
    <div>
    {state_PA.LCW_NOPAYMENT === "NO" &&
      <p>Entitled to LCW status only</p>}
    {state_PA.LCW_NOPAYMENT === "YES" &&  
      <p>Limited capabilty for work: £{state_PA.WORK_CAPABILTY}</p>}
    {state_PA.WORK_CAPABILTY === UC_elements.LCWRA && 
      <p>Limited capabilty for work & work related activity: £{state_PA.WORK_CAPABILTY}</p>}
    </div>
    </React.Fragment>
)
    
}
export default CalcWCA;