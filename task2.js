let userNumber = prompt('Введите число от 0 до 1000');
if (userNumber === '') {
    console.log('Кажется, вы ничего не ввели');
} else

    if (userNumber > 1000 || userNumber < 0) {
        console.log('Данные неверны');
    }
    else
        if (isNaN(userNumber)) {
            console.log('Вы ввели не число');
        }
        else {
            function simpleNumber() {
                if (userNumber == 1 || userNumber == 0) {
                    console.log('Ваше число не относится ни к простым, ни к составным');
                    return;
                } else {
                    for (let denom = 2; denom < userNumber; denom++) {
                        if (userNumber % denom === 0) {
                            console.log('Ваше число не простое');
                            return;
                        }
                    }
                    console.log('Ваше число простое');
                    return;
                }
            }
            simpleNumber();
        }