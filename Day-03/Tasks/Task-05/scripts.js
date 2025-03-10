/** 
    Problem 5: Create an Electricity Bill Calculator
        i) Let's calculate how much you pay for electricity bills per month and annually.

        *** Create a units variable. Based on this value you will calculate the total electricity bill for a months.

        ii) If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?

        *** If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/
// Data structure:
//     *** Unit Variable:
// 	0. unitsPerDay 
// 	1. unitsPerMonth
// 	2. unitsPerYear
// 	3. costPerUnit
// 	4. constPerMonth
// 	5. costPerYear
   
//     *** Payment Variable:
// 	1. discountPerYear
// 	2. payPerMonth
// 	3. payPerYear
// 	4. discountRate

// Value Iput or Assign and Calculate:
// 	1. unitsPerMonth = unitsPerDay * 30
// 	2. unitsPerYear = unitsPerMonth * 12
// 	3. costPerUnit = 150
// 	4. costPerMonth = unitsPerMonth * costPerUnit
// 	5. costPerYear = costPerMonth * 12
// 	6. discountRate = 20
// 	6. discountPerYear = (discountRate/100) * costPerYear
// 	7. payPerMonth = costPerMonth - (discountPerYear/12)
// 	8. payPerYear = costPerYear - discountPerYear
		
    
    // Algorithm:
        

/// Start Coding.

    // Problem message:
    console.log("Electricity Bill Calculator.")

    // Take Inputs Units per day and Discount Rate per year.
    const unitsPerDay = parseFloat(window.prompt('Give Units per day:',50))
    const discountRate = parseFloat(window.prompt('Give your discount rate per year:',20))
    const costPerUnit = parseFloat(window.prompt('Enter per unit cost:',150))

    // Calculate
        // Units:
        const unitsPerMonth = unitsPerDay * 30
        const unitsPerYear = unitsPerMonth * 12
    
        // Cost:
        const costPerMonth = unitsPerMonth * costPerUnit
        const costPerYear = costPerMonth * 12

        // Discount: 
        const discountPerYear = (discountRate/100) * costPerYear

        // Payment:
        const payPerMonth = costPerMonth - (discountPerYear/12)
        const payPerYear = costPerYear - discountPerYear

        // Result in console:
        console.log(`Units per Day: ${unitsPerDay} Rs.`)
        console.log(`Cost per unit: ${costPerUnit} Rs.`)
        console.log(`Discoun per Month and Year: ${discountPerYear/12} Rs. and ${discountPerYear} Rs.`)

        // Pay per month
        console.log(`Your per month Payable ammount: ${payPerMonth} Rs.`)
        console.log(`Your per year Payable ammount: ${payPerYear} Rs.`)

/// End code.