/* I may need to access two different pieces of state, as well as UC_elements object:
PROPS: 
  - UCelements   (points to UC_Elements)
  - state_GLOBAL (points to CLIENT_GLOBAL) 
  - set_state_GLOBAL (points to setCLIENT_GLOBAL) 
*/

//====================CHILDREN========================//


/*   returns updated state for CLIENT_GLOBAL: 
        QFY: (number of eligible children)
        eldest: (eldest born before april 17)
        CDLow: (number of children receiving DLA or PIP )
        CDHigh (number of children receiving HRC DLA or PIP)
        Childcare: (calculated eligible childcare based on input and number of eligible children)
          */

import React, { useState } from 'react'
import classes from "./SelectChild.module.css"
import UCElements from "../../UCElements/UCElements"

const UC_elements = UCElements



const Select_Child = ( {state_GLOBAL, set_state_GLOBAL} ) => {

            /* =========LOCAL STATE========= */

    const [hasChildren, setHasChildren] = useState(false)
    const [childcare_FOR, setChildcare_FOR] = useState('')
    const [warning, setWarning] = useState('')
    

            /* ===========HANDLERS=========== */

    const handle_child_click = () => {
        hasChildren ? setHasChildren(false) : setHasChildren(true)
        set_state_GLOBAL({...state_GLOBAL, QYP: "0" , CDLow: "0", CDHigh: "0", childcare: 0})
        setWarning("")
    }
    const handle_number_children = (e) => {

        set_state_GLOBAL({ ...state_GLOBAL, QYP: e.target.value, })
    }
    const eldest_handler = (e) => {
        set_state_GLOBAL({ ...state_GLOBAL, eldest: e.target.value})
    }
    const handle_disabled_low = (e) => {
        
        set_state_GLOBAL({...state_GLOBAL, CDLow: e.target.value})
       
    }
    const handle_disabled_high = (e) => {
        
        set_state_GLOBAL({...state_GLOBAL, CDHigh: e.target.value})
       
        
    }
    const handle_childcare = (e) => {
        setChildcare_FOR(e.target.value)
        set_state_GLOBAL({...state_GLOBAL, childcare: 0})
        setWarning("")
        
    }

    
    const handleChildcareAmount = (e) => {
        
        /* needed truncation */
        const truncate =  (value, numDecimalPlaces) =>
        Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces)

            
            if(e.target.value > UC_elements.childcare_1 && childcare_FOR === "1child") {
                set_state_GLOBAL({...state_GLOBAL, childcare: 0}) 
             return   setWarning("warning one")
                         
                    
            }
            if(e.target.value > UC_elements.childcare_2 && childcare_FOR === "2child") {
                set_state_GLOBAL({...state_GLOBAL, childcare: 0})
               return  setWarning("warning two")
                        
            }
                        
            else {
                setWarning("null")
            }
            if(e.target.value <= UC_elements.childcare_1 && childcare_FOR === "1child") {
                set_state_GLOBAL({...state_GLOBAL, childcare: truncate((e.target.value*0.85), 2 )}) 
            if(e.target.value <= UC_elements.childcare_2 && childcare_FOR === "2child")
                set_state_GLOBAL({...state_GLOBAL, childcare: truncate((e.target.value*0.85), 2 )}) 
            
    }}      

   const handleChildcareAmount2 = (e) => {
        
        /* needed truncation */
        const truncate =  (value, numDecimalPlaces) =>
        Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces)

            
            if(e.target.value > UC_elements.childcare_2 && childcare_FOR === "2child") {
                set_state_GLOBAL({...state_GLOBAL, childcare: 0}) 
               return  setWarning("warning two")}
            else {
                setWarning("null")
            }
            
            if(e.target.value <= UC_elements.childcare_2 && childcare_FOR === "2child") {
                set_state_GLOBAL({...state_GLOBAL, childcare: truncate((e.target.value*0.85), 2 )}) 
            
    }}      


   

    return (
        <React.Fragment >
                    <label  htmlFor="has_Children">Child or qualifying young person</label>
                    <input 
                
                    type="checkbox" name="children_ref" id="has_Children" className={classes.hasChildren}
                    value={hasChildren} 
                    onClick={handle_child_click}></input>
                    <br></br>
                    <br></br>
{hasChildren &&  <label htmlFor="eldest">Oldest born before April 2017</label> } 
{hasChildren &&  <select 
                            type="checkbox" 
                            name="eldest_child" 
                            id="eldest" 
                            onChange={eldest_handler}>
                            <option value="">---please select---</option>
                            <option value="yes">Yes</option> 
                            <option value="no">no</option>
                   </select>}
                   <br></br>
    
{hasChildren && <label htmlFor="children-select"> Eldest 2 children + any exempt children</label>}
{hasChildren && <select name="children" id="children-select" onChange={handle_number_children}>
                            <option value="0">---please select---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>

                    </select>}

                    {/* =============DISABILITY============= */}

{parseInt(state_GLOBAL.QYP) > 0 &&   
                        <label htmlFor="disabled_low">Disabled Child (Low)</label> }
{parseInt(state_GLOBAL.QYP) > 0 &&   
                        <select id="disabled_low" onChange={handle_disabled_low}> 
                            <option value="0">---please select---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>}
{parseInt(state_GLOBAL.QYP) > 0 && 
                      <label htmlFor="disabled_high">Disabled Child (High)</label> }
{parseInt(state_GLOBAL.QYP) > 0 && 
                        <select id="disabled_high" onChange={handle_disabled_high}>
                            <option value="0">---please select---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                    </select>}
    
 {(parseInt(state_GLOBAL.CDLow) * parseInt(state_GLOBAL.CDHigh)) > 0  &&
                    <p className={classes.warning}>
                    Warning: remember one child cannot receive more than one disablity element
                    </p>}
 
{hasChildren &&    <label htmlFor="childcare-select">Childcare:</label>}
{hasChildren &&    <select name="childcare" id="childcare-select" onChange={handle_childcare}>
                        <option value="">---Please Select---</option>
                        <option value="1child">1 child</option>
                        <option value="2child"> 2+ children</option>
                    </select>}
{hasChildren && childcare_FOR === "1child" &&
                    <label htmlFor='select-amount'>Enter amount(per month):</label>}
{childcare_FOR === "1child" && hasChildren &&  
                    <input 
                           id="select-amount" 
                           className={classes.childcareAmount} 
                           type="number"
                           onChange={handleChildcareAmount}
                          />}
{hasChildren && childcare_FOR === "2child" &&
                    <label htmlFor='select-amount'>Enter amount:</label>}
{childcare_FOR === "2child" && hasChildren && 
                    <input 
                           id="select-amount" 
                           className={classes.childcareAmount} 
                           type="number"
                           onChange={handleChildcareAmount2}
                          />}



 {warning === "warning one" && hasChildren && <p 
                        className={classes.warning}>
                        Warning: max childcare for one child is {UC_elements.childcare_1}. 
                        It should be this figure or the actual amount, whichever is lower.</p>}
 {warning === "warning two" && hasChildren && <p 
                        className={classes.warning}>
                        Warning: max childcare for two or more children is {UC_elements.childcare_2}. 
                        It should be this figure or the actual amount, whichever is lower.</p>} 


        </React.Fragment>
    )
}

export default Select_Child;