const { response } = require("express");
const bcrypt = require("bcryptjs");
const Maestro = require("../models/maestro");
const { generarJWT } = require("../helpers/jwt");
//getMaestros Maestro
const getMaestros = async (req, res) => {
  const maestros = await Maestro.find({})
    .populate("documentosEntregados", "uid nombre clave")
    .populate("materias", "uid nombre clave")
    .populate("grados", "uid nombre clave")
    .populate("sexo", "uid nombre clave")
    .populate("tipoSanguineo", "uid nombre clave")
    .populate(
      "usuarioCreated",
      "uid nombre apellidoPaterno apellidoMaterno email "
    );
  res.json({
    ok: true,
    maestros,
    uid: req.uid,
  });
};

//crearMaestro Maestro
const crearMaestro = async (req, res = response) => {
  const { curp, nombre } = req.body;
  const uid = req.uid;
  const maestro = new Maestro({
    usuario: uid,
    ...req.body,
  });
  console.log("maestro", maestro);

  try {
    const existeCurp = await Maestro.findOne({ curp });
    if (existeCurp) {
      return res.status(400).json({
        ok: false,
        msg: "El curp ya está registrado",
      });
    }
    await maestro.save();
    res.json({
      ok: true,
      maestro,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado...  revisar logs",
    });
  }
};

//actualizarMaestro Maestro
const actualizarMaestro = async (req, res = response) => {
  //Validar token y comporbar si es el smaestro

  const uid = req.params.id;
  try {
    const maestroDB = await Maestro.findById(uid);

    if (!maestroDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un maestro",
      });
    }

    const maestroActualizado = await Maestro.findByIdAndUpdate(uid, req.body, {
      new: true,
    });
    res.json({
      ok: true,
      maestroActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const borrarMaestro = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const maestroDB = await Maestro.findById(uid);
    if (!maestroDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un maestro",
      });
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
    } = req.body;

    campos.activated = false;
    const maestroActualizado = await Maestro.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      maestroActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const activarMaestro = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const maestroDB = await Maestro.findById(uid);
    if (!maestroDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un maestro",
      });
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
    } = req.body;

    campos.activated = true;
    const maestroActualizado = await Maestro.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      maestroActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getMaestroById = async (req, res = response) => {
  const uid = req.params.uid;
  try {
    const maestroDB = await Maestro.findById(uid);
    if (!maestroDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un maestro",
      });
    }
    res.json({
      ok: true,
      maestro: maestroDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
module.exports = {
  getMaestros,
  crearMaestro,
  actualizarMaestro,
  borrarMaestro,
  activarMaestro,
  getMaestroById,
};
