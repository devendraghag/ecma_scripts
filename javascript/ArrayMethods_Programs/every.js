let numbers = [2, 4, 6, 8];

// Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true (since all numbers are even)



let nums = [2, 4, 7, 8];

let result = nums.every(num => num % 2 === 0);
console.log(result); // false (7 is not even)
