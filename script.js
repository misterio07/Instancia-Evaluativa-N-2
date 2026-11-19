
/*CARRITO DE COMPRAS - VERSIÓN 3

/********Guille***********/
/*
1- Mostrar productos --- modificar Stilos tarjeta
2- Agregar producto --- Guille
3- Agregar producto al inicio --NO VA
4- Mostrar carrito --------------iVO 
5- Modificar cantidad ----------Guille!!!! 
*/
/************Ivo************/
/*
6- Eliminar producto  ---- iVO boton para sumar y restar
7- Quitar ultimo producto----- NO VA
8- Quitar primer producto----- NO VA
9- Buscar producto por nombre ---iVO
10- Filtrar productos por precio --- iVO
*/
/************Ale*************/
/*
11- Ordenar productos ----No va
12- Mostrar pagina del catalogo---- No va
13- Validar carrito //si esta vacio o no!!! esta va con mostrar carrito
14- Calcular total --- va con mostrar carrito
15- Salir
*/



const productos = [
  { id: 1, nombre: "Mouse", precio: 15000, stock: 10,img:"https://imgs.search.brave.com/cicVwve4HqCqpwRvsJUmeqe6R4k30C5DF1LC5Vo9ThI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY5MTUyNi1NTEEx/MDQ3Nzk3OTY3NjJf/MDEyMDI2LUUud2Vi/cA" },
  { id: 2, nombre: "Teclado", precio: 25000, stock: 8,img:"https://imgs.search.brave.com/D4xOUwwVTpwNwq367ojk35izh_n4wzn_PGiuGRnCeQY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZvdG9zLXByZW1p/dW0vdGVjbGFkby1n/YW1pbmctbWVjYW5p/Y28tcmdiLW5lZ3Jv/Xzk3ODkxNC0zNDAz/Ni5qcGc_c2VtdD1h/aXNfdGVzdF9iJnc9/NzQwJnE9ODA" },
  { id: 3, nombre: "Monitor", precio: 120000, stock: 5,img:"https://imgs.search.brave.com/rMB1uMQ0R2sCqLP21KujDVA8Ooaq4pIyLFFzd7hGkgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzczOTYwMS1NTEEx/MTA3ODk0NTQwOTJf/MDUyMDI2LUUud2Vi/cA" },
  { id: 4, nombre: "Auriculares", precio: 18000, stock: 12,img:"https://imgs.search.brave.com/UzQraB3LkiwR_w15kTnPrY3zyuPQiAH15MZOje-yASs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Lm1heGltdXMuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI2LzA0L0F1cmlj/dWxhci1nYW1lci1S/ZWRyYWdvbi1aZXVz/LUg1MTAtUkdCLTEw/MjR4NTk3LmpwZw" },
  { id: 5, nombre: "Notebook", precio: 750000, stock: 3,img:"https://imgs.search.brave.com/9W33uG5OnBybDlziBS7SIdk6jZgiNzxOFvGa9YfQDzQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hci1t/ZWRpYS5ocHRpZW5k/YWVubGluZWEuY29t/L2NhdGFsb2cvcHJv/ZHVjdC9jYWNoZS8z/MTRkZWM4OWIzMjE5/OTQxNzA3YWQ2MmNj/YzkwZTU4NS9CL1Qv/QlQ0RjVMQV8xSW1h/Z2VuUHJpbmNpcGFs/Q29uVGV4dG9fYy5q/cGc" },
  { id: 6, nombre: "Webcam", precio: 32000, stock: 7,img:"https://imgs.search.brave.com/w1LUEjNUvIX3uzv4193FuwGCdXIDgVHD9Uod8zV3BEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF4K2xOeTQrckwu/anBn" },
  { id: 7, nombre: "Mousepad XL", precio: 9500, stock: 15,img:"https://imgs.search.brave.com/TKAd1ii_JAQq14oRPXg7ibwqSQbKuCa9U7micvQQEbA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYxMTY0OS1NTEE5/MTk0MTAxNTUyOF8w/OTIwMjUtVi53ZWJw" },
  { id: 8, nombre: "Silla Gamer", precio: 210000, stock: 4,img:"https://imgs.search.brave.com/LuQ0QVgraRYK88-7GI-WQxUqLbMybtzKEJbnwlrecGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWVnYXRvbmUubmV0/L2ltYWdlcy9BcnRp/Y3Vsb3MvMzQ5LzE4/My9USi96b29tL01L/VDAzVEpJVEItMS53/ZWJwP3ZlcnNpb249/MzU" }
];


