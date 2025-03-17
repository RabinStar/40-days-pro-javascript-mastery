// Task For Multiple Loop Counter:

// ---> Task-01: Print Start and End Element of an Array:

// let bazarList = ['Alo','Payaz','Dhal','Mori','Chini']

// Task Analysis:
// 	Start: Alo, End: Chini code: bazarList[0], bazarList[lenght - 1]
// 	Start: Payaz, End: Mori code: bazarList[1], bazarList[lenght - 2]
// 	Start: Dhal, End: Dhal code: bazarList[2], bazarList[lenght - 3] 
// 	..........
// 	..........
// 	Start: Chini, End: Alo code: bazarList[length-1], bazarList[lenght - length]

/// Problem analyzing and trying to solve basic level solution with self-way:

console.log('Self Practices:')
let bazarList = ['Alo','Payaz','Dhal','Mori','Chini']
arrLen = (bazarList.length)
console.log('Array Length:',arrLen)
arrStartLen = arrLen - arrLen
console.log(arrStartLen)

arrEndLen = (arrLen - 1)
console.log(arrEndLen)



//
console.log(bazarList[arrStartLen])
console.log('Solve With while loop!!!!!')

// while(true){
//     if(( (arrStartLen < arrLen) && (arrEndLen>=0 ))){
//         console.log(`Start: ${bazarList[arrStartLen]}, End: ${bazarList[arrEndLen]}`);
//         arrStartLen++
//         arrEndLen--
//     }else{
//         break
//     }
// }

console.log('Solve With for loop!!!!!')
console.log('Solve With for loop!!!!!,Start:',arrStartLen)
console.log('Solve With for loop!!!!!,End:',arrEndLen)
for( i = arrStartLen, j = arrEndLen; i < arrLen && j >= 0; i++, j--){
    console.log(`Start: ${bazarList[i]}, End: ${bazarList[j]}`);
    
}

// Inter-Level Solution:
let arr = ["A", "B", "C", "D", "E"];
let arrStart = 0
let arrEnd = arr.length - 1

// With while loop:
while(arrStart <= arrEnd){
	console.log(`Start: ${arr[arrStart]}, End: ${arr[arrEnd]}`);
	arrStart++
	arrEnd--
}

// With for loop:

for(i = 0, j = arr.length -1; i <= j; i++,j--){
	console.log(`Start: ${arr[i]}, End: ${arr[j]}`);
}

/**
একটা মজার প্রশ্ন:
ধরো, যদি অ্যারেতে এলিমেন্ট সংখ্যা জোড় (even) হয়, তাহলে সবকিছু ঠিকঠাক হবে।
কিন্তু যদি এলিমেন্ট সংখ্যা বিজোড় (odd) হয়, তাহলে মাঝের উপাদান (arr[arrStart]) দুইবার প্রিন্ট হবে! 🤔

তাহলে তুমি কি একটু চিন্তা করে একটা শর্ত যোগ করতে পারবে, যাতে মাঝের উপাদান একবারই প্রিন্ট হয়? 🔥
**/

// // Analyzing Problem:

// // Find Numbers of list Elements:
// const numberOfElements = arr.length
// console.log(numberOfElements)
// // Check Even or Not?
// let isEven = numberOfElements % 2



for(i = 0, j = arr.length -1; i <= j; i++,j--){
    isEven && i===j ?
        console.log(`This is Middle Element: ${arr[i]}`)
    :console.log(`Start: ${arr[i]}, End: ${arr[j]}`)
    
	
	
}

/// Final Code:
// const arr = ["A", "B", "C", "D", "E"];
const numberOfElements = arr.length;
console.log(`Total Elements: ${numberOfElements}`);

let isEven = numberOfElements % 2; // 0 হলে even, 1 হলে odd

for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    isEven && i === j
        ? console.log(`This is Middle Element: ${arr[i]}`)
        : console.log(`Start: ${arr[i]}, End: ${arr[j]}`);
}


