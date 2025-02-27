let numbers = [1, 3, 5, 8];

// Check if there's at least one even number
let hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // true (8 is even)



let nums = [1, 3, 5];

let result = nums.some(num => num % 2 === 0);
console.log(result); // false (no even numbers)
