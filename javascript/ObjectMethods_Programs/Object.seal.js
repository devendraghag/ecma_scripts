const obj2 = { a: 1 };
Object.seal(obj2);
obj2.a = 10; // Allowed
obj2.b = 20; // Not allowed
console.log(obj2); // { a: 10 }
//Allows modification of existing properties but prevents adding or deleting.