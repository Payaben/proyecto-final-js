//Para que amplien sus conocimientos sobre el objeto location
//https://www.w3schools.com/js/js_window_location.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Location
//Aquí guardo lo que trae el query strings
let codigo = location.search;
console.log(codigo);
//Aquí uso esta instancia para lograr ver mejor los datos del query strings
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);
//Aquí guardo el código que el usuario seleccionó
let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);
/* ¡Claro! Permíteme explicarlo de una manera más sencilla.

- `let codigo = location.search;`: Esta línea guarda en la variable "codigo" toda la información que viene después del símbolo "?" en la URL. Por ejemplo, si la URL es "detalle.html?codigo=123", la variable "codigo" contendrá "codigo=123".

- `console.log(codigo);`: Esta línea muestra en la consola del navegador el valor de la variable "codigo". Es útil para verificar qué información se está guardando.

- `let codigoProducto = new URLSearchParams(codigo);`: Esta línea crea un objeto especial llamado "URLSearchParams" a partir del valor de la variable "codigo". Este objeto nos permite acceder y manipular fácilmente los parámetros del Query String.

- `console.log(codigoProducto);`: Esta línea muestra en la consola del navegador el objeto "codigoProducto". Esto nos permite ver mejor la estructura y los métodos disponibles para trabajar con los parámetros del Query String.

- `let codigoSeleccionado = codigoProducto.get('codigo');`: Esta línea utiliza el método "get" del objeto "codigoProducto" para obtener el valor del parámetro llamado "codigo". Por ejemplo, si el Query String es "codigo=123", la variable "codigoSeleccionado" contendrá "123".

- `console.log(codigoSeleccionado);`: Esta línea muestra en la consola del navegador el valor del parámetro "codigoSeleccionado". Esto nos permite verificar que se ha obtenido correctamente el valor deseado del Query String.

En resumen, estas líneas de código nos permiten extraer el valor del parámetro "codigo" del Query String de la URL actual y almacenarlo en una variable para su posterior uso en la página. */

//Capturo los datos de la página de detalle donde quiero a futuro mostrar los datos del producto seleccionado
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');

//Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
//Convierto el objeto literal a un array
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);
/* Estas líneas de código se utilizan para obtener los detalles del producto seleccionado por el usuario que se encuentran almacenados en el LocalStorage del navegador. Aquí te explico lo que hace cada línea:

- `let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))`: Esta línea obtiene la información almacenada en el LocalStorage con la clave "detallesProducto" y la almacena en la variable "detalleProducto". La información almacenada en el LocalStorage se guarda como una cadena de texto, por lo que es necesario utilizar el método "JSON.parse()" para convertirla en un objeto JavaScript.

- `let arrayDetalle = JSON.parse(detalleProducto[0]);`: Esta línea extrae el primer objeto de la lista de objetos almacenada en la variable "detalleProducto" y lo almacena en la variable "arrayDetalle". Esto se debe a que la información almacenada en el LocalStorage se guarda como una lista de objetos, y es necesario extraer el objeto deseado para su posterior uso. Al igual que en la línea anterior, se utiliza el método "JSON.parse()" para convertir la cadena de texto en un objeto JavaScript.

- `console.log(arrayDetalle);`: Esta línea muestra en la consola del navegador el valor de la variable "arrayDetalle". Esto nos permite verificar que se ha obtenido correctamente la información del producto seleccionado y que está disponible para su uso en la página. */

//Muestro de manera dinámica los detalles del producto que tengo en el localStorage
codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre del producto : ${arrayDetalle.nombre}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`

//Capturo el botón que me permite regresar y además borrar todo lo que tengo en mi localStorage
let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    //Este a mi no me funcionó
    //localStorage.removeItem('detalleProducto');
    //Pero este sí -Perfectamente borra todo lo que está en el localStorage
    localStorage.clear()
    //Aquí retorno a la página principal y muestro todos los datos que estan en el archivo json
    location.href = 'index.html'
})

/* Este código de JavaScript se utiliza en la página "detalle.html" para mostrar los detalles del producto seleccionado por el usuario. Aquí te explico lo que hace cada línea:

- `let codigo = location.search;`: Esta línea guarda el Query String de la URL actual en la variable `codigo`.

- `let codigoProducto = new URLSearchParams(codigo);`: Esta línea crea una instancia de `URLSearchParams` a partir del Query String almacenado en la variable `codigo`.

- `let codigoSeleccionado = codigoProducto.get('codigo');`: Esta línea extrae el valor del parámetro `'codigo'` del Query String y lo almacena en la variable `codigoSeleccionado`.

- `let codigoFinal = document.getElementById('codigo');`: Esta línea captura el elemento HTML con el ID `'codigo'`.

- `let nombre = document.getElementById('nombre');`: Esta línea captura el elemento HTML con el ID `'nombre'`.

- `let imagen = document.getElementById('imagen');`: Esta línea captura el elemento HTML con el ID `'imagen'`.

- `let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))`: Esta línea obtiene la lista de productos seleccionados por el usuario del LocalStorage y la convierte en un objeto JavaScript utilizando `JSON.parse()`.

- `let arrayDetalle = JSON.parse(detalleProducto[0]);`: Esta línea convierte el primer objeto en la lista de productos seleccionados en un objeto JavaScript y lo almacena en la variable `arrayDetalle`.

- `codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;`: Esta línea muestra el código del producto seleccionado en el elemento HTML con el ID `'codigo'`.

- `nombre.innerHTML = `Nombre del producto : ${arrayDetalle.nombre}`;`: Esta línea muestra el nombre del producto seleccionado en el elemento HTML con el ID `'nombre'`.

- `imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>``: Esta línea muestra la imagen del producto seleccionado en el elemento HTML con el ID `'imagen'`.

- `let botonRegresar = document.getElementById('botonRegresar');`: Esta línea captura el botón HTML con el ID `'botonRegresar'`.

- `botonRegresar.addEventListener('click', function(){...});`: Esta línea agrega un evento de clic al botón de regreso que borra todo lo que hay en el LocalStorage y redirige al usuario a la página principal.

En resumen, este código se utiliza para mostrar los detalles del producto seleccionado por el usuario y permitir que el usuario regrese a la página principal. */