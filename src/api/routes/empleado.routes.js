const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleado.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/actualizar', EmpleadoController.actualizar);
router.post('/listar', EmpleadoController.listar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;