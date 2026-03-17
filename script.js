const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}

const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]


const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]


const producto = {

nombre:"Notebook",

precio:1000

}

const usuarios2 = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]


function formatearNombre(Nombre)
{
    const inputEl = document.getElementById('nombre');
    Nombre = (Nombre || (inputEl ? inputEl.value : '')).trim();

    if (Nombre.length === 0) {
        if (inputEl) inputEl.focus();
        document.getElementById("resultado1").innerText = "Por favor ingresa un nombre.";
        return "";
    }

    // Capitalizar la primera letra de cada palabra, el resto en minúsculas
    const nombreNuevo = Nombre.split(/\s+/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

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
        if (!Number.isNaN(n)){
         if (n % 2 === 0) pares.push(n);   
        }
    }
        document.getElementById('resultado7').innerText = pares.join(', ');

    return pares;
}
function descripcionUsuario(usuario) {
    let msj = `"${usuario.nombre} tiene ${usuario.edad} años"`;
    document.getElementById("resultado8").innerText = msj;
}
function activarUsuario(usuario) {
    usuario.activo = true;
    document.getElementById("resultado9").innerText = `Usuario ${usuario.nombre} activado: ${usuario.activo}`;
}
function calcularTotal(productos) {
 
    let total = 0;
    for (let producto of productos) {
        total += producto.precio;
    }
    document.getElementById("resultado10").innerText = `Total: $${total}`;
    return total;
}
function mapearNombres(usuarios) {
    let nombres = usuarios.map(u => u.nombre);
    document.getElementById("resultado11").innerText = `Nombres: ${nombres.join(', ')}`;
    return nombres;
}
function filtrarAdultos(usuarios) {
    let adultos = usuarios.filter(u => u.edad >= 18);
    document.getElementById("resultado12").innerText = `Adultos: ${adultos.map(a => a.nombre).join(', ')}`;
    return adultos;
}
function reduceEdades(usuarios) {
    let totalEdad = usuarios.reduce((total, u) => total + u.edad, 0);
    document.getElementById("resultado13").innerText = `Suma de edades: ${totalEdad}`;
    return totalEdad;
}
function destructingProducto(producto) {   
    let nombre = producto.nombre;
    let precio = producto.precio;
    document.getElementById("resultado14").innerText = `Producto: ${nombre}, Precio: $${precio}`;
}
function copiarConSpread(producto) {
    let copia = {...producto};
    copia.stock = 50; 
    document.getElementById("resultado15").innerText = `Copia del producto: Nombre: ${copia.nombre}, Precio: $${copia.precio}, Stock: ${copia.stock}`;
    return copia;
}
function buscarProducto(productos, nombre) {
    let productoEncontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    let resultadoTexto = productoEncontrado ? `Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio}` : "Producto no encontrado";
    document.getElementById("resultado16").innerText = resultadoTexto;
    return productoEncontrado;
}
function productosMayoresA50(productos) {
    let productosFiltrados = productos.filter(p => p.precio > 50);
    document.getElementById("resultado17").innerText = `Productos con precio mayor a $50: ${productosFiltrados.map(p => p.nombre).join(', ')}`;
    return productosFiltrados;
}
function promedioNumeros(numeros) { 
    let suma = numeros.reduce((total, n) => total + Number(n), 0);
    let promedio = numeros.length > 0 ? suma / numeros.length : 0;
    document.getElementById("resultado18").innerText = `Promedio: ${promedio}`;
    return promedio;
}
function obtenerUsuarios(usuarios2){
    let usuariosMapeados = usuarios2.map(u => `ID: ${u.id}, Nombre: ${u.nombre}, Edad: ${u.edad}`);
    document.getElementById("resultado19").innerText = `Usuarios: ${usuariosMapeados.join(' | ')}`;
    return usuariosMapeados;
}
function obtenerUsuarioPorId(usuarios2, id) {
    let usuarioEncontrado = usuarios2.find(u => u.id === id);
    let resultadoTexto = usuarioEncontrado ? `Usuario encontrado: ID: ${usuarioEncontrado.id}, Nombre: ${usuarioEncontrado.nombre}, Edad: ${usuarioEncontrado.edad}` : "Usuario no encontrado";
    document.getElementById("resultado20").innerText = resultadoTexto;
    return usuarioEncontrado;
}
function obtenerUsuariosMayoresDeEdad(usuarios2) {
    let usuariosFiltrados = usuarios2.filter(u => u.edad > 18);
    let resultadoTexto = usuariosFiltrados.length > 0 ? `Usuarios mayores de edad: ${usuariosFiltrados.map(u => u.nombre).join(', ')}` : "No hay usuarios mayores de edad";
    document.getElementById("resultado21").innerText = resultadoTexto;
    return usuariosFiltrados;
}
function crearUsuario(nombre1, edad1) {
    let nuevoUsuario = { nombre: nombre1, edad: edad1 };
    usuarios2.push(nuevoUsuario);
    document.getElementById("resultado22").innerText = `Nuevo usuario creado: Nombre: ${nuevoUsuario.nombre}, Edad: ${nuevoUsuario.edad}`;
    return nuevoUsuario;
}                                                                               
