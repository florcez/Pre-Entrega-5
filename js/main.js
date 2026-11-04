class Producto {
    constructor(nombre, precio, stock, marca){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = Number(stock),
        this.marca = marca
    };
    ver(){
        console.log("Nombre: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Stock: " + this.stock);
        console.log("Marca: " + this.marca);
    }

    vender(){
        let cantidad = prompt("¿Qué cantidad desea vender")
        while (Number(cantidad) > this.stock || Number(cantidad) < 1 || Number(cantidad) %1 != 0) {
            cantidad = prompt("Ingresar valor valido (stock: " + this.stock + ")")
        }
        this.stock -= Number(cantidad);

        console.log("Stock actual: " + this.stock);
    }

    aplicarDescuento(porcentaje){
        this.precio -= this.precio / 100 * porcentaje;

        console.log("Precio actual: " + this.precio);
    }
    subirPrecio(porcentaje){
        this.precio += this.precio / 100 * porcentaje;
        
        console.log("Precio actual: " + this.precio);
    }
    cambiarPrecio(){
        let nuevoPrecio
        do {
            nuevoPrecio= prompt("Nuevo precio: ")
        } while (Number(nuevoPrecio) < 0 || isNaN(Number(nuevoPrecio)))
        this.precio = nuevoPrecio;

        console.log("Precio actual: " + this.precio);
    }
}
function AgregarProducto(){
    const nombre = prompt("Nombre del producto: ")

    let precio 
    do {
        precio = prompt("Precio del producto: ")
    } while (Number(precio) < 1 || isNaN(Number(precio)))
    
    let stock
    do {
        stock = prompt("Stock del producto ")
    } while (Number(stock) < 1 || stock % 1 != 0)
    
    const marca = prompt("Marca del producto: ")
    
    return [nombre, precio, stock, marca]
}

function MostrarLista(productos){
    let n = 0
    for (const nombre of productos){
        n += 1
        console.log(n+ "- " + nombre.nombre)
    }
}

function ElegirProducto(productos){
    MostrarLista(productos)


    let x = prompt("Elegir producto")
    while (Number(x) > productos.length || Number(x) < 1 || Number(x) %1 != 0){
        x = prompt("Ingresar valor valido")
    }

    const producto1 = productos[x-1]
    return producto1
    
}

function Porcentaje(sb){
    let porcentaje
    do {
        porcentaje= prompt("¿Qué porcentaje del precio original desea " + sb + "?")
    } while (Number(porcentaje) < 1 || isNaN(Number(porcentaje)))

    return porcentaje
}

const productos = []
productos.push(new Producto("Azúcar", 1000, 24, "Ledesma"))
productos.push(new Producto("Olla", 36000, 3, "Hudson"))
productos.push(new Producto("Palitos", 3400, 24, "Bachilitos"))


let x
do{
    console.clear()
    console.log("1- Ver datos de un producto")
    console.log("2- Aplicar descuento")
    console.log("3- Subir precio")
    console.log("4- Cambiar precio")
    console.log("5- Vender producto")
    console.log("6- Agregar producto")
    console.log("0- Terminar programa")

    x = prompt()
    while (Number(x) > 6 && Number(x) > 0 && Number(x) %1 != 0) {
        x = prompt("Ingresar valor valido")
    }

    if (x === "1"){
        ElegirProducto(productos).ver()
    }
    if (x === "2"){
        ElegirProducto(productos).aplicarDescuento(Porcentaje("bajar"))
    }
    if (x === "3"){
        ElegirProducto(productos).subirPrecio(Porcentaje("subir"))
    }
    if (x === "4"){
        ElegirProducto(productos).cambiarPrecio()
    }
    if (x === "5"){
        ElegirProducto(productos).vender()
    }
    if (x === "6"){
        const producto_agregado = AgregarProducto()
        productos.push(new Producto(producto_agregado[0], producto_agregado[1], producto_agregado[2], producto_agregado[3]))
    }
    if (x !== "0"){
        prompt()
    }
    
} while (x !== "0")


console.log("Gracias por usar el programa")
