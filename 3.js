function inArgument(number) {
    return function (number2) {
        return number + number2;
    };
}

const sum = inArgument(5)(10);
console.log(sum);
