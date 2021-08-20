const db = require("../models");
const Acadevaluacion = db.acadevaluaciones;

const ObjectID = require('mongodb').ObjectID;
const { isValidObjectId } = require("mongoose");

//Msg Bienvenida
exports.saludos = (req, res) => {

  res.send({status: true, mensaje:"Bienvenidos..."});
 
}

//Listado de carreras
exports.getCarreras = (req, res) => {

  const cod_carrera = req.query.cod_carrera;
  
  /*
  if(!cod_carrera){
    res.send({satus:false, mensaje:"Falta el parametro cod_carrera"});
    return;
  }
  */
  
  let condicion_cod_carrera = cod_carrera ? {cod_carrera: cod_carrera}:{};
  
  /* LET - EQUIVALENTE EN PROG. TRADICIONAL:
  if(cod_carrera)
    condicion_cod_carrera = {cod_carrera: cod_carrera};
  else
    condicion_cod_carrera = {};
  */
  
  Acadevaluacion.find(condicion_cod_carrera).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}

exports.getCarrerasOperadorLike = (req, res) => {

  const param1 = req.query.nombre_carrera;

  let condicion = param1 ?  {nombre_carrera: { $regex: new RegExp(param1), $options: "i" } } : {};

  Acadevaluacion.find(condicion).then( data => {
    res.send(data);

  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Consultar por el nombre_carrera (haciendo uso del operador LIKE)
//uso del operador LIKE en mongodb (no se va a encontrar como LIKE)
exports.getCarrerasOperadorLikee = (req, res) => {
  const nombre_carrera = req.query.nombre_carrera;

  let condicion_nombre_carrera = nombre_carrera ? {nombre_carrera: nombre_carrera}:{};
  
  // ESTE SOLO SIRVE PARA NOMBRES DE LA CARRERA COMPLETO (NO APLICAN CADENAS PARCIALES)
  Acadevaluacion.find(condicion_nombre_carrera).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
  
  /*
  Acadevaluacion.find({condicion_nombre_carrera: /.*Tecnologias de la informacion.*/
  /*
  }).then( data => {
    res.send(data);
  });
  */

  /* STANDART 
  db.nombre_carrera.find({
    "nombre_carrera": /.*ra.*/
  //});  
}
