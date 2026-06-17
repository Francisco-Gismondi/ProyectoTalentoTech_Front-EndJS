import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarDestacados = () =>{
    const contenedor = document.getElementById("contenedor-tarjetas");

    fetch("./data/productos.json")
    .then(response => response.json())
    .then((data) =>{

            const productosDestacados = data.slice(0, 3);

            productosDestacados.forEach((producto) => {

            const tarjeta = document.createElement("article");
            tarjeta.classList.add("card");
    
            const img = document.createElement("img");
            img.src = `./${producto.img}`;
            img.alt = producto.nombre;
    
            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const descripcion = document.createElement("p");
            descripcion.classList.add("descripcion");
            descripcion.textContent = producto.descripcion;

            const precio = document.createElement("h3");
            precio.textContent = `$${producto.precio}`;
    
            const boton = document.createElement("button");
            boton.classList.add("btn");
            boton.textContent = "Agregar al carrito";
    
            boton.addEventListener("click", () => {
              agregarAlCarrito(producto);
           });
    
            tarjeta.appendChild(img);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(boton);

            contenedor.appendChild(tarjeta);
          });
        })
}

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarDestacados();
});
