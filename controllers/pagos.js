const { response } = require('express')
const bcrypt = require('bcryptjs')
const Pago = require('../models/pago')
const { generarJWT } = require('../helpers/jwt')
//getpagos pago
const getPagos = async (req, res) => {
  const pagos = await Pago.find(
    {},
    'clave alumno ciclo curso tipoPago referencia referenciaPago cantidad cantidadVencida cantidadPagada fechaPago fechaVencimiento fechaPagado aplicaPago editaFecha autorizaEdita estadoPago checkAbono factura facturado abonos descripcion recibio pagado cancelado activated dateCreated lastEdited usuarioCreated uid  ',
  )
    .populate('ciclo', 'nombre clave descripcion uid')
    .populate(
      'alumno',
      'nombre apellidoPaterno apellidoMaterno clave sexo fechaNacimento curp nacionalidad entidadNacimiento peso estatura tipoSanguineo telefono calle numeroExterior numeroInterior colonia codigoPostal estado municipio grado documentosEntregados padres currentCurso notas usuarioCreated usuario activated dateCreated lastEdited uid',
    )

    .populate('curso', 'nombre clave descripcion uid')
    .populate('transaccionId')

  res.json({
    ok: true,
    pagos,
    uid: req.uid,
  })
}

//crearpago pago
const crearPago = async (req, res = response) => {
  const { clave, nombre } = req.body
  const uid = req.uid
  const pago = new Pago({
    usuario: uid,
    ...req.body,
  })

  try {
    const existeClave = await Pago.findOne({ clave })
    // if (existeClave) {
    //   if (!existeClave.cancelado) {
    //     return res.status(400).json({
    //       ok: false,
    //       msg: 'El pago ya está registrado',
    //     })
    //   }
    // }
    await pago.save()
    res.json({
      ok: true,
      pago,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado...  revisar logs',
    })
  }
}

//actualizarpago pago
const actualizarPago = async (req, res = response) => {
  //Validar token y comporbar si es el spago

  const uid = req.params.id
  try {
    const pagoDB = await Pago.findById(uid)

    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pago',
      })
    }
    const { ...campos } = req.body
    const pagoActualizado = await Pago.findByIdAndUpdate(uid, campos, {
      new: true,
    })
    res.json({
      ok: true,
      pagoActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    })
  }
}
const borrarPago = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagoDB = await Pago.findById(uid)
    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pago',
      })
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      role,
      google,
      ...campos
    } = req.body

    campos.activated = false
    const pagoActualizado = await Pago.findByIdAndUpdate(uid, campos, {
      new: true,
    })
    res.json({
      ok: true,
      pagoActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const activarPago = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagoDB = await Pago.findById(uid)
    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pago',
      })
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      role,
      google,
      ...campos
    } = req.body

    campos.activated = true
    const pagoActualizado = await Pago.findByIdAndUpdate(uid, campos, {
      new: true,
    })
    res.json({
      ok: true,
      pagoActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const restaurarPago = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagoDB = await Pago.findById(uid)
    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pago',
      })
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      role,
      google,
      ...campos
    } = req.body

    campos.cancelado = false
    const pagoActualizado = await Pago.findByIdAndUpdate(uid, campos, {
      new: true,
    })
    res.json({
      ok: true,
      pagoActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const cancelarPago = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagoDB = await Pago.findById(uid)
    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pago',
      })
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      role,
      google,
      ...campos
    } = req.body

    campos.cancelado = true
    const pagoActualizado = await Pago.findByIdAndUpdate(uid, campos, {
      new: true,
    })
    res.json({
      ok: true,
      pagoActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const getPagoById = async (req, res = response) => {
  const uid = req.params.uid
  try {
    const pagoDB = await Pago.findById(uid)
      .populate(
        'alumno',
        'nombre apellidoPaterno apellidoMaterno clave sexo fechaNacimento curp nacionalidad entidadNacimiento peso estatura tipoSanguineo telefono calle numeroExterior numeroInterior colonia codigoPostal estado municipio grado documentosEntregados padres currentCurso notas usuarioCreated usuario activated dateCreated lastEdited uid',
      )
      .populate('ciclo', 'nombre clave descripcion uid')
      .populate('curso', 'nombre clave descripcion uid')
      .populate('transaccionId')
    if (!pagoDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un catalogo',
      })
    }
    res.json({
      ok: true,
      pago: pagoDB,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    })
  }
}
const getPagosByCiclo = async (req, res) => {
  const ciclo = req.params.ciclo
  try {
    const cicloDB = await Pago.find({ ciclo: ciclo })

    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite pagos en ese ciclo',
      })
    }
    res.json({
      ok: true,
      pagos: cicloDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperado',
    })
  }
}
const getPagosByAlumno = async (req, res) => {
  const alumno = req.params.alumno
  try {
    const cicloDB = await Pago.find({ alumno: alumno })

    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exiten pagos de ese alumno',
      })
    }
    res.json({
      ok: true,
      pagos: cicloDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperado',
    })
  }
}
const getPagosByTarjeta = async (req, res) => {
  const { alumno, ciclo, curso } = req.body;
  try {
    const pagosDB = await Pago.find({ "alumno": alumno, "ciclo": ciclo, "curso": curso })

    if (!pagosDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exiten pagos de ese alumno curso  y ciclo',
      })
    }
    res.json({
      ok: true,
      pagos: pagosDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperado',
    })
  }
}
module.exports = {
  getPagos,
  crearPago,
  actualizarPago,
  borrarPago,
  activarPago,
  getPagoById,
  cancelarPago,
  restaurarPago,
  getPagosByCiclo,
  getPagosByAlumno,
  getPagosByTarjeta
}
