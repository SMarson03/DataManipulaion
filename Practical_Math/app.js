/*You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.*/

const totalTrip = 1500

/*Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.*/

const fiftyFiveMiles = 30
const sixtyMiles = 28
const seventyFiveMiles = 23
const budget = 175
const fuel = 3

const fuelUsage = (totalTrip/fiftyFiveMiles)
const fuelExpense = (totalTrip/fiftyFiveMiles*fuel)
const length = (totalTrip/fiftyFiveMiles)


/*How many gallons of fuel will you need for the entire trip?*/
console.log(`The total amount of fuel for the entire trip is ${fuelUsage} if driving 55 miles per hour`)

/*Will your budget be enough to cover the fuel expense?*/
console.log (`${fuelExpense}, dollars is less than ${budget}`)

/*How long will the trip take, in hours?*/
console.log(`The trip will take about ${length} hours`)