const numbers = [1, 2, 3, 1, 3, 3];

// const sum = numbers.reduce(
//     (suma, item) => suma + item 
// )
// console.log(sum)

const histograma = numbers.reduce((obj, num) => {
    obj[num] = !obj[num] ? 1 : obj[num] + 1;
    return obj;
}, {})
console.log(histograma);