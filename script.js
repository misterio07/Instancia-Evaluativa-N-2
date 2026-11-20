
/*CARRITO DE COMPRAS - VERSIÓN 3

/********Guille***********/
/*
1- Mostrar productos --- modificar Stilos tarjeta yaestaaaaaaa
2- Agregar producto --- Guille
3- Agregar producto al inicio --NO VA
4- Mostrar carrito --------------iVO 
5- Modificar cantidad ----------Guille!!!! 
*/
/************Ivo************/
/*
6- Eliminar producto  ---- Guille boton para sumar y restar
7- Quitar ultimo producto----- NO VA
8- Quitar primer producto----- NO VA
9- Buscar producto por nombre ---iVO
10- Filtrar productos por precio --- iVO
*/
/************Ale*************/
/*
11- Ordenar productos ----No va-    ya estaaa
12- Mostrar pagina del catalogo---- No va
13- Validar carrito //si esta vacio o no!!! esta va con mostrar carrito
14- Calcular total --- va con mostrar carrito
15- Salir
*/



const productos = [
  { id: 1, nombre: "Mouse", precio: 15000, stock: 10, img: "https://imgs.search.brave.com/cicVwve4HqCqpwRvsJUmeqe6R4k30C5DF1LC5Vo9ThI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY5MTUyNi1NTEEx/MDQ3Nzk3OTY3NjJf/MDEyMDI2LUUud2Vi/cA" },
  { id: 2, nombre: "Teclado", precio: 25000, stock: 8, img: "https://imgs.search.brave.com/D4xOUwwVTpwNwq367ojk35izh_n4wzn_PGiuGRnCeQY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZvdG9zLXByZW1p/dW0vdGVjbGFkby1n/YW1pbmctbWVjYW5p/Y28tcmdiLW5lZ3Jv/Xzk3ODkxNC0zNDAz/Ni5qcGc_c2VtdD1h/aXNfdGVzdF9iJnc9/NzQwJnE9ODA" },
  { id: 3, nombre: "Monitor", precio: 120000, stock: 5, img: "https://imgs.search.brave.com/rMB1uMQ0R2sCqLP21KujDVA8Ooaq4pIyLFFzd7hGkgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzczOTYwMS1NTEEx/MTA3ODk0NTQwOTJf/MDUyMDI2LUUud2Vi/cA" },
  { id: 4, nombre: "Auriculares", precio: 18000, stock: 12, img: "https://imgs.search.brave.com/UzQraB3LkiwR_w15kTnPrY3zyuPQiAH15MZOje-yASs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Lm1heGltdXMuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI2LzA0L0F1cmlj/dWxhci1nYW1lci1S/ZWRyYWdvbi1aZXVz/LUg1MTAtUkdCLTEw/MjR4NTk3LmpwZw" },
  { id: 5, nombre: "Notebook", precio: 750000, stock: 3, img: "https://imgs.search.brave.com/9W33uG5OnBybDlziBS7SIdk6jZgiNzxOFvGa9YfQDzQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hci1t/ZWRpYS5ocHRpZW5k/YWVubGluZWEuY29t/L2NhdGFsb2cvcHJv/ZHVjdC9jYWNoZS8z/MTRkZWM4OWIzMjE5/OTQxNzA3YWQ2MmNj/YzkwZTU4NS9CL1Qv/QlQ0RjVMQV8xSW1h/Z2VuUHJpbmNpcGFs/Q29uVGV4dG9fYy5q/cGc" },
  { id: 6, nombre: "Webcam", precio: 32000, stock: 7, img: "https://imgs.search.brave.com/w1LUEjNUvIX3uzv4193FuwGCdXIDgVHD9Uod8zV3BEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF4K2xOeTQrckwu/anBn" },
  { id: 7, nombre: "Mousepad XL", precio: 9500, stock: 15, img: "https://imgs.search.brave.com/TKAd1ii_JAQq14oRPXg7ibwqSQbKuCa9U7micvQQEbA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYxMTY0OS1NTEE5/MTk0MTAxNTUyOF8w/OTIwMjUtVi53ZWJw" },
  { id: 8, nombre: "Silla Gamer", precio: 210000, stock: 4, img: "https://imgs.search.brave.com/LuQ0QVgraRYK88-7GI-WQxUqLbMybtzKEJbnwlrecGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWVnYXRvbmUubmV0/L2ltYWdlcy9BcnRp/Y3Vsb3MvMzQ5LzE4/My9USi96b29tL01L/VDAzVEpJVEItMS53/ZWJwP3ZlcnNpb249/MzU" }
];

const productosGuardados = JSON.parse(localStorage.getItem("productos"));

if (productosGuardados) {
  productos.splice(0, productos.length, ...productosGuardados);
}

