/*
Ruta : api/documentosEntregados
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getDocumentosEntregados,
  crearDocumentosEntregados,
  actualizarDocumentosEntregados,
  borrarDocumentosEntregados,
  activarDocumentosEntregados,
} = require("../controllers/documentosEntregados");
const { validarAdminJWT } = require("../middlewares/validar-jwt");
const router = Router();

router.get("/", validarAdminJWT, getDocumentosEntregados);
router.post(
  "/",
  [
    validarAdminJWT,
    check("usuario", "El usuario es obligatorio").not().isEmpty(),
    check("documento", "La documenyo es obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),

    validarCampos,
  ],
  crearDocumentosEntregados
);

router.put(
  "/:id",
  [
    validarAdminJWT,
    check("usuario", "El usuario es obligatorio").not().isEmpty(),
    check("documento", "La documenyo es obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("lastEdited", "La fecha de edición es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  actualizarDocumentosEntregados
);

router.put(
  "/borrarDocumentosEntregados/:id",
  [
    validarAdminJWT,
    check("lastEdited", "La fecha de edición es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  borrarDocumentosEntregados
);
router.put(
  "/activarDocumentosEntregados/:id",
  [
    validarAdminJWT,
    check("lastEdited", "La fecha de edición es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  activarDocumentosEntregados
);

module.exports = router;
