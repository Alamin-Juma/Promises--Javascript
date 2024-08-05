// + ... addition
//- ...subtraction
//*...multiplication
// / ...division
// % ...remindder
// ** ..exponent 5 power 2  = 25 

console.log(10+10) //20
console.log(23 -6) //17
console.log(20/5) //4
console.log(9%4) //1
console.log(30*3) //90
console.log(4**2) //16

//++ or --
//++ means add one to the number

//this is used in for loops
let number = 10 
console.log(number++) //10

//this is used when you need a salary increase 
let number1 = 8
console.log(++number1) //9

let num1 = 9
console.log(num1--) ///9 but the num1 has been descreased 


let num2 = 9
console.log(--num1) ///8 but the num1 has been descreased 


//comaprison operators 
//1: === strick equality 
//2: !== strick non-equality
//3: < less than
//4: > greater than 
//5: <= less than equal 
//6: >= greater than or equal 

let number3 = '12' //string
let number4 = 12 //number

console.log(number3 == number4) //true ...no type checking
console.log(number3 === number4) //false ...checks the type 
console.log(number3 !== number4) //true ... true bcz '12' is not equal 12 as a number
console.log(number3 != number4) //false...no type checking


let number5 = 20
let number6 = 34
console.log(number5 > number6) //false 

let myAge = 27

if(myAge > 30 && myAge < 37 ) {
    console.log('I am a millenial')
} else if(myAge > 28 && myAge < 30 ) {
    console.log('I am a genz')
} else {
    console.log('I am a minor')
}