const carrito = [{ id: 1, nombre: "Mouse", precio: 15000, stock: 10,img:"https://imgs.search.brave.com/cicVwve4HqCqpwRvsJUmeqe6R4k30C5DF1LC5Vo9ThI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY5MTUyNi1NTEEx/MDQ3Nzk3OTY3NjJf/MDEyMDI2LUUud2Vi/cA" },
  { id: 2, nombre: "Teclado", precio: 25000, stock: 8,img:"https://imgs.search.brave.com/D4xOUwwVTpwNwq367ojk35izh_n4wzn_PGiuGRnCeQY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZvdG9zLXByZW1p/dW0vdGVjbGFkby1n/YW1pbmctbWVjYW5p/Y28tcmdiLW5lZ3Jv/Xzk3ODkxNC0zNDAz/Ni5qcGc_c2VtdD1h/aXNfdGVzdF9iJnc9/NzQwJnE9ODA" },
  { id: 3, nombre: "Monitor", precio: 120000, stock: 5,img:"https://imgs.search.brave.com/rMB1uMQ0R2sCqLP21KujDVA8Ooaq4pIyLFFzd7hGkgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzczOTYwMS1NTEEx/MTA3ODk0NTQwOTJf/MDUyMDI2LUUud2Vi/cA" }];
/*mostrar productos*/
const p = document.getElementById("mensaje-error")
function mostrarProductos(array) {
  if(!p.classList.contains("hidden")){
    p.classList.add("hidden")
    console.log("se hizo")
  }
  const producto = array.map((a) => `<div class="border p-2 rounded-xl p-1 flex flex-col justify-between h-full"><img src=${a.img} class="object-cover">
    Nombre: ${a.nombre} <br>
Precio: $${a.precio}<br>
Stock: ${a.stock} 
<div class="text-center mt-4">
<botton class="self-center border rounded-xl  pr-2 pl-2 pb-1 bg-yellow-300 hover:bg-yellow-500" >Agregar</button>
</div>
</div>`).join("");

  const element = document.getElementById("resultado");
  if(element){element.innerHTML = "";
  element.innerHTML = producto; }
};

/*mostrar carrito   falta validacion de carrito!!!!*/ 
const element = document.getElementById("resultado");
if(element){
  mostrarProductos(productos)
}

function mostrarCarrito(array) {
  if(!p.classList.contains("hidden")){
    p.classList.add("hidden")
    console.log("se hizo")
  }
  const producto = array.map(a => `<div id=${a.id} class="border p-2 rounded-xl flex flex-col justify-between h-full tarjeta"><img src=${a.img} class="object-cover">
    Nombre: ${a.nombre} <br>
Precio: $${a.precio}<br>
Cantidad: ${a.stock} 
<div class="text-center mt-4">
<button class="self-center border rounded-xl  p-1 eliminar" >Eliminar</button>
</div>
</div>`).join("");/* Cantidad a comprar */
  
  const element = document.getElementById("carrito");
  if(element){
  element.innerHTML = "";
  const newElement = document.createElement("div")
  newElement.className="grid grid-cols-3 gap-4";
  newElement.innerHTML = producto;
  element.appendChild(newElement);
  botonEliminar()
  }
}

/*Agregar Producto al carrito  termina Guille*/
function agregarProducto(id) {
  const pro = productos.find(a=>  a.id === id)
  
  const indice = carrito.findIndex(p => p.id === pro.id);

  if (indice !== -1) {
    carrito[indice].cantidad++;

    if (posicion === "inicio" && indice !== 0) {
      const productoMovido = carrito.splice(indice, 1)[0];
      carrito.unshift(productoMovido);
    }
  } else {
    const nuevoProducto = {
      id: pro.id,
      nombre: pro.nombre,
      precio: pro.precio,
      cantidad: 1,
      img :pro.img
    };

    if (posicion === "inicio") {
      carrito.unshift(nuevoProducto);
    } else {
      carrito.push(nuevoProducto);
    }
  }
 /* mostrarCarrito(carrito)*/
  
}

/*modificar Ivo sumar y restar producto */
 function modificarCantidad(nombre, nuevaCantidad) {
  const producto = carrito.find(p => p.nombre === nombre);

  if (producto) {
    if (nuevaCantidad > 0) {
      producto.cantidad = nuevaCantidad;
    } else {
      console.log("La cantidad debe ser mayor a 0");
    }
  } else {
    console.log("Producto no encontrado en el carrito");
  }
  mostrarCarrito(carrito);
} 


/* 
mostrarProductos(productos);
mostrarCarrito(carrito);
 
 */
const botonEliminar = () => {
  const botones = document.querySelectorAll(".eliminar");
  botones.forEach((b) => {
    b.addEventListener("click", (e) => {
      const tarjeta = e.target.closest(".tarjeta");
      eliminarProducto(tarjeta.id)
      console.log(tarjeta.id)
    })
  })
}

const eliminarProducto = (id) => {
  let idProductoEliminar = id
  if (carrito.some((p) => p.id == idProductoEliminar)) {
    const producto = carrito.find(p => p.id == idProductoEliminar)
    const lugar = carrito.indexOf(producto)
    carrito.splice(lugar, 1);
    mostrarCarrito(carrito)
  }
};

