//The splice() method is used to add, remove, or replace elements in an array.
// array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex → Position where changes start.
// deleteCount → Number of elements to remove.
// item1, item2, ... → New elements to insert (optional).
// Returns an array of deleted elements.

//Example 1: Removing Elements
let colors = ["red", "blue", "green", "yellow"];
let removed = colors.splice(1, 2); // Removes 2 elements from index 1
console.log(colors); // ["red", "yellow"]
console.log(removed); // ["blue", "green"]


//Example 2: Adding Elements
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 0, "orange", "grapes"); // Inserts at index 1 ,, keep delete as 0 for adding
console.log(fruits);
// ["apple", "orange", "grapes", "banana", "mango"]

//Example 3: Replacing Elements
let numbers = [10, 20, 30, 40];
numbers.splice(1, 2, 25, 35); // Replaces 2 elements starting from index 1
console.log(numbers);
// [10, 25, 35, 40]

//Example 4: Removing All Elements After Index
let names = ["Dev", "Shruti", "Kala", "Prachi"];
names.splice(2); // Removes everything after index 2
console.log(names); // ["Dev", "Shruti"]
