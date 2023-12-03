function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] === 0) {
                zeroCount++;
            } else if (arr[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
}

// Пример вызова функции
const array = [1, 2, 3, 0, 'a', null, NaN, 5, 6, 7, 8, 9, '0', true, false];
countEvenOdd(array);