/**
    Problem 1: What will be the output of this code snippet and why?
     
 */


        let day = "Monday";

        switch (day) {
           case "monday": /// False
               console.log("It's the start of the week.");
               break;
           default: // True
               console.log("It's a normal day."); // So, This is the Output.
        }

        // Output : It's a normal day
        // Why:
            // As javascript is ' Case Sensitive. The reason why output is "It's a normal day"
            // Case Sensitive :
                // let a = 'Abc' // Here "A" !== "a". Within a word lowercase and upercase letter.