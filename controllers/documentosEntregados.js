const { response } = require("express");
const bcrypt = require("bcryptjs");
const DocumentoEntregado = require("../models/documentosEntregado");
const { generarJWT } = require("../helpers/jwt");
// DocumentoEntregado
const getDocumentosEntregados = async (req, res) => {
  const documentosEntregados = await DocumentoEntregado.find(
    {},
    "nombre clave img descripcion activated dateCreated lastEdited usuarioCreated "
  );
  res.json({
    ok: true,
    documentosEntregados,
    uid: req.uid,
  });
};

//crearDocumentoEntregado DocumentoEntregado
const crearDocumentosEntregados = async (req, res = response) => {
  const { clave, nombre } = req.body;
  const uid = req.uid;
  const documentoEntregado = new DocumentoEntregado({
    usuario: uid,
    ...req.body,
  });

  try {
    const existeClave = await DocumentoEntregado.findOne({ clave });

    await documentoEntregado.save();
    res.json({
      ok: true,
      documentoEntregado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado...  revisar logs",
    });
  }
};

//actualizarDocumentoEntregado DocumentoEntregado
const actualizarDocumentosEntregados = async (req, res = response) => {
  //Validar token y comporbar si es el sdocumentoEntregado

  const uid = req.params.id;
  try {
    const documentoEntregadoDB = await DocumentoEntregado.findById(uid);

    if (!documentoEntregadoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un documentoEntregado",
      });
    }
    const { ...campos } = req.body;
    const documentoEntregadoActualizado =
      await DocumentoEntregado.findByIdAndUpdate(uid, campos, {
        new: true,
      });
    res.json({
      ok: true,
      documentoEntregadoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const borrarDocumentosEntregados = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const documentoEntregadoDB = await DocumentoEntregado.findById(uid);
    if (!documentoEntregadoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un documentoEntregado",
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

    campos.entregado = false;
    const documentoEntregadoActualizado =
      await DocumentoEntregado.findByIdAndUpdate(uid, campos, {
        new: true,
      });
    res.json({
      ok: true,
      documentoEntregadoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const activarDocumentosEntregados = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const documentoEntregadoDB = await DocumentoEntregado.findById(uid);
    if (!documentoEntregadoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un documentoEntregado",
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

    campos.entregado = true;
    const documentoEntregadoActualizado =
      await DocumentoEntregado.findByIdAndUpdate(uid, campos, {
        new: true,
      });
    res.json({
      ok: true,
      documentoEntregadoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getDocumentosEntregados,
  crearDocumentosEntregados,
  actualizarDocumentosEntregados,
  borrarDocumentosEntregados,
  activarDocumentosEntregados,
};
