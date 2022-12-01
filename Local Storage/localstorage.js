
const boton = document.getElementById("boton")
boton.onclick = () => {
    localStorage.setItem("cliente_uno" , "Bastian")
    localStorage.setItem("cliente_dos", "Levi")
    localStorage.setItem("listaDeColores", ["Azul", "Rojo", "Verde"])

}

const usuario = localStorage.getItem("cliente_uno")
const usuario_2 = localStorage.getItem("cliente_dos")
const color = localStorage.getItem("listaDeColores")

// console.log(localStorage.length);
// console.log(typeof color.length);


//EJEMPLO 2.
localStorage.setItem("cliente_uno" , "Bastian")
localStorage.setItem("cliente_dos", "Levi")
localStorage.setItem("listaDeColores", ["Azul", "Rojo", "Verde"])


for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i)
    console.log(`la clave es: ${clave}`);
}

localStorage.removeItem("cliente_dos")
// localStorage.clear()