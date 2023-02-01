import React from "react";
import classes from "./CalcPanel.module.css"
import UCElements from "../../UCElements/UCElements"
import CalcPA from "./CalcPA";

const UC_elements = UCElements

const CalcPanel = ({panel_state, set_panel_state}) => {

    return (
        <React.Fragment>
        <div className={classes.container}> 
        <section className={classes.calcPA}>Personal Allowance:
        <CalcPA state_PA={panel_state} set_state_PA={set_panel_state}/>
            </section>
        <section className={classes.calcWCA}>test</section>
        <section className={classes.calcChild}>test</section>
        <section className={classes.calcHousing}>test</section>
        </div>
        
        
        </React.Fragment>
    )
}
export default CalcPanel;