let carrito = [{ id: 1, nombre: "Mouse", precio: 15000, cantidad: 10, img: "https://imgs.search.brave.com/cicVwve4HqCqpwRvsJUmeqe6R4k30C5DF1LC5Vo9ThI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY5MTUyNi1NTEEx/MDQ3Nzk3OTY3NjJf/MDEyMDI2LUUud2Vi/cA" },
{ id: 2, nombre: "Teclado", precio: 25000, cantidad: 8, img: "https://imgs.search.brave.com/D4xOUwwVTpwNwq367ojk35izh_n4wzn_PGiuGRnCeQY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZvdG9zLXByZW1p/dW0vdGVjbGFkby1n/YW1pbmctbWVjYW5p/Y28tcmdiLW5lZ3Jv/Xzk3ODkxNC0zNDAz/Ni5qcGc_c2VtdD1h/aXNfdGVzdF9iJnc9/NzQwJnE9ODA" },
{ id: 3, nombre: "Monitor", precio: 120000, cantidad: 5, img: "https://imgs.search.brave.com/rMB1uMQ0R2sCqLP21KujDVA8Ooaq4pIyLFFzd7hGkgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzczOTYwMS1NTEEx/MTA3ODk0NTQwOTJf/MDUyMDI2LUUud2Vi/cA" }];


carrito = JSON.parse(localStorage.getItem("carrito")) || [];



/*mostrar productos*/


const p = document.getElementById("mensaje-error")
function mostrarProductos(array) {
  actualizarContador()
  if (!p.classList.contains("hidden")) {
    p.classList.add("hidden")
    console.log("se hizo")
  }
  const producto = array.map((a) => `<div class="border bg-white rounded-xl p-3 flex flex-col h-[350px] w-[220px] justify-between shadow-md hover:scale-105 hover:transition-all duration-300">
      <div class="bg-white">
      <img src="${a.img}" 
      class="w-full h-[160px] object-contain rounded-lg">
      </div>
      <div class="flex flex-col gap-2 mt-3">
        <h3 class="font-bold text-lg">${a.nombre}</h3>
        <p class="text-gray-700">Precio: $${a.precio}</p>
        <p class="text-gray-600">Stock: ${a.stock}</p>
      </div>
      <div class="text-center mt-3">
        <button data-id=${a.id} class="agregar border rounded-xl px-4 py-1 bg-yellow-300 hover:bg-yellow-400">
          Agregar
        </button>
      </div>
    </div>`).join("");
  const element = document.getElementById("resultado");
  if (element) {
    element.innerHTML = "";
    element.innerHTML = producto;
    agregarProducto();
  }
};
/*mostrar carrito   falta validacion de carrito!!!!*/
const element = document.getElementById("resultado");
if (element) {
  mostrarProductos(productos)
  actualizarContador()
}
function mostrarCarrito(array) {
  if (!p.classList.contains("hidden")) {
    p.classList.add("hidden")
    console.log("se hizo")
  }
  const producto = array.map(a => `<div id=${a.id} class="border bg-white p-2 rounded-xl flex flex-col justify-between h-[350px] w-[220px] tarjeta hover:scale-105 hover:transition-all duration-300">
   <div class="bg-white">
      <img src="${a.img}" 
      class="w-full h-[160px] object-contain rounded-lg">
      </div>
      <div class="flex flex-col gap-2 mt-3">
        <h3 class="font-bold text-lg">${a.nombre}</h3>
        <p class="text-gray-700">Precio: $${a.precio}</p>
        <p class="text-gray-600">Stock: ${a.cantidad}</p>
      </div>
    <div class="flex items-center justify-center gap-3 mt-4">
 <div class="flex items-center justify-center gap-3">
  <div class="w-8 flex justify-center">
    ${a.cantidad > 1 ? `
      <button data-id="${a.id}" data-accion="restar"
      class="rounded-lg px-3 py-1 text-blue-700 text-2xl">
        -
      </button>
    ` : ""}
  </div>
  <button class="border rounded-xl p-1 eliminar bg-yellow-300 hover:bg-yellow-400">
    Eliminar
  </button>
  <div class="w-8 flex justify-center">
    ${productos.find(p => p.id == a.id).stock > a.cantidad ? `
      <button data-id="${a.id}" data-accion="sumar"
      class="rounded-lg px-3 py-1 text-blue-700 text-2xl">
        +
      </button>
    ` : ""}
  </div>
</div>
</div>
    </div>`).join("");/* Cantidad a comprar */

  const element = document.getElementById("carrito");
  if (element) {
    element.innerHTML = "";
    const newElement = document.createElement("div")
    newElement.className = "grid grid-cols-3 gap-4";
    newElement.innerHTML = producto;
    element.appendChild(newElement);
    botonesCantidad(newElement, array);
    botonEliminar()
    actualizarContador()
  }
}
function botonesCantidad(contenedor, array) {
  contenedor.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-accion]");

    if (!boton) return;

    const id = boton.dataset.id;
    const accion = boton.dataset.accion;

    const producto = array.find(p => p.id == id);

    if (!producto) return;

    const productoOriginal = productos.find(p => p.id == id);

    if (accion === "sumar" && productoOriginal.stock > 0) {
  producto.cantidad++;
  productoOriginal.stock--;
    }

    if (accion === "restar" && producto.cantidad > 1) {
     producto.cantidad--;
    productoOriginal.stock++;
    }

    localStorage.setItem("carrito", JSON.stringify(array));
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarCarrito(array);

  });

}
/*Agregar Producto al carrito  termina Guille*/
function agregarProducto() {

  const botones = document.querySelectorAll(".agregar");
  botones.forEach(b => {

    b.addEventListener("click", (e) => {

      const id = Number(e.currentTarget.dataset.id);

      const pro = productos.find(a => a.id === id);

      if (!pro || pro.stock <= 0) {
        alert("No hay stock disponible");
        return;
      }

      const indice = carrito.findIndex(p => p.id === id);

      if (indice !== -1) {

        carrito[indice].cantidad++;

      } else {

        const nuevoProducto = {
          id: pro.id,
          nombre: pro.nombre,
          precio: pro.precio,
          cantidad: 1,
          img: pro.img
        };

        carrito.push(nuevoProducto);
      }

      pro.stock--;
      
      localStorage.setItem("carrito", JSON.stringify(carrito));
      localStorage.setItem("productos", JSON.stringify(productos));

      actualizarContador();
      mostrarProductos(productos);

    });

  });
}
function actualizarContador() {

  const contador = document.querySelector(".contador");

  if (contador) {
    const total = carrito.reduce((acumulador, producto) => {
      return acumulador + producto.cantidad;
    }, 0);

    contador.textContent = total;
  }
}

