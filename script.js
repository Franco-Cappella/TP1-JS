

function formatearNombre(Nombre)
{
    let nombreNuevo = Nombre.replace(Nombre[0], Nombre[0].toUpperCase() + Nombre.slice(1).toLowerCase())
    document.getElementById("resultado1").innerText = nombreNuevo

    return nombreNuevo 
}

function contarLetras(Palabra){
    let Letras  = Palabra.trim().length

        document.getElementById("resultado2").innerText = Letras
        console.log(Letras)
        return Letras 

}