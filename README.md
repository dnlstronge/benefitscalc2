
live demo hosted on firebase: 

https://uccalc-11c98.web.app/





## Available Scripts

In the project directory, you can run:

### `npm start` - run app in dev mode

### `npm run build` = run for prod build




=====================UPDATE FEB 27th 2023==========================

Spent abit of time experimenting with material UI to build a LP for the different applications, mixed results but it looks okay.

Started new calc for pension credit, quite complex especially savings credit. Guaranteed PC is simpler its basically the difference between an applicable amount and the claimants income. If their income exceeds the applicable amount they are not entitled. The applicable amount is determined based on their circumstances so logic for this will be handled in the components. These will provide figures for income and whether they are a couple.

I've written the code for most of the drop downs and inputs but yet to style it.

Today I worked out the logic, the savings credit is tricky because it looks at income twice essentially, first to determine what if any savings credit the claimant could get, then after that based on their income what they actually get.

    /*===========Penion Credit Logic & calculation==============*/
 const thresholdSingle = 158.47
 const thresholdCouple = 251.70
 const maxSC1 = 14.48 
 const maxSC2 = 16.20

 /* Args to be passed as state below*/

 const stateOBJ = {
     applicableAmount: "0",
     income: "0",
     stateCouple: false
   }


 /* Branch the function into two routes, single couple - apply the same logic with different thresholds 
 maybe use helper function? */

 const calcPensionCredit = (applicableAmount, income, stateCOUPLE) => {

     let a = applicableAmount
     let b = income
     let c = stateCOUPLE
     let GPC = 0
     let SC = 0
     let maxSC = 0

     // SINGLE:
     if (!c) {
         // finds GPC
         if(a - b > 0) { GPC = a - b}

         // finds SC
         if((b - thresholdSingle) * 0.6 < maxSC1) 
          { maxSC = ((b - thresholdSingle) * 0.6)
          } else {
            maxSC = maxSC1
            if(maxSC > 0) {
              SC = maxSC - ( (b - a) * 0.4 )
              if(SC <= 0) {
                SC = 0
              }
              if(SC > maxSC1) {
                SC = maxSC1
              }
            } 
          }    
     } 

     // COUPLE: 

       if (c) {
         // finds GPC
         if(a - b > 0) { GPC = a - b}

         // finds SC
         if((b - thresholdCouple) * 0.6 < maxSC2) 
          { maxSC = ((b - thresholdCouple) * 0.6)
          } else {
            maxSC = maxSC2
            if(maxSC > 0) {
              SC = maxSC - ( (b - a) * 0.4 )
              if(SC <= 0) {
                SC = 0
              }
              if(SC > maxSC2) {
                SC = maxSC2
              }
            }
          }    
     } 

     console.log(`GPC: ${GPC.toFixed(2)} SC: ${SC.toFixed(2)}`)
     return GPC.toFixed(2) SC.toFixed(2)

     //update date local state in return statement via reducer or usestate
 }




 // test: calcPensionCredit(182.60, 200, false) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 7.52)
 // test: calcPensionCredit(182.60, 147, false) (clear - functions on basis of truthy) (expected OP  = GPC: 35.60 SC: 0.00)
 // test: calcPensionCredit(182.60, 280, false) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 0.00)

 // test: calcPensionCredit(278.70, 280, true) (clear - functions on basis of truthy) (expected OP  = GPC: 0.00 SC: 15.68)
 // test: calcPensionCredit(278.70, 237.50, true) (clear - functions on basis of truthy) (expected OP  = GPC: 41.20 SC: 0.00)
 // test: calcPensionCredit(417.50, 410, true) (clear - functions on basis of truthy) (expected OP  = GPC: 7.50 SC: 16.20)
====================UPDATE FEB 20th 2023 ==========================

The UC calculator/reckoner is now functional, I have deploed a live demo https://uccalc-11c98.web.app , sceens below:

There are a few qwerks and additional functionality I want to add, as well as info modals which will give a more detailed explanation regarding certain elements I'd like to implement a simple calculator, and rate rebate calculation (which is contingent on the UC awarded) - I have figures stored in state for this also, another feature would to determine whether benefit cap applies - this would need to know certain state values e,g income over a certain amount or carer status would make a claimant exempt from the cap.

The state which is managed by a reducer is quite complex, in future I would also consider using the context app and wrapping content providers, I did not use this as in terms of prop drilling the nesting depth is no greater than parent child for the most part. This is something I would reconsider if building again.

