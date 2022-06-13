const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login.controller');

router.get('/ping', (req, res) => {
  res.json({ success: true });
});

router.post('/', LoginController.autenticar);
/*router.get('/verificar',EmailController.verificar);
router.get('/borrar',EmailController.borrar);
router.get('/enviar',EmailController.enviar)
*/
module.exports = router;
