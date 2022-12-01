// const boton = document.getElementById("boton");

// function saludar(){
//     console.log("Hola, esto es un botón");
// }

// // boton.addEventListener("mouseup", saludar)

// boton.addEventListener("mousedown", function (e)
// {
//     if (e.button== 0)
//     {
//         console.log ("click izquierdo")
//     }
//     else if (e.button == 2)
//     {
//         console.log("click derecho");
//     }
//     else{
//         // console.log("otro boton");
//     }
// })

// const boton2 = document.getElementById("boton2")

// boton2.addEventListener("mouseover", function(e){
    
//   console.log("Estas deslizando sobre el boton");
// })

// const img = document.getElementById ("img1")

// img.addEventListener("mouseover", function(){
//     img.src ="./assets/2.png"
// })
// img.addEventListener("mouseout", function (){
//     img.src ="./assets/1.png"

// })

document.addEventListener ("keydown" , function(e){
    console.log(e.key);
    if(e.key == "ArrowLeft"){
        document.body.style.backgroundColor="rgb(24, 17, 18)"
    }
    else if (e.key == "ArrowRight"){
        document.body.style.backgroundColor="green"
    }
        
})

// EVENTO CHANGE.

// const inputNombre = document.getElementById("nombre")

// inputNombre.addEventListener("input", function(e){
// console.log(e.target.value);

// })

// const inputNumero = document.getElementById("numero")

// inputNumero.addEventListener ("change", function (e) {
    
//     console.log(e.target.value);
    
//     if (e.target.value != "Levi")
//     {
//         const contenedor = document.getElementById("contenedor")
//         const mensaje = document.createElement("p")
//         mensaje.innerHTML = "<p>El usuario no es Levi</p>"
//         contenedor.appendChild(mensaje)
//     }
//     else 
//     {
//         const mensaje = document.createElement("h1")
//         mensaje.innerText = "Bienvenido, Levi!"
//         contenedor.appendChild(mensaje)

//     }

// })


// const formulario = document.getElementById ("formulario")
// const boton = document.getElementById ("boton")

// formulario.addEventListener("submit", function(e){
//     e.preventDefault()
//     const nombre = document.getElementById("name")
//     const pass = document.getElementById("pass")
//     console.log(`El nombde del usuario es: ${nombre.value}`);
//     console.log(`el password es ${pass.value}`);
// })





