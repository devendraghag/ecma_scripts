console.log(Object.is(10, 10)); // true
console.log(Object.is(NaN, NaN)); // true (Unlike === which returns false)
//Similar to ===, but handles special cases like NaN.