/*
Given a string  consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
//Example 1:
let s = "Hello World";
const myArray= s.split(" ");
const lastWord = myArray[1];
console.log("The last word is "+lastWord+" with length "+lastWord.length);

//Example 2: 
let s1 = "fly me to the moon";
let lastWord2;
const myArray2 =s1.split(" ");
for(let i=0;i<myArray2.length; i++){
  lastWord2 =myArray2.length-1;
}
console.log("The last word is "+lastWord2+" with length"+lastWord2.length);

//Example 3: 
let myArray3 =['listen', 'silent'];

let reversed ='';
let firstword =myArray3[0];
let lastword3 =myArray3[1]; 
let len1= firstword.length;
let chars =firstword.split("");


console.log(isAnagram(firstword));

function isAnagram(firstword){

    for(let index =chars.length-1;index>=0;index--){        
        reversed = reversed+chars[index];
    }
    if(reversed ==lastword3){
        console.log("Anagram -True");
    }
    else{
        console.log("false");
    }
    return reversed;
}


