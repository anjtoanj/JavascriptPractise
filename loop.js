/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/
var sum =0;
const myArray =[];
myArray.push(sum);
for(let i=1; i<=10;i++){
     sum = sum+i;
     myArray.push(sum);
}
console.log(myArray);