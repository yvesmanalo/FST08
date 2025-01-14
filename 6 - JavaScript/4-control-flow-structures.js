// Control Flow Structures
// 1. Conditional Statements

//    1. Conditional: if, else if, else statement
let temperature = 23;

if (temperature < 0){
  console.log("It's freezing.")
} else if (temperature >= 0 && temperature <20){
    // Range: 0 - 19
  console.log("It's cool outside.")
} else if (temperature >= 20 && temperature <30){
  console.log("It's warm outside.")
} 
  




// 2. Looping Statements
// execute a block of code untile a specific condition is met.

// 1. For Loop
/*
1. Variable Initialization
2. Condition Expression
3. Increment / Decrement
*/

for (let i = 1; i <=3 ; i++){
  console.log("For loop count:",i)
}

// i = 1
// i = 2
// i = 3
// i = 4 (will return false, end of for loop)


// 2. While Loop
let count = 1;
while (count <= 3){
  console.log("While Loop Count:", count)
  count++
}

// i = 1
// i = 2
// i = 3
// i = 4 (will return false, end of while loop)