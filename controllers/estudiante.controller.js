//const { estudiantes } = require("../models");
const db = require("../models");
const Estudiante = db.estudiantes;


//Listado de estudiantes
exports.getEstudiantes = (req, res) => {

  const genero = req.query.genero;
    
  let condicion = genero ? {sexo: genero}:{};
  
  Estudiante.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}


//Guardar un estudiantes 
exports.guardar = (req, res) => {
    const matricula = req.body.matricula;
    const apellidos = req.body.apellidos;
    const nombres = req.body.nombres;
    const edad = req.body.edad;
    const sexo = req.body.sexo;

    const est = new Estudiante({
        "matricula": matricula,
        "apellidos": apellidos,
        "nombres": nombres,
        "edad": edad,
        "sexo": sexo
    });

    est.save(est).then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            mensaje:
                err.message || "Error al guardar datos en la coleccion de estudiantes..."
        });
    });
}


//Borrar un estudiante
exports.borrar = (req, res) => {

  const id = req.params.id;
  
  Estudiante.findByIdAndRemove(id).then( data => {
    if(!data){
      res.status(404).send({status:false,
      mensaje: "No se pudo borrar el estudiante de id: "+ id});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al eliminar un estudiante..."
    });
  });
}


//Borrar un estudiante V.2
exports.borrar2 = (req, res) => {

  const matricula = req.params.matricula;
  
  Estudiante.deleteOne(
      //Pasar criterio de busqueda
      {matricula: matricula}      
    ).then( data => {
    //console.log(data);
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo borrar el estudiante de matricula: ${matricula}`});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al eliminar un estudiante..."
    });
  });
}


//Actualizar un estudiante por matricula
exports.actualizar = (req, res) => {

  const matricula = req.body.matricula;
  if(!matricula){
    return res.status(404).send({status:false, mensaje:"Falta el parametro matricula..."});
  }
  const ape = req.body.apellidos;
  const nom = req.body.nombres;
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  
  Estudiante.updateOne(
      //Pasar criterio de busqueda
      {matricula: matricula},
      {$set:
        {
          apellidos:ape,
          nombres:nom,
          edad:edad,
          sexo:sexo
        }
      }   
    ).then(data => {
    console.log("Datos devueltos: ", data);
    
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo actualizar el estudiante de matricula: ${matricula}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al actualizar al estudiente..."
    });
  });
}
