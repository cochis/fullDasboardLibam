/*
Ruta : api/tarjetaPagos
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const {
  getTarjetaPagos,
  crearTarjetaPago,
  actualizarTarjetaPago,
  activatedTarjetaPago,

  getTarjetaPagosById
} = require('../controllers/tarjetaPago')
const { validarAdminJWT } = require('../middlewares/validar-jwt')
const router = Router()

router.get('/', validarAdminJWT, getTarjetaPagos)



router.post(
  '/',
  [
    validarAdminJWT,
    check('alumno', 'El alumno es obligatorio').not().isEmpty(),
    check('cantidadPagos', 'La cantidad de pagos es obligatoria').not().isEmpty(),
    check('ciclo', 'El ciclo es obligatorio').not().isEmpty(),
    check('curso', 'El curso es obligatorio').not().isEmpty(),
    check('colegiatura', 'La colegiatura es obligatoria').not().isEmpty(),
    check('libro', 'El cobro de libros es obligatorio').not().isEmpty(),
    check('fechaInscripcion', 'La fecha de inscripción es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  crearTarjetaPago,
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
  actualizarTarjetaPago,
)
router.get("/:uid", validarAdminJWT, getTarjetaPagosById);
router.put(
  '/activatedTarjetaPago/:id',
  [
    validarAdminJWT,
    check('lastEdited', 'La fecha de edición es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  activatedTarjetaPago,
)


module.exports = router
