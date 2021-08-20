module.exports = mongoose => {
    const Acadevaluacion = mongoose.model(
      "carreras",
      mongoose.Schema(
        {
            "cod_carrera" : String,
            "nombre_carrera" : String,
            "duracion" : Number,
            "fecha_creacion" : String,
        },
        { timestamps: true }
      )
    );
  
    return Acadevaluacion;
  };