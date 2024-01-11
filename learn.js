/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */
  /* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */

    var  firstName ='Anju';
    console.log(typeof firstName);

    var companyName ='Enhance';
    console.log(typeof companyName);

    var mobileNumber =909309903;
    console.log(typeof mobileNumber);

    var isAutomation = true;
    console.log(typeof isAutomation);

    var hasPlaywright ;
    console.log(typeof hasPlaywright);

    let lastName ='hello'
    
    checkVar();
    checklet();

    function checkVar(){
        var firstName ='hello'
        if(firstName =='anju'){
            console.log("firstname is correct");
        }else {
            console.log("firstname is incorrect");
        }
    }

    lastName ='anju'
    function checklet(){
         
        if(lastName =='anju'){
            console.log("lastname is correct");
        }else {
            console.log("lastname is incorrect");
        }
    }    