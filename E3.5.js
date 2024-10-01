function SumFunction(num) {
    return function(twoNum) {
        return num + twoNum
    }
}

const sumFunc = SumFunction(47)
console.log(sumFunc(13))
