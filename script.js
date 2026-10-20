/*CARRITO DE COMPRAS - VERSIÓN 3

/********Guille***********/
/*
1- Mostrar productos
2- Agregar producto
3- Agregar producto al inicio
4- Mostrar carrito
5- Modificar cantidad
*/
/************Ivo************/
/*
6- Eliminar producto
7- Quitar ultimo producto
8- Quitar primer producto
9- Buscar producto por nombre
10- Filtrar productos por precio
*/
/************Ale*************/
/*
11- Ordenar productos
12- Mostrar pagina del catalogo
13- Validar carrito //si esta vacio o no!!!
14- Calcular total
15- Salir
*/

const productos = [
  { id: 1, nombre: "Mouse", precio: 15000, stock: 10 },
  { id: 2, nombre: "Teclado", precio: 25000, stock: 8 },
  { id: 3, nombre: "Monitor", precio: 120000, stock: 5 },
  { id: 4, nombre: "Auriculares", precio: 18000, stock: 12 },
  { id: 5, nombre: "Notebook", precio: 750000, stock: 3 },
  { id: 6, nombre: "Webcam", precio: 32000, stock: 7 },
  { id: 7, nombre: "Mousepad XL", precio: 9500, stock: 15 },
  { id: 8, nombre: "Silla Gamer", precio: 210000, stock: 4 }
];

const carrito = [];

const eliminarProducto = () => {
  let idProductoEliminar = Number(
    prompt("Ingresar el id del producto que se quiere eliminar"),
  );
  if (carrito.some((p) => p.id === idProductoEliminar)) {
    let productoEliminado = carrito.splice(idProductoEliminar - 1, 1);
    alert(`Producto eliminado: ${productoEliminado[0].nombre}`);
  } else {
    alert(
      "El id ingresado no concuerda con ningun producto en el carrito",
    );
  }
};

const quitarUltimoProducto = () => {
  if (carrito.length === 0) {
    alert("No hay productos para eliminar en el carrito");
  } else {
    let productoEliminado = carrito.pop();
    alert(`El producto eliminado es: ${productoEliminado.nombre}`);
  }
};

const quitarPrimerProducto = () => {
  if (carrito.length === 0) {
    alert("No hay productos para eliminar en el carrito");
  } else {
    let productoEliminado = carrito.shift();
    alert(`El primer producto eliminado es: ${productoEliminado.nombre}`);
  }
};

const buscarProducto = () => {
  let nombre = prompt("Ingresar el nombre de un producto").toLowerCase().trim();
  let existe = productos.some((p) => p.nombre.toLowerCase() === nombre);

  if (existe === true) {
    let productoEncontrado = productos.find((p) => p.nombre.toLowerCase() === nombre);
    alert(`El producto es ${productoEncontrado.nombre}
      Id: ${productoEncontrado.id}
      Precio: ${productoEncontrado.precio}
      Stock: ${productoEncontrado.stock}`);
  } else {
    alert("El nombre ingresado no concuerda con ningún producto");
  }
};

const filtrarProductosPrecio = () => {
  let precio = Number(prompt("Mostrar productos hasta un precio de:"));
  let precioComprobacion = productos.some((p) => p.precio <= precio);
  if (precioComprobacion === true) {
    let productosFiltrados = productos.filter((p) => p.precio <= precio);
    productosFiltrados.forEach((p) => {
      alert(`Productos con precio menor o igual a ${precio}
      Nombre ${p.nombre}
      Id: ${p.id}
      Precio: ${p.precio}
      Stock: ${p.stock}`);
    });
  } else {
    alert("El precio ingresado es menor que el precio de cualquier producto");
  }
};

function salir(){
    bandera = false;
    alert("Saliste del del sistema")
}

let bandera = true;
while (bandera === true) {
  let input = Number(
    prompt(`Ingresar un número
6- Eliminar producto
7- Quitar ultimo producto
8- Quitar primer producto
9- Buscar producto por nombre
10- Filtrar productos por precio
11- Ordenar productos
12- Mostrar pagina del catalogo
13- Validar carrito //si esta vacio o no!!!
14- Calcular total
15- Salir`),
  );
  switch (input) {
    case 6:
      eliminarProducto();
      break;
    case 7:
      quitarUltimoProducto();
      break;
    case 8:
      quitarPrimerProducto();
      break;
    case 9:
      buscarProducto();
      break;
    case 10:
      filtrarProductosPrecio();
      break;
    case 11:
        ordenarProductos();
        break;
    case 12:
        mostrarPagina();
    case 13:
        validarCarrito();
    case 14:
        calcularTotal();
    case 15:
        salir();
    default:
      alert("Ingresar una opción válida");
  }
}
