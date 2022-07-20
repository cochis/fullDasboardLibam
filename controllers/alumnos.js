const { response } = require("express");
const bcrypt = require("bcryptjs");
const Alumno = require("../models/alumno");
const { generarJWT } = require("../helpers/jwt");
//getAlumnos Alumno
const getAlumnos = async (req, res) => {
  const alumnos = await Alumno.find({})
    .populate("usuarioCreated", "nombre uid")
    .populate("sexo", "nombre clave uid")
    .populate("currentCurso", "nombre clave uid")
    .populate("tipoSanguineo", "nombre clave uid")
    .populate("padres", "nombre  uid")
    .populate("usuario", "nombre email uid");

  res.json({
    ok: true,
    alumnos,
    uid: req.uid,
  });
};
const getAlumnoById = async (req, res) => {
  const uid = req.params.uid;
  try {
    const alumnoDB = await Alumno.findById(uid)
      .populate("usuarioCreated", "nombre uid")
      .populate("currentCurso", "nombre clave uid")
      .populate(
        "padres",
        "titular recoger nombre fechaNacimiento img nacionalidad curp telefonoCelular telefonoCasa email redSocial ocupacion  gradoMaximoEstudios estadoCivil calle numeroExterior numeroInterior colonia municipio estado codigoPostal entreCalles parentesco notas activated"
      )
      .populate("usuario", "nombre email uid");
    if (!alumnoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un alumno",
      });
    }
    res.json({
      ok: true,
      alumno: alumnoDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

//crearAlumno Alumno
const crearAlumno = async (req, res = response) => {
  const { curp, nombre } = req.body;
  const uid = req.uid;
  const alumno = new Alumno({
    usuarioCreated: uid,
    ...req.body,
  });

  try {
    const existeCurp = await Alumno.findOne({ curp });
    if (existeCurp) {
      return res.status(400).json({
        ok: false,
        msg: "El CURP ya esta registrado",
      });
    }
    await alumno.save();
    res.json({
      ok: true,
      alumno,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado...  revisar logs",
    });
  }
};

//actualizarAlumno Alumno
const actualizarAlumno = async (req, res = response) => {
  //Validar token y comporbar si es el salumno

  const uid = req.params.id;
  try {
    const alumnoDB = await Alumno.findById(uid).populate(
      "padres",
      "titular recoger nombre fechaNacimiento img nacionalidad curp telefonoCelular telefonoCasa email redSocial ocupacion  gradoMaximoEstudios estadoCivil calle numeroExterior numeroInterior colonia municipio estado codigoPostal entreCalles parentesco notas activated"
    );

    if (!alumnoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un alumno",
      });
    }

    const alumnoActualizado = await Alumno.findByIdAndUpdate(uid, req.body, {
      new: true,
    });
    res.json({
      ok: true,
      alumnoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};
const borrarAlumno = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const alumnoDB = await Alumno.findById(uid);
    if (!alumnoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un alumno",
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
    const alumnoActualizado = await Alumno.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      alumnoActualizado,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const activarAlumno = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const alumnoDB = await Alumno.findById(uid);
    if (!alumnoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No exite un alumno",
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
    const alumnoActualizado = await Alumno.findByIdAndUpdate(uid, campos, {
      new: true,
    });
    res.json({
      ok: true,
      alumnoActualizado,
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
  getAlumnos,
  crearAlumno,
  actualizarAlumno,
  borrarAlumno,
  activarAlumno,
  getAlumnoById,
};
