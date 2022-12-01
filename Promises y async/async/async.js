
// function saludar() {
//     console.log("Hola");
// }

// setTimeout(saludar, 3000);
//  console.log("Hola, soy set time out.");

//STACK

/*
function primer_llamado (){
    segundo_llamado()
}
function segundo_llamado(){
    tercer_llamado()
}
function tercer_llamado(){
    console.log("3er función");
}

primer_llamado()
*/

/*
primero se ejecuta:  primer_llamado llama a, segundo_llamado llama a, tercer_llamado.
ninguna funcion esta resuelta porque llama a la otra funcion. La tercer funcion al llamar al console
sale de la pila, segundo sale de la pila y el primero sale de la pila finalizan y se limpia la pila.
*/

// let carrito = []

// function agregar_carrito (){

//     setTimeout (function (){
//         carrito.push ('producto "X"');
//     }, 2000);
     
// }
// agregar_carrito();
// console.log(carrito);

// Set Interval

// function color () {
//     let fondo = document.body;

//     if (fondo.style.backgroundColor == "black")
//     {
//         fondo.style.backgroundColor = "navy"
//     }
//     else {
//         fondo.style.backgroundColor = "black"
//     }
// }
 
// let frecuencia_color = setInterval(color, 500)

// function limpiar (){
//     clearInterval(frecuencia_color)
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click" , limpiar)

// let contador = 0

// const Interval = setInterval (() =>{
//     contador++
//     console.log(`contador: ${contador}`);

//     if (contador >= 10) {
//         clearInterval (Interval)
//         console.log(`finalizado`);
//     }
// },900)

// const promesa_ = () => {
//     return new Promise( (resolve, reject) => {
//         //cuerpo de la promesa
//     } )
// }

// console.log( promesa_() ) // Promise { <pending> }

