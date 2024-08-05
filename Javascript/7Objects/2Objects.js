//access a object value 
//dot notation 
const name = {
    fname: 'Felsitus',
    sname: 'Chemtai',
    age: 34
}
// objectName.key - dot notation
console.log(name.fname)  //Felstus


//using index-string type
//objectName["key"]
console.log(name["fname"]) //Felistus


//access data using Object.keys 
//the will return an array of a given object string-keys
console.log(Object.keys(name)) //[ 'fname', 'sname', 'age' ]
const arrKeys = Object.keys(name) //fname
console.log(arrKeys[0]) //fname
console.log(typeof arrKeys[0]) //string
console.log(name[arrKeys[0]]) //Felistus


//the foutrh way is using destructuring  ES6 
// const { key } = ObjectName
const { fname, sname, age } = name
console.log(fname, sname, age) //Felsitus Chemtai 34


// the fifth ways  
const myInfo = {
    name: "Aladin", //string
    age: 30, //number
    hobbies: ["reading", "gaming"], //array
    isMarried: false, //boolean
    meanGrade: function grades(meanGrade) {
        return "your mean grade is" + meanGrade;
    },
    key: function(n) {
        return this[Object.keys(this)[n]]
    }
}

console.log(myInfo.key(0)) //Aladin