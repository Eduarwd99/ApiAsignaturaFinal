//
const db = require("../models");
const Asignatura = db.asignaturas;


//Listado de asignaturas
exports.listadoAsignaturas = (req, res) => {

  const codigo = req.query.codigo;
    
  let condicion = codigo ? {codigo: codigo}:{};
  
  Asignatura.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}


//Guardar una asignatura 
exports.guardar = (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const creditos = req.body.creditos;
    const horas = req.body.horas;

    const asg = new Asignatura({
        "codigo": codigo,
        "nombre": nombre,
        "creditos": creditos,
        "horas": horas
    });

    asg.save(asg).then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            mensaje:
                err.message || "Error al guardar datos en la coleccion de asignatura..."
        });
    });
}

//Borrar una asignatura (con query)
exports.borrar = (req, res) => {

  const codigo = req.query.codigo;

  let condicion = codigo ? {codigo: codigo}:{};
  
  Asignatura.deleteOne(condicion).then( data => {
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo borrar la asignatura de codigo: ${codigo}`});
    }
    else{
      res.send({status:true, mensaje: "Registro borrado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al eliminar la asignatura..."
    });
  });
}


//Actualizar una asignatura
exports.actualizar = (req, res) => {

  const codigo = req.body.codigo;
  if(!codigo){
    return res.status(404).send({status:false, mensaje:"Falta el parametro codigo..."});
  }
  const nombre = req.body.nombre;
  const creditos = req.body.creditos;
  const horas = req.body.horas;

  Asignatura.updateOne(
      //Pasar criterio de busqueda
      {codigo: codigo},
      {$set:
        {
          nombre:nombre,
          creditos:creditos,
          horas:horas
        }
      }   
    ).then(data => {
    console.log("Datos devueltos: ", data);
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo actualizar la asignatura de codigo: ${codigo}`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al actualizar la asignatura..."
    });
  });
}


//Actualizar una asignatura por 2 parametros
exports.actualizar2 = (req, res) => {
  const codigo = req.body.codigo;
  if(!codigo){
    return res.status(404).send({status:false, mensaje:"Falta el parametro de codigo..."});
  }
  const horas = req.body.horas;
  if(!horas){
    return res.status(404).send({status:false, mensaje:"Falta el parametro de horas..."});
  }
  const nombre = req.body.nombre;
  const creditos = req.body.creditos;

  Asignatura.updateOne( 
      //Pasar criterio de busqueda
      {codigo: codigo} && {horas: horas},
      {$set:
        {
          nombre:nombre,
          creditos:creditos,
        }
      }  
    ).then(data => {
    console.log("Datos devueltos: ", data);
    if(data.n==0){
      res.status(404).send({status:false,
      mensaje: `No se pudo actualizar la asignatura`});
    }
    else{
      res.send({status:true, mensaje: "Registro actualizado..."});
    }
  }).catch( err => {
    res.status(500).send({ status:false,
        mensaje:
            err.message || "Error al actualizar la asignatura..."
    });
  });
}

//Listado de asignaturas
exports.listadoAsignaturas2 = (req, res) => {

  const codigo = req.query.codigo;
  const nombre = req.query.nombre;
    
  let condicion = codigo && nombre ? {codigo: codigo}&&{nombre: nombre}:{};
  
  Asignatura.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}
