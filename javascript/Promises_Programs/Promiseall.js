const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1500));

Promise.all([p1, p2, p3]).then(results => console.log(results));
