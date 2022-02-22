# ServerTest

Servidor sencillo, hecho con el motivo de servir como base para pruebas. 

# Pasos para su creación

### Inicializar un package.json

`npm init --yes`
 
### Listar dependencias e instalarlas

Dependencias utilizadas:
- Express: Middleware para crear el servidor de Nodejs.
- Morgan: Dependencia para reconocer las request HTTP que se realizan en el servidor por parte del usuario.
- Bodyparser: Módulo para poder manejar peticiones POST.
- nodemon: Dependencia para actualizar automáticamente el servidor. Se instala como dependencia de desarrollo (bandera -D).

Comandos para instalación:

`npm i express morgan body-parser`

`npm i nodemon -D`

### Archivo index.js

Se introducen las configuraciones necesarias:
1. Importar módulos.
2. Colocar configuraciones para el servidor.
3. Colocar las rutas deseadas.
4. Inicializar el servidor y dejarlo escuchando.

### Archivos HTML y CSS

En la carpeta *public* se sitúa el archivo *index.html* con los elementos a mostrar. También están la carpeta *CSS* y la carpeta *IMG* con sus respectivos archivos.

# Clonar y levantar el servidor

Al bajar el código, situarse al nivel del package.json y ejecutar los comandos siguientes dependiendo de lo que se desea hacer.

Si se desea seguir desarrollando el código:

`npm run dev`

Si se quiere únicamente ver los resultados como usuario final:

`npm start`
