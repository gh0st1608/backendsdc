const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/email.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/reservar', EmailController.reservar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;


