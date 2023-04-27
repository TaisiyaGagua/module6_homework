let array = [];

let evenNumber = 0;
let oddNumber = 0;
let zeroElement = 0;

if (array.length === 0) {
    console.log('массив пустой')
}

function evenOdd(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && isNaN(array[i]) !== NaN) {
            if (array[i] !== 0) {
                if (array[i] % 2 === 0) {
                    evenNumber++;
                } else {
                    oddNumber++;
                }
            }
            else {
                zeroElement++;
            }
        }
        if (array[i] === null) {
            zeroElement++;
        }
    }
    console.log("Количество элементов, равных 0: " + zeroElement);
    console.log("Количество четных элементов: " + evenNumber);
    console.log("Количество нечетных: " + oddNumber);
}

evenOdd(array);