//Leer el archivo en formato JSON
//Promisis - Promesas - Asincrónico
//Petición - El servidor me responde - La transformo en un JSON - Se lo envio a otra then

//Capturar los elementos
let productosHTML = document.querySelector('.productos');
//Te permite visualizar el elemento capturado
console.log(productosHTML);

//Para que te documentes sobre Fetch
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://www.w3schools.com/jsref/api_fetch.asp
fetch('../datos/productos.json')
/* Una vez que se obtienen los datos json, se convierten a un objeto literal JavaScript mediante el método `respuesta.json()`. */
.then((respuesta)=>{
    return respuesta.json()
})
/* ahora el json fue transformado a objeto literal de javaScript */
/* Se utiliza un bucle `forEach` para recorrer cada objeto en el array de productos y agregar contenido dinámico al elemento `productosHTML`. Para cada producto, se genera un artículo (`<article>`) con su respectiva imagen, nombre y precio. */
.then((productos)=>{
    //console.log(productos) //Esto te permite ver lo que trae la respuesta
    productos.forEach(producto => {
        //Aquí agregas contenido de forma dinámica en la página
        //Acuerdate que estos datos vienen del archivo en formato json creado
        //El cual está en la carpeta datos - productos.json
        productosHTML.innerHTML += `
        <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
            <h2 class="text-center" >Nombre: ${producto.nombre}</h2>
            <h3 class="text-center" >Precio: $${producto.precio}</h3>
            
            
            
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary d-block botonDetalle' >Ver detalle </a>
        </article>
        
        `

        //En la linea de código anterior lo que hago es guardar en el id de forma dinámica, todo el objeto que será seleccionado por el usuario, cada vez que haga clic sobre el botón de ver detalle
        //Esto es para poder mostrar el detalle del producto
        /*  Además, se agrega un botón "Ver detalle" con un identificador único generado a partir del objeto completo en formato JSON del producto, que se guarda en el atributo `id` del elemento `a`. Este identificador se usará más adelante para guardar información en el LocalStorage y redirigir al usuario a otra página detalle.html. */
    })
    //Aquí procedo a agregar al localStorage - Lo que seleccionamos - Es decir se guardará todo el objeto -con todos sus datos completos 
    let botonDetalle = document.querySelectorAll('.botonDetalle') /* lo captura a traves de la clase del boton llamada botonDetalle <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary d-block botonDetalle' >Ver detalle </a>*/
    //console.log(botonDetalle);

    //Aquí guardaré los datos del producto seleccionado - pero en forma array de objetos
    let arrayMiListaDeProductos
    //Aquí guardo el objeto pero convertido a un array - Para poder tomar el código que el usuario seleccionó
    let miObjeto
    //Aquí es donde voy a guardar el código del productos que el usuario seleccionó
    let codigo
    //Aquí construyo está lógica para que poder dejar en escucha, a ver cual elemento selecciona el usuario para ver el detalle
    /* El programador está utilizando estas líneas de código para implementar la funcionalidad de guardar información en el LocalStorage del navegador y redirigir al usuario a otra página con información adicional. Aquí te explico qué hace cada línea:

- `let arrayMiListaDeProductos`: Esta línea de código define una variable llamada `arrayMiListaDeProductos`, que se utilizará para almacenar una lista de productos seleccionados por el usuario. La lista se almacenará en el LocalStorage como un array de objetos.

- `let miObjeto`: Esta línea de código define una variable llamada `miObjeto`, que se utilizará para almacenar el objeto completo del producto seleccionado por el usuario. El objeto se convertirá a un array para poder extraer el código del producto.

- `let codigo`: Esta línea de código define una variable llamada `codigo`, que se utilizará para almacenar el código del producto seleccionado por el usuario. El código se extraerá del objeto convertido a un array.

- `//Aquí construyo está lógica para que poder dejar en escucha, a ver cual elemento selecciona el usuario para ver el detalle`: Esta línea de código es un comentario que explica que se está construyendo la lógica para escuchar los eventos de clic en los botones "Ver detalle" y obtener la información del producto seleccionado por el usuario. */
    /* Se agrega un evento click a cada botón "Ver detalle" mediante el método `document.querySelectorAll('.botonDetalle').forEach(...)`. */

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             //La eqtiqueta ancla por defecto tiene un evento enviar los datos
             e.preventDefault() /* La función `e.preventDefault()` se utiliza en JavaScript para prevenir el comportamiento predeterminado de un evento. En el contexto del archivo JavaScript actual, se utiliza para prevenir que el botón "Ver detalle" realice la acción de redireccionamiento predeterminada al hacer clic en él.

             En lugar de eso, se ejecuta una función que guarda información en el LocalStorage y redirige al usuario a otra página con información adicional. Al utilizar `e.preventDefault()`, se evita que el botón realice la acción predeterminada (redireccionar a otra página) y se puede ejecutar la función personalizada en su lugar. */
             //Traigo datos del localStorage - No es necesario hacerlo en este caso propuesto
             /* Al hacer clic en un botón "Ver detalle", se ejecuta una función que obtiene el identificador del producto desde el atributo `id` del elemento `a`, lo guarda en el LocalStorage y redirige al usuario a otra página (detalle.html) con un Query String que contiene el identificador del producto seleccionado. */
             let miListaDeProductos = localStorage.getItem('detallesProducto') /* La línea de código `let miListaDeProductos = localStorage.getItem('detallesProducto')` se utiliza para obtener información almacenada en el LocalStorage del navegador. En este caso, se busca un valor almacenado bajo la clave `'detallesProducto'` y se guarda en la variable `miListaDeProductos`.

             Si el valor existe en el LocalStorage, se guarda en la variable como una cadena de texto. Si no existe, la variable se establecerá en `null`.
             
             Esta línea de código es útil para recuperar información guardada en el LocalStorage y utilizarla en la página web. Por ejemplo, se podría utilizar para mostrar una lista de productos guardados por el usuario o para prevenir que el usuario agregue un producto ya agregado anteriormente. */
             /*entonces 'detallesProducto' del codigo let miListaDeProductos = localStorage.getItem('detallesProducto') podria ser cualq nombre para esa clave? 
             ¡Exacto! `'detallesProducto'` es un nombre de clave elegido por el programador para identificar el valor almacenado en el LocalStorage. Puede ser cualquier cadena de texto que el programador desee utilizar como identificador. Sin embargo, es importante asegurarse de utilizar nombres de claves únicos para evitar conflictos con otros valores almacenados en el LocalStorage. */
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                 //console.log(arrayMiListaDeProductos);
             }
             /* Esta línea de código se utiliza para verificar si hay información almacenada en el LocalStorage del navegador bajo la clave `'detallesProducto'`, y si es así, recuperarla y convertirla en un array de objetos JavaScript.

- `miListaDeProductos` es una variable que almacena el valor de la clave `'detallesProducto'` del LocalStorage utilizando el método `localStorage.getItem()`.
- La condición `if(miListaDeProductos == null)` verifica si la variable `miListaDeProductos` es `null`, lo que significa que no hay información almacenada bajo la clave `'detallesProducto'`.
- Si `miListaDeProductos` es `null`, se inicializa la variable `arrayMiListaDeProductos` como un array vacío `[]`.
- Si `miListaDeProductos` no es `null`, se utiliza el método `JSON.parse()` para convertir el valor de la cadena de texto en un array de objetos JavaScript, que se almacena en la variable `arrayMiListaDeProductos`.

En resumen, esta línea de código se utiliza para recuperar información del LocalStorage y convertirla en un array de objetos JavaScript, o para inicializar un array vacío si no hay información almacenada. */
            //Aquí estoy guardando en el array de forma completa el objeto 
            arrayMiListaDeProductos.push(this.id)
            //Hago esto para poder convertir el objeto seleccionado en un array
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            //Aquí tomo el código que el usuario seleccionó
            codigo = miObjeto.codigo
            //Aquí guardo en el localStorage el objeto que usuario seleccionó
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            //Aquí construyo mi Query strings - Lo cual es la ruta a donde debo enviar al usuario y además junto a ello le envío el código que fué seleccionado
            location.href = `detalle.html?codigo=${codigo}`
            /* Este código se ejecuta cuando el usuario hace clic en un botón "Ver detalle" en la página principal. Aquí te explico qué hace cada línea:

- `arrayMiListaDeProductos.push(this.id)`: Esta línea de código agrega el identificador único del producto seleccionado por el usuario a la lista de productos almacenada en la variable `arrayMiListaDeProductos`.

- `miObjeto = JSON.parse(arrayMiListaDeProductos[0])`: Esta línea de código convierte el primer objeto en la lista de productos en un objeto JavaScript mediante el método `JSON.parse()` y lo almacena en la variable `miObjeto`.

- `codigo = miObjeto.codigo`: Esta línea de código extrae el código del producto seleccionado por el usuario desde el objeto almacenado en la variable `miObjeto` y lo almacena en la variable `codigo`.

- `localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))`: Esta línea de código guarda la lista de productos actualizada en el LocalStorage del navegador bajo la clave `'detallesProducto'`. La lista se convierte a una cadena de texto mediante el método `JSON.stringify()` antes de ser almacenada.

- `location.href = `detalle.html?codigo=${codigo}``: Esta línea de código redirige al usuario a la página "detalle.html" con un Query String que contiene el código del producto seleccionado por el usuario. La URL completa se construye utilizando la sintaxis de plantilla de cadena de texto (`${...}`).

En resumen, este código se utiliza para actualizar la lista de productos seleccionados por el usuario en el LocalStorage y redirigir al usuario a otra página con información adicional sobre el producto seleccionado. */
             
         })    
     } )
    

    
})
//Esto es sólo para controlar si existe o no algún error en el llamo del fetch
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})



