const express = require('express');
const bodyParser = require('body-parser');

let id = 1;
function generateMovie(name, age) {
  return {
    id: id++,
    name: name,
    age: age
  };
}

const movies = [
  generateMovie('Interestellar', 2017),
  generateMovie('Avengers: Endgame', 2019),
];

/**
 * API Movies
 * 
 * ---
 * GET /movies -> Devuelve las películas
 * POST /movies -> Crear una pelicula
 *  - Body params:
 *     - name: string -> Nombre de la pelicula
 *     - age: number -> Año de la pelicula
 * ---
 * GET /movies/:id -> Devuelve una pelicula (por id)
 * PUT /movies/:id -> Actualizar una pelicula
 * DELETE /movies/:id -> Eliminear una pelicula
 */
const app = express();
app.use(bodyParser.json());

app.get('/movies', function (req, res) {
  // Devolver las películas
  return res.json(movies);
}); 

app.post('/movies', function (req, res) {
  // Crear la pelicula
  const name = req.body.name;
  const age = req.body.age;

  const movie = generateMovie(name, age);
  movies.push(movie);
  return res.json(movie);
}); 

app.get('/movies/:id', function (req, res) {
  // Obtener una pelicula
  const id = Number(req.params.id);
  const movie = movies.find(x => x.id === id);
  return res.json(movie);
}); 

app.put('/movies/:id', function (req, res) {
  // Actualizar una pelicula
  const id = req.params.id;
  return 
});

app.delete('/movies/:id', function (req, res) {
  // Borrar una pelicula
  const id = req.params.id;
  for(var i = 0;i < id.lenght; i++){
    if(id[i] === id){
      id.splice(i, 1)
    }
  }
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
