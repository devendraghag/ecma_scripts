const user = { name: "Devendra", age: 34, city: "Mumbai" };
const user2 = { country: "India" };
const mergedUser = Object.assign({}, user, user2);
console.log(mergedUser);
// Output: { name: "Devendra", age: 34, city: "Mumbai", country: "India" }
//Merges objects into a new object.