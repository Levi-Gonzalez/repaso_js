//  Dos formas de recorrer y pintar en el DOM.
 /*
 1 Donde se pega (acceder por ID al contenedor padre)
 2 crear el array
 3 recorrer el array uno por uno
 4 crear elemento para saber de que manera se generara
 5 pegamos el elemento creado en el html y resultado será el array recorrido
 6 en el contenedor padre agregamos el elemento creado


 */


 const contenedor_familia = document.getElementById ("contenedor_familia")
 const grupo_familiar = ["Basti", "Flor", "Levi"]
 for (familia of grupo_familiar)
 {
     const li = document.createElement ("li")
     li.innerHTML = `<h2>QUE ONDAAAA?</h2>
                     <p>TODO BIEN?</p>`
     contenedor_familia.appendChild(li)
 } 

//  const contenedor_db = document.getElementById ("contenedor_db")
//  const personajes_db = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo"]
//  for (const guerreroZ of personajes_db) {
//      const li = document.createElement ("li")
//      li.innerHTML = guerreroZ
//      contenedor_db.appendChild(li)
//  }

//  const contenedor_marvel = document.getElementById ("contenedor_marvel")
//  const personajes_marvel = ["Capitan America", "Thor", "Ironman","Hulk"]
//  for (const vengador of personajes_marvel){

//      const li = document.createElement ("li")
//      li.innerHTML = vengador
//      contenedor_marvel.appendChild(li)

//  }

//  const contenedor_dc = document.getElementById ("contenedor_dc")
//  const ligaDeLaJusticia = ["Superman", "Batman", "Mujer maravilla" ,"Flash"]
//  for (const heroe of ligaDeLaJusticia)
//  {
//      const li = document.createElement ("li")
//      li.innerHTML = heroe
//      contenedor_dc.appendChild(li)
//  }







//      class Alumnos{
//          constructor(id, nombre, rol ){
//              this.id= id
//              this.nombre = nombre
//              this.rol = rol
//          }
//      }
    
//      const grupo_alumnos = []

//      function conjuntoAlumnos (){
        
//          let id =  parseInt(prompt("Ingrese id"))
//          let nombre = prompt ("Ingrese nombre")
//          let rol = prompt ("Ingrese rol")

//          const alumno_ingresado = new Alumnos (id, nombre, rol)
//          grupo_alumnos.push(alumno_ingresado)
//      }
    
//  const productos = [
//      {id:1, nombre:"mesa", precio:100},
//      {id:2, nombre:"silla", precio:200},
//      {id:3, nombre:"velador", precio:250},
//      {id:4, nombre:"mantel", precio:200},
//      {id:5, nombre:"tv", precio:1000}         
//  ]

//  const contenedor = document.getElementById("contenedor1")

//  for (const producto of productos){
    
//          const lista_productos = document.createElement("div")
//          lista_productos.className = "productos"
//          lista_productos.innerHTML = `<p>${producto.id}</p>
//                                       <p>${producto.nombre}</p>
//                                       <p>${producto.precio}</p>`
    
//          contenedor.appendChild(lista_productos)                                 
//          }
    

    
//      function agregar_producto  () {
//              let producto_usuario = document.getElementById ("producto")
//              const lista = document.getElementById("lista")
//              const li = document.createElement("li")
//              li.innerText = producto_usuario.value  
//          lista.appendChild(li)
    
//      }
    
    
//     const personajes_dbz = [
//     {nombre: "Goku", raza:"Saijayin", Poder: 10},
//     {nombre: "Vegeta", raza:"Saijayin", Poder: 10},
//     {nombre: "Piccolo", raza:"Namekiano", Poder: 8},
//     {nombre: "Gohan", raza:"Híbrido", Poder: 9},
//     {nombre: "Trunks", raza:"Híbrido", Poder: 8},
//     {nombre: "Goten", raza:"Híbrido", Poder: 7},
// ]

// const contenedorDBZ = document.getElementById ("DBZ")

// for (const guerrero_Z of personajes_dbz)
// {
//         const orden_guerreros = document.createElement ("div")
//         orden_guerreros.className = "guerrero_Z"
//             orden_guerreros.innerHTML = `
//                                         <p>${guerrero_Z.nombre}</p>
//                                         <p>${guerrero_Z.raza}</p>
//                                         <p>${guerrero_Z.Poder}</p>
//                                     `
//     contenedorDBZ.appendChild (orden_guerreros)
//     }
