# PEN² 🐧

## 📝 Propósito del Proyecto
**PEN²** es una plataforma web desarrollada como parte del Proyecto del curso *Front - End JS* de *Talento* ***Tech*** , enfocada en ofrecer soluciones tecnológicas y visualización de servicios de infraestructura. El sitio busca combinar una estética moderna con una estructura semántica sólida y un diseño totalmente adaptable.

## 🚀 Demo en Vivo
Puedes ver la plataforma desplegada y funcionando en GitHub Pages a través del siguiente enlace:
👉 [Ver Demo en Vivo](https://francisco-gismondi.github.io/ProyectoTalentoTech_Front-EndJS/)

## ✨ Características y Requisitos Implementados

### 1. Estructura Semántica HTML5
El proyecto sigue una arquitectura organizada para mejorar el SEO y la accesibilidad, utilizando:
*   `<header>` y `<nav>` para la identidad y navegación.
*   `<main>` como contenedor principal de contenido.
*   `<section>` para dividir áreas de Productos, Reseñas y Contacto.
*   `<footer>` para información de cierre y redes.

### 2. Formulario de Contacto
Se ha implementado un formulario funcional en la sección de contacto que incluye:
*   Campos: Nombre, Correo Electrónico y Mensaje.
*   **Integración:** El envío de datos se gestiona a través de **Formspree**.

### 3. Estilos y Diseño (CSS3)
*   **Google Fonts:** Implementación de fuentes modernas para una lectura técnica clara.
*   **Backgrounds:** Uso de propiedades de fondo con los colores institucionales (Azul profundo y acentos rojos).
*   **Flexbox:** Utilizado en la sección **"Productos"** para organizar las cards de forma flexible.
*   **CSS Grid:** Aplicado en la sección **"Reseñas"** para una distribución de cuadrícula estética y ordenada.
*   **Media Queries:** El sitio es 100% responsive, adaptándose a móviles, tablets y desktops.

### 4. Funcionalidades Dinámicas y Carrito (JavaScript ES6+)
* **Sección de Destacados:** Consumo asíncrono de datos locales en formato JSON mediante `Fetch API`. Se procesan los primeros 3 productos de forma automática utilizando el método `slice` para mantener el inicio limpio.
* **Carrito de Compras Flotante:**
* **Persistencia con LocalStorage:** Integración con el almacenamiento local del navegador para asegurar que los productos guardados no se pierdan al navegar entre pestañas (`index.html`, `productos.html`, etc.) o al recargar la página.
* **Arquitectura Modular:** Separación estricta de responsabilidades usando módulos nativos de JS (`type="module"`), dividiendo el código en lógica de eventos (`index.js`), persistencia (`storage.js`), UI (`ui.js`) y lógica de negocio (`funcionesCarrito.js`).

## 🛠️ Tecnologías Utilizadas
* **HTML5** (Semántico)
* **CSS3** (Grid, Flexbox, Transiciones y Media Queries)
* **JavaScript (ES6+)** (Fetch API, LocalStorage, DOM, Módulos nativos)
* **FontAwesome** (Iconografía para redes y carrito de compras)
* **Google Fonts** (Tipografías Inter y Manrope)
* **Formspree** (Procesamiento de formularios)

## 📂 Estructura del Proyecto
```text
├── css/
│   └── styles.css             # Estilos globales, layouts (Grid/Flex) y diseño del carrito
├── data/
│   └── productos.json         # Base de datos local optimizada de los productos
├── img/                       # Logos e imágenes de productos
├── js/                        # Lógica modular de la aplicación
│   ├── index.js               # Punto de entrada y renderizado del Index (Fetch)
│   ├── funcionesCarrito.js    # Lógica de negocio (agregar, quitar y vaciar ítems)
│   ├── storage.js             # Métodos de persistencia en LocalStorage
│   └── ui.js                  # Manejo de contadores y renderizado de interfaz
├── pages/                     # Vistas secundarias de la plataforma
│   ├── carrito.html
│   ├── contacto.html
│   ├── productos.html
│   └── reseñas.html
└── index.html                 # Página de inicio y raíz del sitio web
