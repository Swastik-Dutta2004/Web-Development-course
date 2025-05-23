// Input Numbers
let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));
// Random Number

let random = Math.random();

let addition = a+b ;
let Subtraction = a-b;
let Multiplication =a*b;
let Division= a/b;
let Exponentiation = a**b;

// Condition
if (random <0.1){
    console.log("Addition Calculation : " , a-b) ;
    console.log("Subtraction Calculation : " , a/b) ;
    console.log("Multiplication Calculation : " , a+b );
    console.log("Division Calculation : " ,a**b ) ;
}
else{ 
    console.log("Addition Calculation : " , a+b) ;
    console.log("Subtraction Calculation : " , a-b) ;
    console.log("Multiplication Calculation : " , a*b );
    console.log("Division Calculation : " ,a**b ) ;
}

