const EmailServices = require('../services/email.services');

exports.reservar = async (req, res) => {
  console.log(req.body);
  const { Nombres: nombres, Celular: celular, Correo: correo, Invitado: invitado,Fecha: fecha, Hora: hora, Contenido: contenido} = req.body;
  var requestbody = req.body
  console.log(requestbody)
  try {
    console.log('controllers')
    await EmailServices.reservar({nombres,celular,correo,invitado,fecha,hora,contenido});
    res.json({success: true})
  } catch (err) {
    console.log('fallo')
    next(err);
  }
};