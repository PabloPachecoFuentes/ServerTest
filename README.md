# ServerTest
Servidor de pruebas

</br>

# Pasos para la creación de un servidor sencillo

## Inicializar un package.json

`npm init --yes`
 
## Instalar dependencias

Express: Middleware para crear el servidor de Nodejs.

`npm i express`

Morgan: (Dependencia para reconocer las request http que se realizan en el servidor por parte del usuario.

`npm i morgan`

Bodyparser: (módulo para poder manejar peticiones post)

`npm i body-parser`

Ingreso resumido:

`npm i express morgan body-parser`

nodemon: Dependencia para actualizar automáticamente el servidor. Se instala como dependencia de desarrollo (bandera -D).

`npm i nodemon -D`