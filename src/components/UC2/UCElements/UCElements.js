
// ideas for how to handle the logic - i'll be using react so this will include snippets of different functions etc:


// for UC - I think use an object for the elements and go from there: 



/* (placeholder) */

const dynamic_value = "Needs dynamic Value" 

/* ====== UC elements master object ======= */

const UCElements = {
  single_under25: 265.31,
  single_over25: 334.91,
  joint_under25: 416.45,
  joint_over25: 525.72,

  /* 1st child or qualifying young person (if born before 6 April 2017) */
  child_1st: 290.00,

/*2nd & subsequent child or qualifying young person. First child as well if born on or after 6 April 2017. */
  child_2nd: 244.58,

/* MRC or less (any Mob + equiv PIP) */
  disabled_child_lower: 132.89,

/* HRC or ER DL */
  disabled_child_higher: 414.88,

/* LCW = pre April 17 claim only - rare */
  LCW: 132.89,
  LCWRA: 354.28,
  carer: 168.81,

  childcare_1: 646.35,
  childcare_2: 1108.04,

/* Work allowances 
Higher = no eligble housing & LCW or children */

  work_allowance_higher: 573.00,
  work_allowance: 344.00,
  WA_NULL: 0,

 /* capital tarfiff - if capital >6k & <16k */

 tariff_income: dynamic_value,

 /* Transitional amounts fron SDP */
 
 TA_1: 120,
 TA_2: 285,
 TA_3: 405,

 NDC: 77.87
}

export default UCElements;