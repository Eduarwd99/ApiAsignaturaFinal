module.exports = app => {
    const asignaturas = require("../controllers/asignatura.controller");
  
    var router = require("express").Router();
  
  //Obtiene listado de asignaturas - filtra por codigo
  // http://localhost:8080/api/asignaturas/listado
  router.get("/listado", asignaturas.listadoAsignaturas);
  
  // Guardar una asignatura - (no condicion)
  // http://localhost:8080/api/asignaturas/guardar
  router.post("/guardar", asignaturas.guardar);

  // Borrar una asignatura - (por codigo)
  // http://localhost:8080/api/asignaturas/borrar
  router.delete("/borrar", asignaturas.borrar);

  // Actualiza los datos de la asignatura
  // http://localhost:8080/api/asignaturas/actualizar
  router.put("/actualizar", asignaturas.actualizar);

  // Actualiza los datos de la asignatura
  // http://localhost:8080/api/asignaturas/actualizar2
  router.put("/actualizar2", asignaturas.actualizar2);

  //Obtiene listado de asignaturas - filtra por codigo
  // http://localhost:8080/api/asignaturas/listado2
  router.get("/listado2", asignaturas.listadoAsignaturas2);

  // localhost:8080/api/asignaturas
  app.use('/api/asignaturas', router);
};
  