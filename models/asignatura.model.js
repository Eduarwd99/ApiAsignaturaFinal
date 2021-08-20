module.exports = mongoose => {
    const Asignatura = mongoose.model(
      "asignaturas",
      mongoose.Schema(
        {
            "codigo" : String,
            "nombre" : String,
            "creditos" : Number,
            "horas" : Number,
        },
        { timestamps: true }
      )
    );
  
    return Asignatura;
  };