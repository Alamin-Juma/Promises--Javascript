//to iterate is to move over some data

//1 : while loop ....while loop and do while loop
//2: for loop
//3for...of
//4for...in

//while loop
//as long as the condition inside is satisfied, the code inside the block will execute
/*
while(condition) {
    //do some code
} */
let x = 0;
//when x = 10, the program will stop
while (x < 10) {
  //this code will execute as long as x is less than 10
  console.log(x);
  x++;
  if (x >= 10) {
    console.log("The program has been stopped");
  }
}

//do while loop
/*
do {
    // do some code here
} while(condition) {
    //as long as this condition is satisified
} */

// let actualPassword = "pa$$w0rd";
// let myInputPassord;
// do {
//     let passwordIputValue = prompt("Enter a password")
//     myInputPassord = passwordIputValue
// } while(myInputPassord != actualPassword)
// alert("correct password")    



//for loop 
const marks = [12, 34, 45, 56, 78, 79]
//index        0    1   2   3   4   5
console.log('The length of the array is ',marks.length)

//print the value of 56 
//marks[index]+
console.log(marks[0]) //12
console.log(marks[1]) //34
console.log(marks[2]) //
//if we had 1000 values in the arrays, wharts the solution. Thw solution is using a for loop to access them 
for(let index = 0;  index < marks.length; index++) {
    console.log(marks[index])
    if(index >= 5) {
        console.log('The program will break if index is greater or equal to 5')
    }
}

let age_in_2024 = [12, 13, 14, 15]
let age_in_2025 = []
for(let index = 0; index < age_in_2024.length; index++) {
    age_in_2025 = age_in_2024[index] + 1
    console.log('The ages in 1 year time will be',age_in_2025)
}