/* const quitarUltimoProducto = () => {
  if (carrito.length === 0) {
    alert("No hay productos para eliminar en el carrito");
  } else {
    let productoEliminado = carrito.pop();
    alert(`El producto eliminado es: ${productoEliminado.nombre}`);
  }
}; */

/* const quitarPrimerProducto = () => {
  if (carrito.length === 0) {
    alert("No hay productos para eliminar en el carrito");
  } else {
    let productoEliminado = carrito.shift();
    alert(`El primer producto eliminado es: ${productoEliminado.nombre}`);
  }
}; */


const form = document.getElementById("form-carrito")
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = e.target[0].value.toLowerCase().trim();
    e.target[0].value = "";
    buscarProducto(nombre, carrito)
  })  
}else{
  const form = document.getElementById("form-inicio")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = e.target[0].value.toLowerCase().trim();
    e.target[0].value = "";
    buscarProducto(nombre, productos)
  }) 
}
  
const buscarProducto = (nombre, array) => {
  let existe = array.some((p) => p.nombre.toLowerCase() === nombre);

  if (existe === true && array === carrito) {
    const productoEncontrado = [array.find((p) => p.nombre.toLowerCase() === nombre)];
    mostrarCarrito(productoEncontrado)
  }else if(existe === true && array === productos){
    const productoEncontrado = [array.find((p) => p.nombre.toLowerCase() === nombre)];
    mostrarProductos(productoEncontrado)
  } else if(existe === false && array === carrito){
    mostrarCarrito([]);
    p.textContent = "El nombre ingresado no concuerda con ningún producto";
    p.classList.remove("hidden");
  }else{
    mostrarProductos([]);
    p.textContent = "El nombre ingresado no concuerda con ningún producto";
    p.classList.remove("hidden");
  }
};

const select = document.getElementById("filtro-carrito")

if(select){
  select.addEventListener("change", () => {
    if(select.value === "Todos"){
      mostrarCarrito(carrito);
    }else{
      const corte = select.value.indexOf("-");
      const min = select.value.slice(0,corte)
      const max = select.value.slice(corte+1,select.value.length)
      filtrarProductosPrecio(min, max, carrito)
    }
  })
}else{
  const select = document.getElementById("filtro-inicio")
  select.addEventListener("change", () => {
    if(select.value === "Todos"){
      mostrarProductos(productos);
    }else{
      const corte = select.value.indexOf("-");
      const min = select.value.slice(0,corte)
      const max = select.value.slice(corte+1,select.value.length)
      filtrarProductosPrecio(min, max, productos)
    }
  })
}/* y el carrito del inicio tmb? */

const filtrarProductosPrecio = (min, max, array) => {
  const productosFiltrados = array.filter((p) => p.precio <= max && p.precio >= min);
  console.log(select)
  if(select !== null){
    mostrarCarrito(productosFiltrados)
  }else{
    mostrarProductos(productosFiltrados)
  } 
};

/* function salir(){
    bandera = false;
    alert("Saliste del del sistema")
} */
//////////////////////////////////////////////ORDENAR PRODUCTOS
/*Guille completar y agregar */
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
/* 
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
 */

////////////////////////////////////////////////////////////////////////////////VALIDAR CARRITO


// case 13:
//     validarCarrito(carrito);
//     break;
/* 
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
 */
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
/* let bandera = false;
while (bandera === true) {
  let input = Number(
    prompt(`Ingresar un número
1- Mostrar Productos 
2- Agregar Prodcuto
3- Agregar Producto al inicio
4- Mostrar Carrito
5- Modificar Carrito
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
    case 1:
      mostrarProductos(productos);
      break;
    case 2:
       do {
        let productoEncontrado = prompt("ingresa el nombre del producto");
        flag = true
      const comparar = productos.some(a=> a.nombre === productoEncontrado)
      if(comparar){
        agregarProducto(productoEncontrado, "final");
        flag=false
      }else {
        alert("el nombre del producto no existe")
      }
      } while (flag);
      
       
      break;
    case 3:
      do {
         let productoEncontrado = prompt("ingresa el nombre del producto");
        flag=true
      const comparar = productos.some(a=> a.nombre === productoEncontrado)
        if(comparar){
        agregarProducto(productoEncontrado, "inicio");
        flag=false
      }else {
        alert("el nombre del producto no existe")
      }
        
      } while (flag);
     
      break;
    case 4:
      mostrarCarrito(carrito);
      break;
    case 5:
      do {
          const name= prompt("Ingresa el nombre del producto a modificar");
          const comparar = carrito.some(a=> a.nombre === name);
          flag=true
          if(comparar){
            const cantidad= Number(prompt("ingresa la cantidad deseada"));
             modificarCantidad(name,cantidad);
             flag=false
          }
     
      } while (flag);
      
      break;
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
} */
mostrarCarrito(carrito)