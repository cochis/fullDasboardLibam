const { response } = require("express");
const bcrypt = require("bcryptjs");
const TarjetaPago = require("../models/tarjetaPago");
const { generarJWT } = require("../helpers/jwt");
//getTarjetaPagos TarjetaPago
const getTarjetaPagos = async (req, res) => {
  const tarjetaPagos = await TarjetaPago.find(
    {}

  )

    .populate('ciclo')
    .populate('alumno')
    .populate('curso')
    .populate('colegiatura')
    ;
  res.json({
    ok: true,
    tarjetaPagos
  });
};

//crearTarjetaPago TarjetaPago
const crearTarjetaPago = async (req, res = response) => {
  console.log('req.body::: ', req.body);
  const { alumno, ciclo, curso } = req.body;
  const uid = req.uid;
  const tarjetaPago = new TarjetaPago({
    usuario: uid,
    ...req.body,
  });

  try {
    const existeClave = await TarjetaPago.findOne({ "alumno": alumno, "ciclo": ciclo, "curso": curso });
    console.log('existeClave::: ', existeClave);
    if (existeClave) {
      return res.status(400).json({
        ok: false,
        msg: "El tarjeta de pago ya está registrada",
      });
    }
    await tarjetaPago.save();
    res.json({
      ok: true,
      tarjetaPago,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado...  revisar logs",
    });
  }
};

//actualizarTarjetaPago TarjetaPago
const actualizarTarjetaPago = async (req, res = response) => {
  //Validar token y comporbar si es el starjetaPago

  const uid = req.params.id;
  try {
    const tarjetaPagoDB = await TarjetaPago.findById(uid);

    if (!tarjetaPagoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un tarjetaPago",
      });
    }
    const { ...campos } = req.body;
    const tarjetaPagoActualizado = await TarjetaPago.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      tarjetaPagoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const borrarTarjetaPago = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const tarjetaPagoDB = await TarjetaPago.findById(uid);
    if (!tarjetaPagoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un tarjetaPago",
      });
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      tarjetaPago,
      google,
      ...campos
    } = req.body;

    campos.activated = false;
    const tarjetaPagoActualizado = await TarjetaPago.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      tarjetaPagoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const activarTarjetaPago = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const tarjetaPagoDB = await TarjetaPago.findById(uid);
    if (!tarjetaPagoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un tarjetaPago",
      });
    }

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      password,
      img,
      tarjetaPago,
      google,
      ...campos
    } = req.body;

    campos.activated = true;
    const tarjetaPagoActualizado = await TarjetaPago.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      tarjetaPagoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const getTarjetaPagosById = async (req, res = response) => {
  const uid = req.params.uid;
  try {
    const tarjetaPagoDB = await TarjetaPago.findById(uid)

      .populate('ciclo')
      .populate('gastos')
      .populate('cantidadPagos')
      .populate('alumno')
      .populate('curso')
      .populate('inscripcion')
      .populate('libro')
      .populate('colegiatura');
    if (!tarjetaPagoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un catalogo",
      });
    }
    res.json({
      ok: true,
      tarjetaPago: tarjetaPagoDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
module.exports = {
  getTarjetaPagos,
  crearTarjetaPago,
  actualizarTarjetaPago,
  borrarTarjetaPago,
  activarTarjetaPago,
  getTarjetaPagosById,
};
