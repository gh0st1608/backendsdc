const EventoServices = require('../services/evento.services');

exports.actualizar = async (req, res) => {

  const { Item: id, Titulo: nombre, ImagenName: nombreOriginal,ImagenType: imagenType, Descripcion: descripcion, Fecha:fecha, Mes:mes, Dia:dia} = req.body;
  //const { NombreImagen: nombreImagen } = req.files.Imagen.name
  console.log(req.files.Imagen)
  console.log(req.body)
  const mv = req.files.Imagen.mv
  console.log(req.files.Imagen.mv)
  console.log(req.body)
  //console.log(requestbody)
  try {
    console.log('controllers')
    const ruta = await EventoServices.guardarImagen({nombre,imagenType,mv})
    const evento = await EventoServices.actualizarEvento({id,nombre,descripcion,dia,mes,nombreOriginal,ruta});
    
    return res.json({
      evento,
     });
  } catch (err) {
    console.log(err)
    console.log('fallo')
    next(err);
  }
};

exports.listar = async (req,res) => {

  try {
    console.log('controller listar eventos')
    const eventos = await EventoServices.listarEventos();
    return res.json({
      eventos
     });
  } catch (err) {
    console.log(err)
    console.log('fallo')
    next(err);
  }

}