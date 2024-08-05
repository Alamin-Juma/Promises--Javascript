//examples of logical operators
//OR... ||..it only fails when both are true
//AND ...&&..it only executes wheen both are true. else if one is false, it will always be false
//NOT..! (return opposite value)
//Equality ... == or  ===  //name === "Faith" .....equality

console.log(!true) //false

let hour = 12
let minute = 32
if(hour == 12 && minute == 30) {
    alert('thime is 12:30')
} else {
    alert('Wrong time input')
}

if(hour == 10 || minute == 30) {
    alert('time is 12:30')
} else {
    alert('Wrong time input')
}