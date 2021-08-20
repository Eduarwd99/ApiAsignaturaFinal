module.exports = mongoose => {
    const Estudiante = mongoose.model(
      "estudiantes",
      mongoose.Schema(
        {
            "matricula" : String,
            "apellidos" : String,
            "nombres" : String,
            "edad" : Number,
            "sexo" : String,
        },
        { timestamps: true }
      )
    );
  
    return Estudiante;
  };