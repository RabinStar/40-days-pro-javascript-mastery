// Problem 2: Build an ATM Cash Withdrawal System
    // Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”

///////////////// DSA: ///////////////

// Datastructure:

// Primitive Data:
	// 1. CashAmmount // Could be Float or Intiger but must be >0.
	// 2. withdrawalAmmount // Must be Intiger and multiples of 100.

////////////// ****** ///////////

//  Decleration Variable as DSA, Making Expression and Check Condition:

	// Variable Declaration:		
	    
 	    // let balanceAmmount = 5000
	    // let withdrawalAmmount = 0
 	
	
	// Expressions making:

	    // For CashAmmount:
		// hasAmmount = ( balanceAmmount > 0 ) and (balanceAmmount >= 100 )
	    
	    // For Withdrawal Ammount:
		// isPossibleWithdraw = ( withdrawalAmmount % 100 )

	// Conditional Check and Make Decision:
		// hasAmmount ?
			// isPossibleWithdraw ?
				// Print: Valid and Show Withdraw Ammount
				// balance -= witdrawalAmmount
		
		// Print: Invalid Ammount.
		
	// Code Start
	    
    let balanceAmmount = 5000
    let withdrawalAmmount = 500 // Valid Ammount
    
    let hasAmmount = ( balanceAmmount > 0 ) && (balanceAmmount >= 100 )
    
    let isPossibleWithdrawAmmount = ( withdrawalAmmount % 100 )
    
    if(hasAmmount){
        if(!isPossibleWithdrawAmmount){
            console.log(withdrawalAmmount,"is valid Amount.")
            console.log("You have successfully.", withdrawalAmmount)
            balanceAmmount -= withdrawalAmmount
            console.log('Your new balance is :',balanceAmmount)
        }else{
            console.log("Invalid Ammount of withdraw:")
        }
    }else{
        console.log('Insufitient balance')
        console.log('Please Disposite!!!!')
    }
    
/// End	