Ejecutar comando npm install.

Luego para inicializar la aplicacion ejecutar npm run dev.

Para realizar correctamente las peticiones vamos a usar Postman o ThunderClient

- Peticion para crear autor:

En Thunder client o en Postman  poner peticion a POST y establecer el registro usando el json content como en el ejemplo:

http://localhost:3000/api/autor/

{
  "name":"jaime",
  "email":"jaime@gmail.com",
  "image":"jaime.png"
}

- Peticion para crear post:

http://localhost:3000/api/post/

En Thunder client o en Postman  poner peticion a POST y establecer el registro usando el json content como en el ejemplo:

{
  "title":"Post Prueba",
  "description":"Esta es la descripción del post de Prueba",
  "fecha creación":"2024-06-21T18:26:07.000Z",
  "category":"Juegos",
  "autor":"Prueba García",
  "email":"Prueba.garcia@ejemplo.com",
  "image":"Prueba.jpg",
  "autor_id":"2"
} 

- Peticion para listar autores:

http://localhost:3000/api/autor/

En Thunder client o en Postman  poner peticion a GET

- Peticion para listar post:

En Thunder client o en Postman  poner peticion a GET

http://localhost:3000/api/post/

- Peticion para listar un post especifico:

http://localhost:3000/api/post/1


- Peticion para listar un autor especifico junto con todos sus posts:

En Thunder client o en Postman  poner peticion a GET

http://localhost:3000/api/autor/1


- Peticion para actualizar un autor:

En Thunder client o en Postman  poner peticion a PUT

http://localhost:3000/api/autor/1

{
      "name": "María García",
      "email": "maria.garcia@ejemplo.com",
      "image": "maria_garcia.jpg"
} 


- Peticion para actualizar un post:

En Thunder client o en Postman  poner peticion a PUT

http://localhost:3000/api/post/1

{
  "title":"Cuarto Post",
  "description":"Esta es la descripción del Tercer post",
  "fecha creación":"2024-05-21T18:26:07.000Z",
  "category":"Huerto urbano",
  "autor_id":"2"
} 

- Peticion para eliminar un autor:

En Thunder client o en Postman  poner peticion a DELETE seguido del id del autor que se desea eliminar

http://localhost:3000/api/autor/1


- Peticion para eliminar un post:

En Thunder client o en Postman  poner peticion a DELETE seguido del id del post que se desea eliminar

http://localhost:3000/api/post/1

