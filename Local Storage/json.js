/*
const producto = {id: 3, nombre: "tomate"}

const json = JSON.stringify(producto)

console.log(producto);
console.log(json);

// console.log(typeof producto);
// console.log(typeof json);
 
localStorage.setItem( json)

*/

const array_user = []

function date (){

    const name = document.getElementById("nombre")
    const lastname = document.getElementById("apellido")
    const user = {
                    "name": name.value,
                    "lastname": lastname.value 
    }
    const transformar_json = JSON.stringify(user)
    array_user.push(transformar_json)
    localStorage.setItem("users" , array_user)


}
const button = document.getElementById("enviar")
button.addEventListener("click" , date)