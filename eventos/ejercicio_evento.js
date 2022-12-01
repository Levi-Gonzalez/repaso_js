
const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton_enviar")


formulario.addEventListener("submit", e=>
{
    e.preventDefault()

    const nombre = document.getElementById ("name")
    const apellido = document.getElementById ("lastname")
    console.log(`El nombre es: ${nombre.value}`);
    console.log(`El apellido es: ${apellido.value}`)

})

const boton2 = document.getElementById("boton2")
boton2.addEventListener("dblclick", function(){
    const parrafo = document.createElement ("p")
    parrafo.classList = ("parrafo")
    parrafo.innerText = "Doble Click del botón 2"
    document.body.appendChild(parrafo)
})

const boton3 = document.getElementById("boton3")
boton3.addEventListener("click", function(){
    const parrafo = document.createElement("p")
        parrafo.classList = ("parrafo")
        parrafo.innerText = "Hola, soy botón 3"
        document.body.appendChild(parrafo)
})

const boton4 = document.getElementById("boton4")
boton4.onmouseover = () => {                            // FORMA DE ESCRIBIR CON FUNCION FLECHA.
    const parrafo = document.createElement ("p")
    parrafo.classList = ("parrafo")
    parrafo.innerText = "Haz deslizado el boton 4"
    document.body.appendChild(parrafo)
}

// DARK MODE
const boton5 = document.querySelector("#boton5")
const body = document.querySelector("body")

boton5.addEventListener("click", e=>{
    
    body.classList.toggle("darkmode")

})


