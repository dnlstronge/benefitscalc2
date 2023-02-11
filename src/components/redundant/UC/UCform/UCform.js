/*==========================UNIVERSAL CREDIT CALCULATOR============================= */

import React, { useState } from 'react'
import SelectChild from './Children/SelectChild'
import classes from "./UCform.module.css"
import SelectPA from "./PA/SelectPA"
import SelectHousing from "./Housing/SelectHousing"
import WCA from './WCA/WCA'
import CalcPanel from './CalcPanel/CalcPanel'

/* need to pass UC_ elements object down as a prop from another component
alternative woud be to import and destructure?  */

const UCform = (props) => {

/* ======================================GLOBAL_STATE======================================== */

    const [CLIENT_GLOBAL, setCLIENT_GLOBAL] = useState({ 

        
        over25: "NONE",
        couple: "NONE",
        QYP: null,
        eldest: "no",
        housing_type: null,
        SSSC: 0,
        rentFree: 0,
        NDD: 0,
        housingPM: 0,
        
        
        PERSONAL_ALLOWANCE: 0,
        LCW_NOPAYMENT: "",
        WORK_CAPABILTY: 0,
        total: 0,
    })

   
    
    

   
    



   

    
    return (
        <React.Fragment> 
            <header className={classes.header}><h1>Universal Credit Calculator (expert)</h1></header>  
            <div className={classes.form_container_row}>
          
            

            <div className={classes.form_container_column}>
                <form className={classes.UC_form_PA}>
                    <h2>Personal Allowance</h2>
                    <SelectPA state_GLOBAL={CLIENT_GLOBAL} set_state_GLOBAL={setCLIENT_GLOBAL}/>
                </form>
            </div>
            

            <div className={classes.form_container_column}>
                 <WCA state_GLOBAL={CLIENT_GLOBAL} set_state_GLOBAL={setCLIENT_GLOBAL}/>
                 <form className={classes.UC_form_children}>
                    <SelectChild state_GLOBAL={CLIENT_GLOBAL} set_state_GLOBAL={setCLIENT_GLOBAL}/>
                </form>  
                 <form className={classes.UC_form_housing}>
                    <SelectHousing state_GLOBAL={CLIENT_GLOBAL} set_state_GLOBAL={setCLIENT_GLOBAL}/>
                </form>
            </div>
            

        {/* ================================END OF COLUMN===================================== */}

            <div>
               <CalcPanel panel_state={CLIENT_GLOBAL} set_panel_state={setCLIENT_GLOBAL}/> */
            </div>


        {/*================================DISPLAY: STATE================================== */}
        <div className={classes.form_container_column}>
           
            <section className={classes.statelog}>
                <h4>State Logs</h4>
                <div>Personal allowance:
                <ul>
                    <li>Age 25+: {CLIENT_GLOBAL.over25}</li>
                    <li>Couple: {CLIENT_GLOBAL.couple}</li>
                </ul>
                </div>
                <h4>WORK CAPABILTY</h4>
                <p>Migrating from ESA with paid LCW: {CLIENT_GLOBAL.ESA_mig}</p>
                <p>Limited Capabilty for Work: {CLIENT_GLOBAL.LCW}</p>
                <p>LCW applies: {CLIENT_GLOBAL.WC}</p>
                <p>LCWRA: {CLIENT_GLOBAL.LCWRA}</p>
                <p>Carer: {CLIENT_GLOBAL.carer}</p>

                <h4>CHILDREN</h4>
                <p>Children: {CLIENT_GLOBAL.QYP}</p>
                <p>Eldest: {CLIENT_GLOBAL.eldest}</p>
                <p>Disabled Child (low): {CLIENT_GLOBAL.CDLow}</p>
                <p>Disabled Child (high): {CLIENT_GLOBAL.CDHigh}</p>
                <p>Childcare costs: {CLIENT_GLOBAL.childcare}</p>
               
                
                
                <h4>HOUSING</h4>
                <p>Type of tenancy: {CLIENT_GLOBAL.tenancy} </p>
                <p>Extra Bedrooms: {CLIENT_GLOBAL.SSSC}</p>
                <p>Number of Non-deps:{CLIENT_GLOBAL.NDD}</p>
                <p>Rent free weeks if any: {CLIENT_GLOBAL.rentFree}</p>
                <p>Monthly rent: {CLIENT_GLOBAL.housingPM}</p>
                <p>Rates (weekly): {CLIENT_GLOBAL.rates_pw}</p>

               

            </section>
            
            </div>
            </div>
            </React.Fragment>
            )

        }

        export default UCform;