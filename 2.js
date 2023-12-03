function isPrime(number) {
    if (number <= 1 || number > 1000) {
        return "Данные неверны";
    }

    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            return "Не простое число";
        }
    }

    return "Простое число";
}

const result = isPrime(45);
console.log(result);  // Выведет "Простое число"