/*modificar Guille sumar y restar producto */

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

  if (carrito.some(p => p.id == id)) {
    const producto = carrito.find(p => p.id == id);
    const productoOriginal = productos.find(p => p.id == id);

    productoOriginal.stock += producto.cantidad;

    const lugar = carrito.indexOf(producto);
    carrito.splice(lugar, 1);

    
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito(carrito);

  }
};




const form = document.getElementById("form-carrito")
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = e.target[0].value.toLowerCase().trim();
    e.target[0].value = "";
    buscarProducto(nombre, carrito)
  })
} else {
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
  } else if (existe === true && array === productos) {
    const productoEncontrado = [array.find((p) => p.nombre.toLowerCase() === nombre)];
    mostrarProductos(productoEncontrado)
  } else if (existe === false && array === carrito) {
    mostrarCarrito([]);
    p.textContent = "El nombre ingresado no concuerda con ningún producto";
    p.classList.remove("hidden");
  } else {
    mostrarProductos([]);
    p.textContent = "El nombre ingresado no concuerda con ningún producto";
    p.classList.remove("hidden");
  }
};

const select = document.getElementById("filtro-carrito")

if (select) {
  select.addEventListener("change", () => {
    if (select.value === "Todos") {
      mostrarCarrito(carrito);
    } else {
     
      actualizarProductos()
    }
  })
} else {
  const select = document.getElementById("filtro-inicio")
  select.addEventListener("change", () => {
    if (select.value === "Todos") {
      mostrarProductos(productos);
    } else {

      actualizarProductos()
    }
  })
}/* y el carrito del inicio tmb? */





//////////////////////////////////////////////ORDENAR PRODUCTOS
/*Guille completar y agregar */
function actualizarProductos() {

  const filtro = document.getElementById("filtro-inicio");
  const orden = document.getElementById("orden-productos");

  let productosFiltrados = [...productos];

  
  if (filtro.value !== "Todos") {

    const corte = filtro.value.indexOf("-");
    const min = Number(filtro.value.slice(0, corte));
    const max = Number(filtro.value.slice(corte + 1));

    productosFiltrados = productosFiltrados.filter((p) =>
      p.precio >= min && p.precio <= max
    );
  }

  if (orden.value === "nombre") {

    productosFiltrados.sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

  } else if (orden.value === "menor") {

    productosFiltrados.sort((a, b) => a.precio - b.precio);

  } else if (orden.value === "mayor") {

    productosFiltrados.sort((a, b) => b.precio - a.precio);

  }

  mostrarProductos(productosFiltrados);
}
const filtro = document.getElementById("filtro-inicio");
const orden = document.getElementById("orden-productos");

if (filtro) {
  filtro.addEventListener("change", actualizarProductos);
}

if (orden) {
  orden.addEventListener("change", actualizarProductos);
}


function calcularTotal(carrito) {

  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return 0;
  }

  let total = carrito.reduce(function (acumulador, producto) {
    return acumulador + (producto.precio * producto.cantidad);
  }, 0);

  alert("Total de la compra: $" + total.toFixed(2));

  return total;
}



mostrarCarrito(carrito)