function firstFunction(a) {
    function seconfFunction(b) {
        return a + b;
    }
    return seconfFunction;
}

// решение 1
let secondFunc = firstFunction(x);
let sum = secondFunc(y);
console.log(sum);

// решение 2
console.log(firstFunction(x)(y))

