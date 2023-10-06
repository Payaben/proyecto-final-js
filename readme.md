Agradecimientos a mi Profesor Ángel Daniel Fuentes Segura <br>
Querido profesor Ángel Daniel Fuentes Segura,

Quiero expresar mi más sincero agradecimiento por su paciencia y dedicación en la docencia. Su gran vocación y pasión por enseñar se reflejan en la forma en que transmite exitosamente sus conocimientos a sus alumnos. Gracias a usted, he aprendido mucho y me siento inspirado a seguir creciendo académicamente.

Valoraré siempre el tiempo y esfuerzo que ha invertido en mi educación. Su compromiso con sus alumnos es admirable y me siento afortunado de haber tenido la oportunidad de ser parte de su clase. Gracias por ser un modelo a seguir y por motivarme a alcanzar mis metas.

Con gratitud, Pablo Benjamin Guillen

# "Querido profesor Ángel Daniel Fuentes Segura, quiero agradecerle por el tiempo y dedicación que ha puesto en este proyecto. Gracias a su guía y enseñanza, he aprendido mucho y estoy muy contento con el resultado final. ¡Gracias de nuevo por todo!"

# Déjame intentar explicar este proyecto de una manera sencilla:

# El objetivo principal es mostrar una lista de productos y permitir al usuario ver más detalles de un producto específico. Para lograr esto se utilizan varias tecnologías y conceptos de JavaScript:

- Se tiene un archivo index.html que es la página principal. Aquí se muestra inicialmente sólo un título y un enlace. 

- Luego en JavaScript (master.js) se hace una petición fetch a un archivo productos.json que contiene los datos de los productos (código, nombre, precio, imagen).

- Cuando se obtienen los datos, se recorre el array de productos con un bucle forEach y se va agregando de forma dinámica el HTML necesario para mostrar cada producto (imagen, nombre, precio). Esto se inyecta en un elemento <section> del HTML (llamado index.html)

- A cada producto se le agrega también un botón "Ver detalle" que cuando se le hace clic, guarda en el localStorage el objeto del producto seleccionado y redirige a otra página detalle.html pasando el código del producto en la URL.

- En detalle.html se obtiene el código del producto desde la URL, se busca el objeto correspondiente del localStorage y se muestra su información completa (código, nombre, imagen).

- También se agrega un botón en detalle.html que permite regresar a la página principal index.html y limpia el localStorage.

# En resumen se utiliza:
- Fetch para obtener datos desde un archivo JSON
- DOM para renderizar HTML de forma dinámica 
- LocalStorage para almacenar datos en el navegador
- Query strings para pasar información entre páginas

# Esto permite crear una aplicación sencilla pero completa para mostrar y ver detalles de productos de forma dinámica. esta descripción general te ayudara a entender la lógica del proyecto

 # Veamos el archivo master.js paso a paso:
 
1. Se captura el elemento HTML con class "productos" en una variable llamada productosHTML. 

2. Se hace un fetch al archivo JSON productos.json.

3. Cuando se obtiene la respuesta, se convierte a un objeto literal JavaScript con .json()

4. El array de productos ahora está disponible como un objeto literal JavaScript en la variable productos.

5. Se hace un forEach para recorrer ese array de objetos productos:

6. Dentro del forEach, se va concatenando (+=) el HTML necesario para mostrar cada producto:

- Un article con la clase producto 
- Una imagen con la URL del producto
- Un título con el nombre
- Un subtítulo con el precio

7. También dentro del forEach se agrega un botón "Ver detalle" con un ID único generado a partir del objeto producto stringificado a JSON.

8. Luego se capturan todos esos botones en una variable botonDetalle con querySelectorAll.

9. Se recorren con otro forEach y se les asigna un evento click a cada uno. 

10. Dentro de la función click se obtiene el ID único y se almacena el producto en el localStorage.

11. También dentro de la función click se redirige a detalle.html pasando en la URL el código del producto.

12. el paso clave es transformar la respuesta a un objeto literal JavaScript para poder acceder a los datos directamente.

# Veamos el archivo detalle.js paso a paso:

1. Se obtiene la query string (codigo) de la URL actual con location.search y se guarda en una variable.

2. Se crea un objeto URLSearchParams a partir de la query string para manipularla mejor.

3. Del objeto URLSearchParams se obtiene el parámetro "codigo" con el método .get()

4. Se almacena el código obtenido en la variable codigoSeleccionado.

5. Se capturan los elementos del HTML donde se mostrarán los detalles (codigo, nombre, imagen).

6. Del localStorage se obtiene la lista de productos seleccionados previamente.

7. Se convierte esa lista a objeto JavaScript con JSON.parse().

8. Del array de objetos se obtiene el primero y se almacena en arrayDetalle.

9. Se muestran los detalles correspondientes en los elementos del HTML:

- El código obtenido de la URL.
- El nombre obtenido del objeto del localStorage. 
- La imagen obtenida del objeto del localStorage.

10. Se captura el botón de regresar.

11. Se le asigna un evento click al botón de regresar.

12. Dentro de la función click se borra el localStorage y se regresa a index.html

<p>¡Esta es una explicación paso a paso de la lógica en detalle.js!</p>
