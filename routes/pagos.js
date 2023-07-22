/*
Ruta : api/pagos
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const {
  getPagos,
  crearPago,
  actualizarPago,
  borrarPago,
  activarPago,
  getPagoById,
  cancelarPago,
  restaurarPago,
  getPagosByCiclo,
} = require('../controllers/pagos')
const { validarAdminJWT } = require('../middlewares/validar-jwt')
const router = Router()

router.get('/', validarAdminJWT, getPagos)
router.get('/:uid', validarAdminJWT, getPagoById)
router.get('/getPagosByCiclo/:ciclo', validarAdminJWT, getPagosByCiclo)
router.post(
  '/',
  [
    validarAdminJWT,
    check('clave', 'La clave es obligatoria').not().isEmpty(),
    check('alumno', 'El alumno es obligatorio').not().isEmpty(),
    check('ciclo', 'El ciclo es obligatorio').not().isEmpty(),
    check('curso', 'El curso es obligatorio').not().isEmpty(),
    check('referencia', 'La referencia es obligatoria').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  crearPago,
)

router.put(
  '/:id',
  [
    validarAdminJWT,
    check('alumno', 'El alumno es obligatorio').not().isEmpty(),
    check('ciclo', 'El ciclo es obligatorio').not().isEmpty(),
    check('curso', 'El curso es obligatorio').not().isEmpty(),
    check('referencia', 'La referencia es obligatoria').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  actualizarPago,
)

router.put(
  '/borrarPago/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  borrarPago,
)
router.put(
  '/activarPago/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  activarPago,
)
router.put(
  '/cancelarPago/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  cancelarPago,
)
router.put(
  '/restaurarPago/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  restaurarPago,
)

module.exports = router
