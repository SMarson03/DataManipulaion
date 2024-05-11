// /*You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.*/

// const totalTrip = 1500

// /*Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.*/

// Main function to comp
   // Function to calculate trip duration
// Function to calculate gallons of fuel needed

function fuelNeeded(distance, speed) {
    if (speed === 55) {
        return distance / 30;
    } else if (speed === 60) {
        return distance / 28;
    } else if (speed === 75) {
        return distance / 23;
    }
}

// Function to calculate trip duration
function tripDuration(distance, speed) {
    return distance / speed;
}

// Main function to compute and log results
function main() {
    const distance = 1500;
    const fuelBudget = 175;
    const fuelCostPerGallon = 3;

    const speeds = [55, 60, 75];

    speeds.forEach(speed => {
        const gallonsNeeded = fuelNeeded(distance, speed);
        const totalCost = gallonsNeeded * fuelCostPerGallon;
        const tripTime = tripDuration(distance, speed);

        console.log(`At ${speed} mph:`);
        console.log(`Gallons of fuel needed: ${gallonsNeeded}`);
        console.log(`Total cost: $${totalCost}`);
        console.log(`Trip duration: ${tripTime.toFixed(2)} hours`);

        if (totalCost <= fuelBudget) {
            console.log("Your budget is enough to cover the fuel expense.");
        } else {
            console.log("Your budget is not enough to cover the fuel expense.");
        }

        console.log("\n");
    });
}

// Call the main function
main();