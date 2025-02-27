const obj5 = { name: "Devendra" };
Object.preventExtensions(obj5);
obj5.age = 34; // Not allowed
console.log(obj5); // { name: "Devendra" }
//Prevent Adding New Properties