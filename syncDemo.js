function demo1(num) {
  return num * 2;
}


function demo2(num) {
    if(isNaN(num)) {
        console.log(`num can not be a string`)
    } else if(num === undefined) {
        console.log(`num can not be empty`)
    }
    return num * 3;
}

console.log(demo2()) //num can not be empty
console.log(demo2('hbfhbvbhjx')) //num can not be a string

//read  for me a file called myfile4.txt