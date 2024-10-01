const inpNumber = prompt('Введите число')
const numb = +inpNumber

function mySecFunc(numb) {
    if (typeof numb == "number" && numb < 1000) {
        if (numb == 0) {
            console.log('Ноль не является простым числом!')
        } else if (numb == 1) {
            console.log('Единица не является простым числом!')
        } else if (numb % 2 == 0 || numb % 3 == 0) {
            console.log('Вы ввели составное число!')
        }
          else {
            console.log('Вы ввели простое число!')
        }
    } else {
        console.log('Вы ввели что-то не то!')
        }

}

mySecFunc(numb)
