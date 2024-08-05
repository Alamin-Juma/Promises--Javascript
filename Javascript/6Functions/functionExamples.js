//lets create a function  that calculates the area of a circle 
// pie * radius * radius 
function calculateCircleArea(radius) {
    ///a function can conatin arguments - some date to be passed on later on 
    //when the function is being executed
    //whats the argument on this function - radius that we will require later on when 
    //we want to calculate a certain radius of a circle
    let area = 0
    //we can use a constant PI to calculate the area of a circle
    area = Math.PI * radius * radius
    //a return keyword is used to return back the value of the function
    return area
}
console.log(calculateCircleArea(22) ) //1520.5308443374597
console.log(calculateCircleArea(7)) //153.93804002589985

