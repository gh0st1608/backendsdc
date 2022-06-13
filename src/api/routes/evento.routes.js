const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/evento.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/actualizar', EventoController.actualizar);
router.post('/listar', EventoController.listar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;