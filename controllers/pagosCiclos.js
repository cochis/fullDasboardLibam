const { response } = require('express')
const bcrypt = require('bcryptjs')
const PagosCiclo = require('../models/pagosCiclo')
const { generarJWT } = require('../helpers/jwt')
// PagosCiclo
const getPagosCiclos = async (req, res) => {
  const pagosCiclos = await PagosCiclo.find(
    {},
    'alumno curso ciclo pagos activated dateCreated lastEdited usuarioCreated ',
  )

    .populate('alumno', 'nombre  apellidoPaterno  apellidoMaterno clave uid')
    .populate('curso', 'nombre  uid')
    .populate('ciclo', 'nombre  uid')
  res.json({
    ok: true,
    pagosCiclos,
    uid: req.uid,
  })
}

//crearPagosCiclo PagosCiclo
const crearPagosCiclos = async (req, res = response) => {
  const { clave, nombre } = req.body
  const uid = req.uid
  const pagosCiclo = new PagosCiclo({
    usuario: uid,
    ...req.body,
  })

  try {
    await pagosCiclo.save()
    res.json({
      ok: true,
      pagosCiclo,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado...  revisar logs',
    })
  }
}

//actualizarPagosCiclo PagosCiclo
const actualizarPagosCiclos = async (req, res = response) => {
  //Validar token y comporbar si es el spagosCiclo

  const uid = req.params.id
  try {
    const pagosCicloDB = await PagosCiclo.findById(uid)

    if (!pagosCicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pagosCiclo',
      })
    }
    const { ...campos } = req.body
    const pagosCicloActualizado = await PagosCiclo.findByIdAndUpdate(
      uid,
      campos,
      {
        new: true,
      },
    )
    res.json({
      ok: true,
      pagosCicloActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    })
  }
}
const borrarPagosCiclos = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagosCicloDB = await PagosCiclo.findById(uid)
    if (!pagosCicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pagosCiclo',
      })
    }

    const { ...campos } = req.body

    campos.activated = false
    const pagosCicloActualizado = await PagosCiclo.findByIdAndUpdate(
      uid,
      campos,
      {
        new: true,
      },
    )
    res.json({
      ok: true,
      pagosCicloActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const activarPagosCiclos = async (req, res = response) => {
  const uid = req.params.id
  try {
    const pagosCicloDB = await PagosCiclo.findById(uid)
    if (!pagosCicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un pagos Ciclo',
      })
    }

    const { ...campos } = req.body

    campos.activated = true
    const pagosCicloActualizado = await PagosCiclo.findByIdAndUpdate(
      uid,
      campos,
      {
        new: true,
      },
    )
    res.json({
      ok: true,
      pagosCicloActualizado,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}

const getCicloByAlumno = async (req, res) => {
  const alumno = req.params.alumno
  try {
    const cicloDB = await PagosCiclo.find({ alumno: alumno })

    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un ciclos',
      })
    }
    res.json({
      ok: true,
      pagosCiclo: cicloDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperasdo',
    })
  }
}
const getCicloByCiclo = async (req, res) => {
  const ciclo = req.params.ciclo
  try {
    const cicloDB = await PagosCiclo.find({ ciclo: ciclo })

    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un ciclos',
      })
    }
    res.json({
      ok: true,
      pagosCiclo: cicloDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperasdo',
    })
  }
}
const getCicloByCurso = async (req, res) => {
  const curso = req.params.curso
  try {
    const cicloDB = await PagosCiclo.find({ curso: curso })

    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite un ciclos',
      })
    }
    res.json({
      ok: true,
      pagosCiclo: cicloDB,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      error,
      msg: 'Error inesperasdo',
    })
  }
}

const getPagosCiclosById = async (req, res) => {
  const uid = req.params.uid
  try {
    const cicloDB = await PagosCiclo.findById(uid)
      .populate('alumno', 'nombre  apellidoPaterno  apellidoMaterno clave uid')
      .populate('curso', 'nombre  uid')
      .populate('ciclo', 'nombre  uid')
    if (!cicloDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No exite tarjeta de pago',
      })
    }
    res.json({
      ok: true,
      pagoCiclo: cicloDB,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    })
  }
}

module.exports = {
  getPagosCiclos,
  crearPagosCiclos,
  actualizarPagosCiclos,
  borrarPagosCiclos,
  activarPagosCiclos,
  getCicloByAlumno,
  getCicloByCiclo,
  getCicloByCurso,
  getPagosCiclosById,
}
