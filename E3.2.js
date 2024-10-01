function myFirstFunc() {
    const array = ["str", null, 0, 1, 2, 4, 5, 0]

    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0) {
                zero += 1;
            } else if (array[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('Четных элементов в массиве: ', even)
    console.log('Нечетных элементов в массиве: ', odd)
    console.log('Нулей в массиве: ', zero)
}

myFirstFunc()