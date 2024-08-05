//a variable is basically a container thats stores different types of information
//box - inside the box, sugar, toys, phones, name, 
//computers work in 0 and 1 s
//the memory location is where this conatiner is store
let myRoom ;
//my room is a box, lets go ahead and add some info 
//we use an equal sign to add information to a conatiner

myRoom = ['bed', 'chair', 'gas cooker', 'tv']
//see the info of your room 
console.log(myRoom)

//Diiferent kinds of data
// 1: String - words or text for example name, messages, sing or double quotes -  '' or ""

// 2: Number - Whole Number(Integers) or decimals(floats/doubles) 12 or 12.4

// 3: Boolean - True or false else.g isFemale = false 

// 4:Array - a list of items , a list of toys,  const toys = ['car','small gun', 'doll']

// 5: Object - A collection of related data else.g information about a  person , {}
// an object has a key and a value
// let myInfo = {
//     firstName: 'John',
//     secondName: 'Doe',
//     age: 32,
//     isFemale: false
// }

// 6: undefined: a variable that has been decalred but has not been given a value
let name;
console.log(name) //undefined

// 7: Null: a variable that has no value
let age = null
console.log(age)

//Number
let myEngMarks = 67
console.log(myEngMarks)

//float or decimal
let bankBakance = 23.56
console.log(bankBakance)

//strings
let fname = 'Faith'
console.log(fname)

//boolean true/false
let isPresident = false
console.log(isPresident)

//object
let myInfo = {
    firstName: 'John',
    secondName: 'Doe',
    age: 32,
    isFemale: false
}
console.log(myInfo) //{ firstName: 'John', secondName: 'Doe', age: 32, isFemale: false }


let marks = [34, 56, 67, 78]; // This is an array
console.log(marks) //[ 34, 56, 67, 78 ]

//government having a list of all ids and info aboutt each citizen
const ids = [
    {},{},{}
]


//diff betwe const and let
// a let can be re-assigned

let cat = 'Meow'
cat = 'Moo'
console.log(cat)


//a constant is something that cant be changed
//a const cant be reassigned 
// const secondName = 'Ali'
// secondName = 'Juma'
// console.log(secondName) //TypeError: Assignment to constant variable.


let my_marks = [34, 56, 67, 78]; // This is an array
console.log(my_marks[1])