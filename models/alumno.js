const { Schema, model } = require("mongoose");
const AlumnoSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
  },
  clave: {
    type: String,
    required: true,
  },
  sexo: {
    type: Schema.Types.ObjectId,
    ref: "Sexo",
    required: true,
  },
  fechaNacimiento: {
    type: Number,
    required: true,
  },
  curp: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true,
  },
  entidadNacimiento: {
    type: String,
    required: true,
  },
  peso: {
    type: Number,
  },
  estatura: {
    type: Number,
  },
  tipoSanguineo: {
    type: Schema.Types.ObjectId,
    ref: "TipoSanguineo",
    required: true,
  },
  telefono: {
    type: Number,
  },
  calle: {
    type: String,
  },
  numeroExterior: {
    type: String,
  },
  numeroInterior: {
    type: String,
  },
  colonia: {
    type: String,
  },
  codigoPostal: {
    type: Number,
  },
  estado: {
    type: String,
  },
  municipio: {
    type: String,
  },
  grado: {
    type: Schema.Types.ObjectId,
    ref: "Grado",
    required: true,
  },
  documentosEntregados: [
    {
      type: Schema.Types.ObjectId,
      ref: "Documento",
      required: true,
      default: "",
    },
  ],
  padres: [
    {
      type: Schema.Types.ObjectId,
      ref: "Padre",
    },
  ],
  img: {
    type: String,
  },
  currentCurso: {
    type: Schema.Types.ObjectId,
    ref: "Curso",
  },
  notas: {
    type: String,
  },
  activated: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Number,
    required: true,
    default: Date.now(),
  },
  lastEdited: {
    type: Number,
    required: true,
    default: Date.now(),
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  usuarioCreated: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

AlumnoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});
module.exports = model("Alumno", AlumnoSchema);
