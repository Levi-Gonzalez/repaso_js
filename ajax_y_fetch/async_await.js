const respuesta = async function (){
    let user = await fetch ("https://pokeapi.co/api/v2/berry/10")
    const datos =  await user.json()
    console.log(datos.size);
    task.save()
}
respuesta()
/*Para que funcione tiene que estar adentro de una funcion asyc*/