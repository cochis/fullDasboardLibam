const { Schema, model } = require('mongoose')
const TarjetaPagoSchema = Schema({
  alumno: {
    type: Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true,
  },
  cantidadPagos: {
    type: Number,
    required: true,
  },
  ciclo: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
    required: true,
  },
  colegiatura: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
    required: true,
  },
  curso: {
    type: Schema.Types.ObjectId,
    ref: 'Curso',
    required: true,
  },
  factura: {
    type: Boolean,
    default: false,
  },
  fechaIncripcion: {
    type: Number,
  },
  gastos: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
    required: true,
  },
  inscripcion: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
    required: true,
  },
  libro: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
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
    ref: 'Usuario',
  },
})

TarjetaPagoSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.uid = _id
  return object
})
module.exports = model('TarjetaPago', TarjetaPagoSchema)
