const user = { name: "Devendra", age: 34, city: "Mumbai" };
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 10; // No effect
console.log(obj); // { a: 1 }
//Freezes an object (no changes allowed).