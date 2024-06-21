function demoAsync(num) {
  console.log(`The process has started`);
  setTimeout(() => console.log(num * 2), 5000);
}
demoAsync(20);

