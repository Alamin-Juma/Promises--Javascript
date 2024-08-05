//anything that holds data is a data structure
// Objects are data structures thats a collection of key value pairs
// {} ... this is an object
//add some commas after every key-value pair
// { key: value, key: valuee, key: value }

let person = {};
let name = "Aladin";
console.log(typeof person); //object

//add some data to the object
//dot notation
//objectname.keyname = value
person.firtsName = "Aladin";
person.lastName = "Turing";
console.log(person); //{ firtsName: 'Aladin', lastName: 'Turing' }

//objects can contain all types of data
const myInfo = {
  name: "Aladin", //string
  age: 30, //number
  hobbies: ["reading", "gaming"], //array
  isMarried: false, //boolean
  meanGrade: function grades(meanGrade) {
    return "your mean grade is" + meanGrade;
  }, //function

  //we can also have objects inside objects
  address: {
    street: "1234 Main St",
    city: "New York",
  },
};

console.log(myInfo);

//lets create an array of objects
const cars = [
  {
    model: "civic",
    color: "black",
    year: 2020,
  },
  {
    model: "corolla",
    color: "white",
    year: 2019,
  },
  {
    model: "gtr",
    color: "blue",
    year: 2018,
  },
];

console.log(cars);
//lets access data of gtr
console.log(cars[2]) //{ model: 'gtr', color: 'blue', year: 2018 }
console.log(JSON.stringify(cars))

//return the modal of gtr
console.log(cars[2].model) //gtr