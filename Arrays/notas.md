# Notas

**forEach** no devuelve nada y es mutable
**map** retorna otro array trasnformado
los objetos son mutables
**reduce** retorna un elemento va recorriendoi y reduciendo en un accum
const reduce = array.reduce((accum, item) =>{
    //code
    return accum+algo;
})
**some** devuelve true si algun elemento cumple con una condicion
**every**devuelve true si TODOS los elementos cumplen con una condicion
**find**devuelve el primer elemento que cumpla con una condicion lo devuelve como T y no como [T]
**FindIndex**lo mismo que el find pero devuelve el index
**include**no se le pasa un arrow function sino solo ele elemeto a comparar en cuestion
**flat**aplanar un array una matriz se le pasa un parametro hasta q piso debe aplanar
