// // function demoAsync(num) {
// //   console.log(`The process has started`);
// //   setTimeout(() => console.log(num * 2), 5000);
// // }
// // demoAsync(20);

// function resolveAfter10Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//       console.log('resolved complete')
//     }, 1000);
//   });
// }

// // resolveAfter10Seconds()
// // (function() {
// //   var a = b = 5
// // }) ()
// // console.log(b) 5 because of var

// // async function getData() {
// //   return await Promise.resolve('Hello!');
// //   }

// //   const data = getData();
// //   console.log(data);

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     alert(i);
//   }, 1000 + i);
// }

// var num = 50;
// function testNum() {
//   var num = 100;
//   return num;
// }
// console.log(testNum(), num);  //100 50 

console.log(
  Promise.resolve(123))