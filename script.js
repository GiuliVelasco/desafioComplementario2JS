let articulo
let cantidadComprada
let precioUnitario
let precioTotalPorArticulo
const IVA = 1.21
let continua = true
while (continua){
    let productoSeleccionado = parseInt(prompt("Ingrese el numero correspondiente al producto seleccionado: 1-judogis 2-cinturones 3-guantes 4-tibiales 5-vendas"))
    if (productoSeleccionado < 6 && productoSeleccionado > 0){
        continua = false
        articulo = productoSeleccionado
    }else{
        alert("Ingrese una opción válida")
    }
}
continua = true
while(continua){
    let cantidadRequerida = parseInt(prompt("Ingrese el número de unidades a comprar. Máximo por cliente 10 unidades por producto"))
    if (cantidadRequerida<11 && cantidadRequerida>0){
        continua = false
        cantidadComprada = cantidadRequerida
    }else{
        alert("Por favor ingrese un número válido. Hasta 10 unidades")
    }
}

console.log(articulo)
console.log(cantidadComprada)

function precioFinal (precio, cantidad){
    return precio*cantidad*IVA
}

switch(articulo){
    case 1 :
        precioUnitario = 40
    break
    case 2 :
        precioUnitario = 5
    break
    case 3 :
        precioUnitario = 12
    break
    case 4 :
        precioUnitario = 5
    break
    case 5 :
        precioUnitario = 3
    break
    default:
    break
}

precioTotalPorArticulo = precioFinal (precioUnitario, cantidadComprada)
console.log("El precio total con IVA es " + precioTotalPorArticulo)

class Producto {
    constructor(nombre, color, talle, precio) {
        this.nombre = nombre.toLowerCase()
        this.color = color
        this.talle = talle
        this.precio = parseFloat(precio)
    }
    esVisto(nombre){
        return this.nombre == nombre;
    }
}
const producto1 = new Producto("Judogi", "Blanco", "M/L", 40)
const producto2 = new Producto("Cinturon", "Negro", "Unico", 5)
const producto3 = new Producto("Guantes", "Rojos", "M/L", 12)
const producto4 = new Producto("Tibiales", "Blanco", "Unico", 5)
const producto5 = new Producto("Venda", "Blanco", "Unico", 3)

let productos = [producto1, producto2, producto3, producto4, producto5]
console.log(productos)

continua=true
while(continua){
    let entrada = prompt("Ingresar nombre de un producto para ver talle disponible (judogi, cinturon, guantes, tibiales, venda)")
    if(producto1.esVisto(entrada)){
        alert(entrada + " disponible en talle " + producto1.talle)
        continua = false
    } if(producto2.esVisto(entrada)){
        alert(entrada + " disponible en talle " + producto2.talle)
        continua = false
    } if(producto3.esVisto(entrada)) {
        alert(entrada + " disponible en talle " + producto3.talle)
        continua = false
    } if(producto4.esVisto(entrada)) {
        alert(entrada + " disponible en talle " + producto4.talle)
        continua = false
    } if(producto5.esVisto(entrada)) {
        alert(entrada + " disponible en talle " + producto5.talle)
        continua = false
    } else {
        alert("Ingrese una opción correcta")
    }
}
