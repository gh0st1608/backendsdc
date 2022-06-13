const express = require('express');
const router = express.Router();

const EmailRoute = require('./email.routes');
const LoginRoute = require('./login.routes');
const ProductoRoute = require('./producto.routes');
const EmpleadoRoute = require('./empleado.routes');
const EventoRoute = require('./evento.routes');
const CategoriaRoute = require('./categoria.routes');

router.use('/email', EmailRoute);
router.use('/login', LoginRoute);
router.use('/producto', ProductoRoute);
router.use('/empleado', EmpleadoRoute);
router.use('/evento', EventoRoute);
router.use('/categoria',CategoriaRoute);

module.exports = router;