const { Schema, model } = require("mongoose");
const CatalogoSchema = Schema({
  tipo: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  tipoDato: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  descripcion: {
    type: String,
    required: true,
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
  usuarioCreated: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

CatalogoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});
module.exports = model("Catalogo", CatalogoSchema);