/*Te explicaré el proceso paso a paso:

1. En el archivo HTML (index.html), hay un elemento <section class="productos"> </section> con la clase "productos" donde se mostrará el contenido dinámico.

2. En el archivo JavaScript (master.js), se captura ese elemento mediante el método `document.querySelector('.productos')` y se almacena en una variable llamada `productosHTML`.

3. Se realiza una petición Fetch para obtener los datos del archivo JSON (productos.json) mediante la función `fetch('../datos/productos.json')`.

4. Una vez que se obtienen los datos json, se convierten a un objeto JavaScript mediante el método `respuesta.json()`.

5. Se utiliza un bucle `forEach` para recorrer cada objeto en el array de productos y agregar contenido dinámico al elemento `productosHTML`. Para cada producto, se genera un artículo (`<article>`) con su respectiva imagen, nombre y precio.

6. Además, se agrega un botón "Ver detalle" con un identificador único generado a partir del objeto completo en formato JSON del producto, que se guarda en el atributo `id` del elemento `a`. Este identificador se usará más adelante para guardar información en el LocalStorage y redirigir al usuario a otra página.

7. Se agrega un evento click a cada botón "Ver detalle" mediante el método `document.querySelectorAll('.botonDetalle').forEach(...)`.

8. Al hacer clic en un botón "Ver detalle", se ejecuta una función que obtiene el identificador del producto desde el atributo `id` del elemento `a`, lo guarda en el LocalStorage y redirige al usuario a otra página (detalle.html) con un Query String que contiene el identificador del producto seleccionado.

9. En la página detalle.html, se obtiene el identificador del producto desde el Query String mediante el método `new URLSearchParams(window.location.search).get('id')`.

10. Se busca el producto correspondiente en el array de productos mediante el método `array.find(...)` y se muestra su información en la página.

¡Espero que esto te ayude a entender cómo se conectan los archivos HTML, JavaScript y JSON para crear contenido dinámico en una página web! Si tienes alguna otra pregunta, no dudes en preguntar. */