/*
//if statement is used for conditions

//there are 3 levels of if statements
//1: if statement - 
if(condition) {}

//2: if-else statement  - 
if("you work hard in life") {
    //put some code
    "you will succeed"
} else {
    //more code 
    "you will fail in life"
}

//if...else-if...else
*/

//example one if statement
let year = prompt("In which year did Nigeria gain Independece");
if (Number(year) === 1960) {
  alert("your right");
}

///for example the user enter a wrong year, we need to also alert
let ng_year = prompt("In which year did Nigeria gain Independece");
if (Number(ng_year) === 1960) {
  alert("your right");
} else {
  alert("your wrong");
}

//demonstaring multiple if...else
let username = "Faith"; //assingnemt
//name === "Faith" .....equality
const name = prompt("whats your name");
if (name === "Faith") {
  alert(`Woow ${name} is a doctor`);
} else if (name === "Haroon") {
  alert(`ooh no, he is a thief`);
} else if (name === "William") {
  alert(`He is a student`);
} else {
  alert(`Does not exist`);
}
