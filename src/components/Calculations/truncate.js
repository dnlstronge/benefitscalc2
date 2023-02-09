

// for truncating currency values:

const truncate =  (value, numDecimalPlaces) =>
    Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces)

// for rounding down currency values;

const round = (x) => {

   return Math.ceil( x * 100) /100

}

// for rounding down and up use: 

const rounded = (value) => {
    return Math.round(value*Math.pow(10,2))/Math.pow(10,2) }