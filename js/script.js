function sum(add=0){
    return function(num){
        return add+=num  
    }
}
const output = sum()
console.log(output(3));
console.log(output(3));
console.log(output(3));