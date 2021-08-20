module.exports = app => {
    const estudiantes = require("../controllers/estudiante.controller");
  
    var router = require("express").Router();
  
  //Obtiene listado de estudiantes - filtra por sexo
  // http://localhost:8080/api/estudiantes/listado
  router.get("/listado", estudiantes.getEstudiantes);
  
  //Guardar un estudiante
  // http://localhost:8080/api/estudiantes/guardar
  router.post("/guardar", estudiantes.guardar);
  
  //Borrar un estudiante
  // http://localhost:8080/api/estudiantes/borrar/idBorrar
  router.delete("/borrar/:id", estudiantes.borrar);

  //Borrar un estudiante V.2
  // http://localhost:8080/api/estudiantes/borrar2/matriculaBorrar
  router.delete("/borrar2/:matricula", estudiantes.borrar2);

  //Actualiza los datos del estudiante por su matricula
  // http://localhost:8080/api/estudiantes/actualizar
  router.put("/actualizar", estudiantes.actualizar);

  // localhost:8080/api/estudiantes
  app.use('/api/estudiantes', router);
   
};
  