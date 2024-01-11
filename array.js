/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

//Example 1:
 // Input: nums = [0,1,0,3,12]
// Output: [1,3,12, 0,0]
// let nums = [0,1,0,3,12];
// console.log(nums.sort());
// for(let index=0;index<nums.length;index++){
//     if(nums[index]==0){
//         nums.shift();
//         nums.push(0);     
//     }
//     console.log("Iteration "+index+" "+nums);
// }


//2) Array intersection
//Example 1:
 console.log("Array intersection");
let nums1 = [1,2,1];
let nums2 = [1,2];
let temp=[];
let n1;
let n2;
let countnum1 =nums1.length;
let countnum2 =nums2.length;
if(countnum1>countnum2)
{
    n1=countnum1;
    n2=countnum2;
 } else{
    n1=countnum2;
    n2=countnum1;

 }
 for(let i=0;i<n1;i++){
    for(let j=0;j<n2;j++){
        if(nums1[i]==nums2[j]){
            temp.push(nums1[i]);
         }
    }
  }
console.log(temp);
console.log("check for any duplciate values in temp array");
let j=0;
temp.sort();
for(var i=0;i<=temp.length;i++){   
        if(temp[j]==temp[j+1]){
            temp.shift();            
         }
  }
 console.log(temp);
 
//3) Find the maximum and minimum:

let nums3 = [34, 7, 21, 89, 54, 10, 91, 67];

for(let i=0;i<nums3.length;i++){
    for(let j=0;j<nums3.length;j++){
        if(nums3[i]>nums2[j]){
            temp.push(nums1[i]);
         }
         else{
            (temp.push(num1[j]))
         }   
    }
  }


