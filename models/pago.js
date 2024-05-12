const { Schema, model } = require('mongoose')
const PagoSchema = Schema({
  clave: {
    type: String,
    required: true,
  },
  alumno: {
    type: Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true,
  },
  ciclo: {
    type: Schema.Types.ObjectId,
    ref: 'Catalogo',
    required: true,
  },
  curso: {
    type: Schema.Types.ObjectId,
    ref: 'Curso',
    required: true,
  },
  tipoPago: {
    type: String,
  },
  referencia: {
    type: String,
    required: true,
  },
  referenciaPago: {
    type: String,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  cantidadVencida: {
    type: Number,
    required: true,
  },
  cantidadPagada: {
    type: Number,
  },
  fechaPago: {
    type: Number,
    required: true,
  },
  fechaVencimiento: {
    type: Number,
    required: true,
  },
  fechaPagado: {
    type: Number,
    default: 0,
  },
  aplicaPago: {
    type: Boolean,
    default: false,
  },
  editaFecha: {
    type: Boolean,
    default: false,
  },
  autorizaEdita: {
    type: Boolean,
    default: false,
  },
  estadoPago: {
    type: Boolean,
    default: false,
  },
  checkAbono: {
    type: Boolean,
    default: false,
  },
  factura: {
    type: Boolean,
    default: false,
  },
  facturado: {
    type: Boolean,
    default: false,
  },
  pagado: {
    type: Boolean,
    default: false,
  },
  exentoPago: {
    type: Boolean,
    default: false,
  },
  abonos: [
    {
      type: Object,
    },
  ],
  descripcion: {
    type: String,
  },
  recibio: [
    {
      type: Object,
    },
  ],
  cancelado: {
    type: Boolean,
    default: false,
  },
  transaccionId: {
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
    default: null
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

PagoSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.uid = _id
  return object
})
module.exports = model('Pago', PagoSchema)
