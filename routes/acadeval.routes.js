module.exports = app => {
    const acadevaluaciones = require("../controllers/acadeval.controller");
  
    var router = require("express").Router();
  
  // filtra por instrumento de evaluación
  // http://localhost:8080/api/prueba
  router.get("/", acadevaluaciones.saludos);
  
  // Listado de carreras (por codigo)
  // localhost:8080/api/prueba/carreras
  router.get("/carreras", acadevaluaciones.getCarreras);

  // Listado de carreras (por nombre)
  // localhost:8080/api/prueba/carreraslike
  router.get("/carreraslike", acadevaluaciones.getCarrerasOperadorLike);

  // localhost:8080/api/prueba
  app.use('/api/prueba', router);
   
};
  