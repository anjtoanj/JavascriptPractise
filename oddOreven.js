/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/
let numArray =[10,11,230,45,282,220];
let len = numArray.length;

checkOddOrEven(numArray);

function checkOddOrEven(numArray){
  for(index =0; index< len;index++) {
        if(numArray[index]%2 == 0){
            console.log(numArray[index]+" is even");
        }else{
            console.log(numArray[index]+" is odd");
        }
    }
} 