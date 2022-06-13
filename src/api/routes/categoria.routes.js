const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoria.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/actualizar', CategoriaController.actualizar);
router.post('/listar', CategoriaController.listar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;