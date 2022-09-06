const square = num => num*num;

console.log(square(3));

let rand = Math.random()*10;

const tolimaPromise = () => {
    return new Promise((resolve, reject) =>{
        if(rand>5){
            console.log("tolima Pro");
        }else{
            console.log("tolima noob");
        }
    })
}
tolimaPromise()
.then(response=>console.log(response))
.catch(error => console.error(error))