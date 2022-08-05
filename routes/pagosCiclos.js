/*
Ruta : api/pagosCiclos
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const {
  getPagosCiclos,
  crearPagosCiclos,
  actualizarPagosCiclos,
  borrarPagosCiclos,
  activarPagosCiclos,
  getCicloByAlumno,
  getCicloByCiclo,
  getCicloByCurso,
  getPagosCiclosById,
} = require('../controllers/pagosCiclos')
const { validarAdminJWT } = require('../middlewares/validar-jwt')
const router = Router()

router.get('/', validarAdminJWT, getPagosCiclos)
router.get('/:uid', validarAdminJWT, getPagosCiclosById)
router.post(
  '/',
  [
    validarAdminJWT,
    check('alumno', 'El alumno es obligatorio').not().isEmpty(),
    check('ciclo', 'El ciclo es obligatorio').not().isEmpty(),
    check('curso', 'El curso es obligatorio').not().isEmpty(),

    validarCampos,
  ],
  crearPagosCiclos,
)

router.put(
  '/:id',
  [
    validarAdminJWT,
    check('alumno', 'El alumno es obligatorio').not().isEmpty(),
    check('ciclo', 'El ciclo es obligatorio').not().isEmpty(),
    check('curso', 'El curso es obligatorio').not().isEmpty(),
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  actualizarPagosCiclos,
)

router.put(
  '/borrarPagosCiclos/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  borrarPagosCiclos,
)
router.put(
  '/activarPagosCiclos/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  activarPagosCiclos,
)
router.get(
  '/pagosAlumno/:alumno',
  [validarAdminJWT, validarCampos],
  getCicloByAlumno,
)
router.get(
  '/pagosCiclo/:ciclo',
  [validarAdminJWT, validarCampos],
  getCicloByCiclo,
)
router.get(
  '/pagosCurso/:curso',
  [validarAdminJWT, validarCampos],
  getCicloByCurso,
)

module.exports = router