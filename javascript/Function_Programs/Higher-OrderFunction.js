function one(a,b){
    return a+b;
}
function two(a,b,callback){
    return callback(a,b);
}
console.log(two(1,2,one))


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10