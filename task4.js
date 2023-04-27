function printNumbers(a, b) {
    let i = a;
    let intervalID = setInterval(function () {
        console.log(i);
        if (i === b) {
            clearInterval(intervalID);
        }
        i++;
    }, 1000)
}

printNumbers();