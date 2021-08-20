const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.acadevaluaciones = require("./acadeval.model")(mongoose);
db.estudiantes = require("./estudiante.model")(mongoose);
db.asignaturas = require("./asignatura.model")(mongoose);

module.exports = db;
