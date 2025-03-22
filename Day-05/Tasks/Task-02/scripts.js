/**
    2. Craete Multiplication Table (Using for loop)
        Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

        3 x 1 = 3
        3 x 2 = 6
        ...
        3 x 10 = 30
 */


/// With For Loop
console.log("Solve With For Loop:")
N = 3
n = 1
for(i = n; i<11; i++){
    let result = N * n
    console.log(`${N} X ${n} =`,result)
}



// With While Loop
console.log("Solve With while Loop:")
let N = 3
let n = 1
while( n <= 10){
    let result = N * n
    console.log(`${N} X ${n} =`,result)
    n +=1
}

// Wiht Do While Loop:
console.log("Solve With do while Loop:")
 N = 3
 n = 1
do{
    let result = N * n
    console.log(`${N} X ${n} =`,result)
    n +=1
}while(n<11)



