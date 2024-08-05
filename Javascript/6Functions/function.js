//what is a function
//it basically does some functionality to your code
//to create a function use a function keyword

function name_of_function() {
    //write your code to run a function
}

function showMessage() {
    console.log("Hello World")
}

showMessage() //executing the function - hello world 
//lets call the function without the parenthesis
showMessage
//this will print the function istelf 
/*
ƒ showMessage() {
    console.log("Hello World")
} */


//an IMIF    - this is a function that is immedietly invoked without calling it later
// ( function nameFunction(){})()

// (function showMessageImmedietly() {
//     console.log('I was called immedetly')
// })()

let totol = 0 
let marksList = [45,67,84,24,78]

function totalMarks(marks_argument) {
    //an argument has to be used inside the function
    for(let index = 0;  index < marks_argument.length; index++) {
        totol = totol + marks_argument[index]
    }
    //return keyword is used to return values to that function
    return totol
}
//pass in the real data simulating the argument from the function
console.log(totalMarks(marksList)) //298