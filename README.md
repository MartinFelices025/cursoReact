# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Bienvenidos al proyecto. 

Dejo un resumen básico de funcionalidad. 

Los productos, en tanto tal, son obtenidos de Firebase. La imagen se aloja en imagenes.

Las categorías son iteradas a partir de las persistidas en la BD. 


El usuario, esta guardado en la misma base. Se trae por id de forma hardcodeada. Queda pendiente un login como mejora. 

Se controla la cantidad de productos, para que no se puedan agregar más que el stock. 
Por otro lado, se controla que no se pueda ingresar al carrito de compras si éste se encuentra vacío. 
De igual manera, si se borrar todos los elementos, se redirecciona a inicio. 

Cuando se realiza una compra éxitosamente, se presnta un modal informando al usuario su codigo de compra. 

Con la misma estrategia, se informa cuando un elemento es ingresado al carrito. 

Meidante providers, se persiste la información necesaria, tanto de Usuario como de Carrito. 

En caso de que el producto seleccionado ya exista en el carrito, se agrega solo la cantidad deseada

Se deja la responsabilidad de la conexión a la BD al archivo conexionBD.js
