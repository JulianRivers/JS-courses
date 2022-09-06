let array = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
];
function solution(array) {
    return array.map(product => ({...product, taxes : Math.trunc(product.price * .19)}));
}; 
console.log(solution(array));