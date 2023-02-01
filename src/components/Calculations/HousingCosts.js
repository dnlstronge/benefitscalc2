/*===========Custom function to calculate housing costs=========== 

   [x] - to be used in a component which provides monthly housing costs
   [x] - needs to access global state from above components props
   [x] - takes state object properties as params
   [x] - should be universal (will acount for any type of housing for which
         the component using it will be rendered. 
   
        stages needed:

    [1] - take max monthly rent
    [2] - apply SSSC reduction if any
    [3] - apply (deduct) rent-free weeks (x / 52 * (50 - rentfee))
    [4] - apply NDD charges if any
    [5] - returns monthly housing award (to nearest penny)


    calculator functions but prefers integers not strings so 
    may need to refactor state updates to reflect this.
*/



import UCElements from "../UC/UCElements/UCElements"

const NDcharge = UCElements.NDC


const HousingCosts = (maxRent, SSSC, rentFree, NDD  ) => {
            /*where: 
            
            maxRent: max monthly elgible rent (number)
            SSSC: 1 = no deduction 0.86 = 1x deduction 0.75 = 2+ deduction
            rentFree = number of rent free weeks if any
            NDD = number of non dependent charges which apply */
            
    
        let housing_costs = (maxRent * SSSC) 
        let RFW = (((maxRent * SSSC ) * 12) /52 * rentFree) / 12
    
        let Non_dep = NDD  * NDcharge 
        let total_base = (housing_costs - RFW ) - Non_dep
        let total = Math.ceil(total_base * 100) /100
          
            if (total < 0 ) {
                return 0
            }
            else {
                return total
        }
    }
    export default HousingCosts;
  //test   HousingCalc( 400, 0.86, 2, 0 )