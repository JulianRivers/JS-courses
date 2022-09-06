const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);//crea un nuevo array

//si quiero concatenar los elementos al array 1
array1.push(...array2);
console.log(array1)