Below a few screens showing progress so far, the various elements are selected and data entered where appropriate to the left, tallies of the elements log to the right, with another column showing income details right of that.

Image 1

Image 2

Image 3

======================UPDATE FEB 13th 2023=======================

Decided on major overhaul as state management was becoming a bit complex, implemented a reducer for now which handles all of the idividual elements. This involved basically rebuilding these elements from scratch and with simpler logic. I was able to implement a number of different logical functions to each component and added conditional styles and disable props to guide the user inputs into outputs which were a bit easier to manage. Using a reducer allowed an additonal step of checks on values which was helpful. Most components have a useEffect hook which sends a dispatch action to the reducer in parent, set up with depenancies which only change on user input.

feature: I want to add modals which give a bit more information in relation to each elements, what certain criteria is etc

=====================UPDATE FEB 6th 2023========================

Had to make major changes and overhaul the LCWRA/work capabilty section as it the way I had initially implemented was complex and not really giving me the results I wanted, for simplicity's sake I have implemented a different approach which essentially leads the user down a path which will produce expected outcomes.

Have been thinking of how I want to handle the sum of all elements (e.g housing, personal allowance, children, work related activity)

I could have some state which handles the total, and use useEffect hook to trigger based on deps for the required elements. So when I have a value for one, two or three a state update function fires which returns a value (the sum) of the dependencies (the global state), like this:

  import React, { useState, useEffect } from "react";
  import classes from "./Display.module.css"

  /* I want to take all the values created in state and render a total whenever there is a change to any of the values in state, 
    Best approach I think would be to use useEffect, setting the global state values as dependencies */

        const DisplayTotal = ({valueA, valueB, valueC, valueD}) => {


            const [TOTAL, setTOTAL] = useState(0)

            useEffect(() => {
                    setTOTAL(valueA + valueB + valueC + valueD)
                }, [valueA, valueB, valueC, valueD])

            return (

                       <React.Fragment>
                            <div className={classes.container}>
                                <label className={classes.total_label} htmlFor="TOTAL"></label>
                                <div className={classes.total_value} id="TOTAL">{TOTAL}</div>
                            </div>
                       </React.Fragment>
            )
        }
        export default DisplayTotal;
============UPDATE Jan 30th ====================

To date, most of the components which handle the various UC elements are complete. The end product of these components will provide state values which will provide an RT breakdown of the different elements in another panel. The way UC is calculated begins with finding the maximum total amount, this maximum is what this part of the state determines.

challenges: While in my own mind and based on years of experience calculating UC is fairly straight forward, the biggest challenge is not the mathematics involved but the problem solving which is needed to implement this in code. UC elements I had thought initially would be relatively straight-forward to implement became quite complex because of the nature of the elements themselves, many of which are inter-dependent on each other.

============UPDATE Jan 30th ====================

