

function formatearNombre(Nombre)
{
    Nombre = (Nombre || "").trim();
    if (Nombre.length === 0) {
        document.getElementById("resultado1").innerText = "";
        return "";
    }

    const nombreNuevo = Nombre.charAt(0).toUpperCase() + Nombre.slice(1).toLowerCase();
    document.getElementById("resultado1").innerText = nombreNuevo;

    return nombreNuevo;
}

function contarLetras(Palabra){
    let Letras  = Palabra.trim().length

        document.getElementById("resultado2").innerText = Letras
        console.log(Letras)
        return Letras;
}

function maximo(a, b, c) {
    const na = Number(a);
    const nb = Number(b);
    const nc = Number(c);
    if (Number.isNaN(na) || Number.isNaN(nb) || Number.isNaN(nc)) {
        return NaN;
    }

    let max = na;
    if (nb > max) max = nb;
    if (nc > max) max = nc;
    document.getElementById("resultado3").innerText = max;
    return max;
}

function validarPassword(password) {

    let esValido = typeof password === 'string' && password.length >= 8 && /\d/.test(password);
    let textoResultado = esValido ? "Contraseña válida" : "Contraseña inválida";
    document.getElementById("resultado4").innerText = textoResultado;
    return esValido;
}
function sumarArrays(numeros)
{
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        var num = Number((numeros[i] || "").trim());
          suma += num;
        
    }
    document.getElementById('resultado5').innerText = suma;
    return suma;
}
function mayorNumero(numeros) {
    let max = -1000000; // Valor inicial muy bajo para asegurar que cualquier número válido lo supere

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        num = Number(num);

        if (!Number.isNaN(num) && num > max) {
            max = num;
        }
    }
    document.getElementById('resultado6').innerText = max;
    return max;
}

function filtrarPares(numeros) {
    let pares = [];
    for (let num of numeros) {
        let s = num;
        let n = Number(s);
        if (Number.isNaN(n)){
         if (n % 2 === 0) pares.push(n);   
        }
    }
        document.getElementById('resultado6').innerText = pares.join(', ');

    return pares;
}
