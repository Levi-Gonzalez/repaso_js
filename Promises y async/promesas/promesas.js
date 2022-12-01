let carrito = []
                                //→ se le pasa la funcion ejecutadora
const agregar_carrito = new Promise (function (resolve, reject){
                                                //| →     |→ ESTAS CALLBACK SON LAS FUNCIONES CONSUMIDORAS QUE ESTAMOS USANDO (THEN Y CATCH)
    setTimeout(() => {
        /*
        dentro de esta funcion ejecutadora vamos a tener que hacer el código por si se cumple la promesa o el código por 
        si no se cumple esta promesa quiere decir por si falla (reject) la operación async o se cumple (resolve).
        */
        /*
        promesa: es un link, entre el ejecutor que es esta funcion que es la que va a producir todo este código
        es la que va hacer toda la operacion async. El resultado lo va a obtener el ejecutor y las funciones consumidoras 
        */
        const tiempo_carga = Math.random(); // tira numero entre 0.1/0.9
        if (tiempo_carga < 0.5 ) {

            carrito.push("producto x")        // acá podría llegar los datos de una api. Si los datos llegan bien, entonces sera consumido por el then y catch
            resolve(carrito)
        }
        else{
            reject("No se pudo cargar el producto!!")
        }
    }, 1000) ; 

})
/*
los valores que pasamos en funcion lo vamos a consumir en las funciones consumidoras.
¿Por qué? 
Porque el código generado, por las funciones ejecutadoras no se puede consumir del objeto promesa.
no se puede poner: agregar al carrito.abc() NO SE PUEDE! ❌❌❌
*/

agregar_carrito     
.then((carrito)=>{  /* el then estaría ejecutandose si la funcion async se haya cumplido exitosamente! (lo estamos forzando en este caso)
                       quiere decir que se haya ejecutado el resolve. Entonces se crea una funcion que la va a consumir, la 
                        que le va a llegar el valor que pasa RESOLVE. (carrito) */
    console.log("se cumple");               
    console.log(carrito);   //es para ver que es lo que tiene adentro.
})
.catch((error)=>{    
    console.log("no se cumple");        //El reject lo consume el catch
    console.log(error);
});