Still working on WCRA element + carer (it's quite tricky)

basically I split it into two different components, one for a single claimant and one for joint. Even at that the logic at play gets quite complex - (it would have been easier if I left out the pre-2017 LCW or migratory cases but I wanted to be thorough)

Have been varying and making additions to the logic and testing cases in the browser, and have the single component functioning. Still working on the couple component.

The fact is that both can be carers and both can have LCWRA, but only one UC element can be added in respect of either (the LCWRA is higher).

so even though both might be LCWRA. they can only receive one LCWRA component. If the partner is a carer, they can get a carer element.

If either carer or LCWRA is in payment the LCW (fringe cases) is overidden as both of these elements are higher.

perhaps it might be helpful to write out the max number of combinations? :

  couple: 
  
        [0] - None
        [1] - LCW x1
        [2] - LCW x1 Carer x1 (if partner is carer) (pre 17 / ESA migration)
        [3] - Carer x1 LCW x1 (if partner has LCW) (pre 17 / ESA migration)
        [4] - LCWRA x1
        [5] - LCWRA x1 Carer x1 (partner is carer)
        [6] - Carer x1 LCWRA x1 (claimant is carer and partner has LCWRA)
        [7] - Carer x1 (either or both are carers)
Then there are the different transitional amounts for SDP loss (these are fixed based on circumstances) - this can be left to the user who should know which to select if any.

==================UPDATE 29th JAN================

Housing costs components complete, based on user input a number of state variables will be given values, these values will be used later to determine actual value of the housing costs components.

There are warning messages and information which displays conditionally which prompts the user to think before using certain values. A guiding hand if you like. The housing part also determines rates, which can be used later (once UC has been calculated) to determine Rate Rebate (a seperate calculation),

You cannot determine Rate Rebate without determining UC, (it is depenent on the amount UC is reduced by earned income so that will also come into play)

The next major part will be income and work capability (basically the last UC element and data needed to do a UC calculation).

NOTE: different types of income are treated different, also having earned income for the purpose of determining UC affects other things in UC. Its quite complex, I might consider a drop down, listing earned --- unearned (benefit income) ---- child benefit (ignored as income but counts toward benefit cap)

NOTE: benefit cap exclusion:

          [x] - earned income total >= presently £658 (create a dynamic value for this) 
          [x] - is carer or recieves carer allowance (carer element and WCA can be dealt with in work status component)
          [x] - LCWRA
          [x] - responsible for a child IRO DLA/PIP  
=======================================UPDATE Jan 27 2023====================================

Progress: have added sections to the calculator and changed the structuring of components and css to an extent. So far I've split the app into 4 sections covering:

=========INSERT IMAGE==============

  [x]  - personal allowance (amount for a single adult or a couple based on age) - This updates global state based on what the user selects, The                    outcome can only ever be four things, this is shared across two pieces of state: Couple (yes or no), over25 (yes or no).
  [x]  - children. This alters multiple pieces of state and also handles the calcualtion for childcare costs. The amounts concerning children will
         be calculated using the state:
         
              QYP: total number of elgible children in the claim (the oldest two and any other children born before April 2017)
              
              eldest: This determines whether one of the amounts for children determined by QYP is the higher amount for a child
              claimaints only get this if the eldest child was born before April 2017. Otherwise the amount for children is the
              same for all children.
              
              CDLow: number of disabled child (lower) elements which should be added to the claim, also triggers a warning if there
              has been a value selected for CDHigh as two elements cannot be paid in respect of one child.
              
              CDHigh: number of disabled child elements (higher) which should be added to the claim, triggers the same warning as above, if already
              selected and the user selects a disabled child lower element as well. 
              
              childcare: determines the amount of childcare. childcare is split into two types an amount for 1 child or an amount for 2+ children
              The type determines the max amount that can be paid, it should be 85% of the max for each type (a dynamic value which is updated
              elsewhere (UCElements) or 85% of the actual value of the chidcare costs. if the user inputs a value which exceeds the max for that
              type a warning is displayed. UC doesn't round conventionally, normally 125.056 ====> 125.06 but UC truncates so 125.0556 ==> 125.05
              I have created a new function to deal with this in the future (calculations/truncate)
              
              
      
  [x] -       Housing - work in progress, but state will reflect:
  
                          - the type of housing (e.g private/social/owner/
                          - the amount of eligible housing (different types) users can enter monthly ot weekly values
                          - any deductions e.g for non-dependents
                          - whether bedroom tax applies (SSSC - social tenants only)
                          - rates/council tax (to be calculated elsewhere)
              
              
  [x] -  state log: created a section to output global state changes, gives a visual representation that everything is working as intended,
         also been a great help with debugging. Certain handlers have resets built into them so it was of great assistance in getting this to work.
BenCalc
Initial ideas for a welfare benefits calculator I intend to build

I am going to use React primarily - I intend to work on creating a functioning benefits calculators making use of my expertise in welfare rights legislation. I think that I will build a UC calc first, my idea is to build up the logic and underpinning calcs in JS, and then combine this with a decent UI. Initially it is my intention that the target user would be a welfare advice or benefits adviser - (the user would be expected to know what certain terms mean) - on the back of this simpler public UIs and interfaces could be added.

========== UC ==========

[x] - object containing UC elements

[] - Form which renders dynamically based on user input. what gets submitted or saved to state should be the correct total elements added together or max UC this will be needed for the next stage [] - income part of form: user will enter a value, a function will take a value weekly, monthly, fourweekly or biweekly via drop down, but will always return a calculated montly value

======== ideas ==========

right now I can see multiple ways of doing this viably, but I am leaning toward creating a 'CLIENT' object which will have a set of values dependent on what was submitted on the form. The form could render or display error messages based on what has been input.

    { id: {dynamic_hash}              - I may need this later, especially if I entend to store or recall, or do anything with the data such as storing to an array
      personal_allowance:             - over under 25? single claim couple (value based on selected)
      LCW:                            - boolea or value
      LCWRA:                          - boolean or value
      children:                       - value determined by input
      childcare:                      - value determined by input
      housing:                        - calculated by input 
      
      // I think each object could have some booleans which could in turn affect whether benefit cap applies or whether something else can be deducted etc
======== further ===========

[] - I think if I can get down the JS and form structure I have an object which I can use to calculate a UC maximum:

  props = the state updated from form =====
  
  

  const calc_maxUC = (props) => {
    props.personal_allowance +  props.housing + props.childcare + props.children + props.LCW etc 
    }
======== next =============

this value could be stored in new state, then used as part of the actual calculation, maybe I should try and get a basic version of this logical direction implemented in JS, very basic maybe just a few elements and see if I can get the maths to work and develop it from there.

[] form creates object stored in state:

[] - the calculation: break the calulation into parts.

[] - it should be a function executed on button, it will take the state object as

===== part one ======

form =====> state (object) ====== useobject to get max UC: I have started writing a form component using two state objects: one to manage variables and the other to create a state object which has the values needed. I'm going to create a simple react project when I have access to my dev env and see if I can get this hooked up. It will be easier to see if this approach is scalable or efficient. Might another approach be better?

I still like the idea of rendering form data based on whether a variable is active or not, which in turn is based on whether something has been selected or not, for example somone who selects couple, should only ever get access to couple personal allowances.

        const UCform = (props) => {

                  //G_STATE: 
                  const [CLIENT_GLOBAL, setCLIENT_GLOBAL] = useState({ over25: null, couple: null, })

                  const [CLIENT, UPDATE_CLIENT] = useState({PA: 0, CHILD: 0, HOUS: 0})


                  // will probaly need to test more and work on this handler logic: 

                  const handleSubmit = (e) => {
                      e.preventDefault()
                      CLIENT_GLOBAL.couple && CLIENT_GLOBAL.over25 ? UPDATE_CLIENT({...CLIENT, PA: /*UC OBJ.prop */ }) : UPDATE_CLIENT(...prev)
                      CLIENT_GLOBAL.couple && !CLIENT_GLOBAL.over25 ? UPDATE_CLIENT 
                  }
                  // references: 

                  const handleCouple = () => {
                      setCLIENT_GLOBAL({...CLIENT_GLOBAL, couple: true})
                  }

                  const handleAge = () => {
                      setCLIENT_GLOBAL({...CLIENT_GLOBAL, over25: true})
                  }

                  return (
                  <form onSubmit={handleSubmit}>
                      <label for="couple">Relevant age group: </label>

                      <select onChange={handleCouple}name="couple" id="couple-select">
                          <option value="">--Please choose an option--</option>
                          <option value="single">Single</option>
                          <option value="couple">Couple</option>

                      </select>


                      <label for="age">Relevant age group: </label>
                      <select onChange={handleAge} name="age group" id="age">
                          <option value="">--Please choose an option--</option>
                          <option value= "">25+</option>
                          <option value=" "></option>

                      </select>


                  </form>
                  )

              }
===== part two ========

Okay sofar I have managed to get most of the logic and state updates / conditional rendering working in the main app, I worked on this yesterday evening and added some basic css, and ran some logging tests to check were props/state and data were moving where they should be. Today I want to look at moving the select tags and logic into separate components. I would asome I would point to the associated setState via props passed into these components:

                       const Select_Child = (props) => {
                        return (
                            <react.Fragment>
                                <label></label>
                                <select></select>
                            </react.Fragment>
                        )
                    }
above: props could get reference pointing to function updating the state.

=============================NOTE======================================

I think the best way of going about things going forward is that the calculation renders in a separate box or area in RT based on state which is update via change handlers. I have already tested this to an extent in the main project by creating a state log box, which displays certain updated state, I am confident that this can be developed upon to essentially provide a reactive breakdown of the calculation to the right of the form.

========================== UPDATE 25th JAN 23===============================

After trying a few different methods and approaches I now think the best approach is have global state which gets updated based on separate components for each part of the form. These globals will be allow the program to render an RT calculation in an adjacent section.

Global state (current values) get handed down through props to each component or relevant part of the form and based on input the state gets updated from within that component. I have a section (children) working this way at present, I have window which logs the curreny global state. I plan on moving existing components from the form into seperate files as the logic and reasoning behind determining which globals are changed can get complex:

after I have the globals I want I will need to create separate components to handle the calculations for each element or allowance, these values will be used in conjunction with the globals to determine entitlement to each element. That's were benefit expertise will come in as it pertains to whether somone gets something for not based on the rules of the benefit. The reasoning behind using some global variables is that some elements (their calcultion and the whether a condition applies) rely on other factors.

examples:

you cannot get a carer element and a LWRA element in a single claim.

A person who does not claim housing costs and has children gets a different disregard on their earnings than if the housing cost element is included.

there are many more such scenarios.

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
