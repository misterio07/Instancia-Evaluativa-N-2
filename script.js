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
];
const carrito = [{ nombre: "Mouse", precio: 1000, cantidad: 1 }];
/*mostrar productos*/
function mostrarProductos(array) {
  const producto = array.map(a => `<div>Nombre: ${a.nombre} 
Precio: $${a.precio}
Stock: ${a.stock} </div>`).join("");

  const element = document.getElementById("resultado");

  element.innerHTML = producto;
  console.log(producto);
};
/*mostrar carrito */

function mostrarCarrito(array) {
  const producto = array.map(a => `<div>Nombre: ${a.nombre} 
Precio: $${a.precio}
Cantidad: ${a.cantidad} </div>`).join("");

  const element = document.getElementById("carrito");

  element.innerHTML = producto;
}




mostrarProductos(productos);
mostrarCarrito(carrito);

/*16/10
23/10/ was y were examen
30/10 simples pass
13/11 irregulares
20/11 leccion evaluativa verevos regulares y regulares afirmativa
27/11 notas cargadas 

 */