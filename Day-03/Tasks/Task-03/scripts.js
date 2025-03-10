/**
    Problem 5: Create an Electricity Bill Calculator
        i) Let's calculate how much you pay for electricity bills per month and annually.

        *** Create a units variable. Based on this value you will calculate the total electricity bill for a months.
        
        ii) If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?

        iii) If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

**/

// Problem analysing:
    // Understanding:
        // Say totalUnitsPerMonth 50
        // Find unitsPerYear.
        // Find discount annual payment.
        
    
    // Data Structuer:
        // Define needed float type variable and assign value if has:
            // 1. unitsPerMonth
            // 2. unitsPerYear
            // 3. unitConsumesPayPerMonth
            // 4. discountPayPerYear
            // 4. discountPayPerMonth
            // 5. totalPayPerMonth
            // 6. totalPayPerYear
            
    // Theory Solution:
        // Calculate:
            // 1. unitsPerYear = unitsPerMonth x 12.
            // 2. unitConsumesPayPerMonth = unitsPerMonth x 150
            // 2. discountPayPerYear = (20/100) * (unitsPerYear * 150)
            // 3. discountPayPerMonth = discountPayPerYear / 12 
            // 4. totalPayPerMonth = (unitConsumesPayPerMonth - discountPayPerMonth)
            // 5. totalCTCperAnnum = (salaryPerYear + bonousPerYear) 
    
    
    // Algorithm:
        // 1. Start.
        // 2. Variable and Value assign  as const:
            // 1. salaryPerMonth = 12,300
            // 2. salaryPerYear
            // 3. bonousPerYear
            // 4. bonousPerMonth
            // 5. totalEarnsPerMonth
            // 6. totalCTCperAnnum

        // 3. Calculate:
            // 1. salaryPerYear = salaryPerMonth x 12.
            // 2. bonousPerYear = (20/100) * salaryPerYear
            // 3. bonousPerMonth = bonousPerYear / 12 
            // 4. totalEarnsPerMonth = (salaryPerMonth + bonousPerMonth)
            // 5. totalCTCperAnnum = (salaryPerYear + bonousPerYear) 
        
        // 4. Print totalEarnsPerMonth and totalCTCperAnnum.
        // 4. End.

/// Start Coding.

    // Define needed float type variable and assign value if has:
        const salaryPerMonth = parseFloat(12300)
        let salaryPerYear = parseFloat(0)
        let bonousPerYear = parseFloat(20/100)
        let bonousPerMonth = parseFloat(0)
        let totalEarnsPerMonth = parseFloat(0)
        let totalCTCperAnnum = parseFloat(0)

    // 3. Calculate:
        salaryPerYear = salaryPerMonth * 12
        bonousPerYear = (20/100) * salaryPerYear
        bonousPerMonth = bonousPerYear / 12 
        totalEarnsPerMonth = (salaryPerMonth + bonousPerMonth)
        totalCTCperAnnum = (salaryPerYear + bonousPerYear)
        
    // 4. Print totalEarnsPerMonth and totalCTCperAnnum.
    console.log(`Your Basic Salary per month: ${salaryPerMonth} Rs.`)
    console.log(`Your Total Earns per month: ${totalEarnsPerMonth} Rs.`)
    console.log(`Your Total CTC per Annum: ${totalCTCperAnnum} Rs.`)

// Code End
