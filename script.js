//////////////////////////////////////////////ORDENAR PRODUCTOS

function ordenarProductos(productos) {

    let opcionOrden = Number(prompt(`
¿Cómo desea ordenar los productos?

1- Por nombre de A a Z
2- Por precio de menor a mayor
3- Por precio de mayor a menor
    `));

    let productosOrdenados = [...productos];

    if (opcionOrden === 1) {

        productosOrdenados.sort(function(a, b) {

            let nombreA = a.nombre.toLowerCase();
            let nombreB = b.nombre.toLowerCase();

            if (nombreA < nombreB) {
                return -1;
            }

            if (nombreA > nombreB) {
                return 1;
            }

            return 0;
        });

    } else if (opcionOrden === 2) {

        productosOrdenados.sort(function(a, b) {
            return a.precio - b.precio;
        });

    } else if (opcionOrden === 3) {

        productosOrdenados.sort(function(a, b) {
            return b.precio - a.precio;
        });

    } else {

        alert("Opción de orden incorrecta");
        return;
    }

 productosOrdenados.forEach(function(producto) {
    console.log(`${producto.id} - ${producto.nombre} - $${producto.precio}`);
});
}

/////////////////////////////////////////////////////////////////////////////MOSTRAR PAGINA 
// case 12:
//     mostrarPagina(productos);    
//     break;

function mostrarPagina(productos) {

    let pagina = Number(prompt("Ingrese el número de página:"));

    let productosPorPagina = 3;

    let inicio = (pagina - 1) * productosPorPagina;

    let fin = inicio + productosPorPagina;

    let productosPagina = productos.slice(inicio, fin);

    if (pagina <= 0) {
        alert("El número de página no es válido");
        return;
    }

    if (productosPagina.length === 0) {
        alert("Esa página no tiene productos");
        return;
    }

    console.log("Página " + pagina);

    productosPagina.forEach(function(producto) {

        console.log(
            producto.id +
            " - " +
            producto.nombre +
            " - $" +
            producto.precio
        );

    });
}


////////////////////////////////////////////////////////////////////////////////VALIDAR CARRITO


// case 13:
//     validarCarrito(carrito);
//     break;

function validarCarrito(carrito) {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return false;
    }

    let hayProductoInvalido = carrito.some(function(producto) {
        return producto.precio <= 0 || producto.cantidad <= 0;
    });

    if (hayProductoInvalido) {
        alert("El carrito contiene un producto inválido");
        return false;
    }

    let todosValidos = carrito.every(function(producto) {
        return producto.precio > 0 && producto.cantidad > 0;
    });

    if (todosValidos) {
        alert("El carrito es válido");
        return true;
    }
}

/////////////////////////////////////////////////////////////////////////CALCULAR TOTAL

function calcularTotal(carrito) {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return 0;
    }

    let total = carrito.reduce(function(acumulador, producto) {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);

    alert("Total de la compra: $" + total.toFixed(2));

    return total;
}