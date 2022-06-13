const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/producto.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/actualizar', ProductoController.actualizar);
router.post('/listar', ProductoController.listar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;