
// Ctreate prompt and empty array to store user inputted numbers.
let userInput = Number(prompt("Enter a number: "));
let numberList = [];  

// Repeatedly prompt for input until condition is met and store inputted numbers in array.
while (userInput != -1) { 
    numberList.push(userInput);  
    userInput = Number(prompt("Enter another number (or enter -1 to stop and get the average of the numbers you entered):"));
}

// Calculate average of numbers in array and output result to console and alert.
let i = 0;
let sumOfList = 0;
while (i < numberList.length) {  
    sumOfList += numberList[i];  
    i++;                         
}

let average = sumOfList / numberList.length;  
console.log(`The average of the numbers you entered is: ${average}`);  

alert(`The average of the numbers you entered is: ${average}`); 




