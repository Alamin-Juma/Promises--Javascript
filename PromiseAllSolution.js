const fetchData1 = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "data1"));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "data2"));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "data3"));

// const fetchSequential = async () => {
//   const data1 = await fetchData1();
//   const data2 = await fetchData2();
//   const data3 = await fetchData3();
//   return [data1, data2,+ data3];
// };

const fetchedPromiseAll = async () => {
    const data = Promise.all([fetchData1(), fetchData2(), fetchData3()])
    return data
}

// fetchSequential().then((data) => {
//   console.log(`this is sequential data fetch ${data}`); //this is sequential data fetch data1,data2,data3
// });

fetchedPromiseAll().then((data) => {
    console.log(`this is sequential data fetch ${data}`); //this is sequential data fetch data1,data2,data3
  });
