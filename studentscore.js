/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/
let score = 90;
console.log(calculateGrade(score));

function calculateGrade(score){
  switch (score) {
        case 90:
            return "Grade A+";
        case 80:
            return "Grade A";
        case 70:
            return "Grade B+";
        case 60:
            return "Grade B";  
        default:
            return "Failed";  
  }
}

