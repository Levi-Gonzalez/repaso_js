// fetch("https://jsonplaceholder.typicode.com/posts" )
// .then (resp => resp.json())
// .then (data => console.log(data))





// fetch("https://pokeapi.co/api/v2/berry/10")
// .then (response => response.json())
// .then (data => {
    
    // console.log(data);
    // const contenedorClima = document.getElementById("clima");
    // const parrafo = document.createElement ("h2");
    // parrafo.innerHTML = `<h2>El clima es ${data.weather[0].description}</h2>
    //                     <h2>La temperatura actual es es ${data.main.temp}</h2>
    //                     <h2>La temperatura maxima es ${data.main.temp_max}</h2>   
    //                     <h2>La temperatura minima es ${data.main.temp_min}</h2>   
    //                     `;
    // contenedorClima.appendChild(parrafo)

    // console.log("Ciudad" , data);
    // console.log("Clima:" , data.weather[0].description);    
    // console.log("La temperatura maxima es ", data.main.temp_max);
    // console.log("La temperatura minima es ", data.main.temp_min);
// });

const container = document.getElementById("clima")
const li = document.createElement("li")
fetch ("/ruta_relativa.json")
.then(response => response.json())
.then (data =>{

    container.innerHTML = `<p>${data}</p>`
    console.log(data);
    container.appendChild(li)
});