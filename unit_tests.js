// unit test for HC function 

const calcHousing = require("./calculateHousing")
  test("Checks HC collation", () => {
    expect(calcHousing(400, 0, 0, 0)).toBe(400)
    expect(calcHousing(400, 0, 0, 1)).toBe(422.19)
    expect(calcHousing(400, 0.86, 0, 0)).toBe(344)
    expect(calcHousing(200, 0.75, 0, 1)).toBe(72.19)
    
  }




/*
npm i jest-cli -g
jest

// when looking to test larger groups with complex dependencies consider mocking the state object??? 

*/
