const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Ice Cream!")
        }, 1500)
    })
    return promise;
}

setTimeout(()=>{
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text =>{
        console.log(text);
        return fetchData();
    })
}, 2000)
console.log('coffee');
console.log('tea');

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Ice Cream!');
//     }, 1500);
//   });
//   return promise; //sync code, returns before setTimeOut
// };

// setTimeout(() => {
//   fetchData().then(text => {
//       console.log(text);
//       return fetchData();
//   }).then(text => {
//       console.log(text);
//       return fetchData();
//   })
// }, 2000);

// console.log("Hello");
// console.log("Sunshine");
