const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EventoSchema = new Schema(
  {
    Id: { type: String, required: true },
    Titulo: { type: String, required: true },
    Descripcion: { type: String, required: true },
    Dia: { type: String, required: true },
    Mes: { type: String, required: true },
    NombreOriginal: { type: String, required: true },
    Ruta: { type: String, required: true },
  },
  { 
    collection: 'evento' 
  }
  );

const Evento = mongoose.model('evento', EventoSchema);

var crearEvento = async({id,nombre,descripcion,dia,mes,nombreOriginal,ruta}) => {
  const evento = new Evento({
      Id: id,
      Titulo: nombre,
      Descripcion: descripcion,
      Dia: dia,
      Mes: mes,
      NombreOriginal: nombreOriginal,
      Ruta: ruta
  });

  try {
    await evento.save(); 
    console.log('guardo evento con exito')
    return evento;

  } catch (error) {
    console.log(error)
    console.log('no guardo Evento con exito')
    return null;
  }
  
}

module.exports = {
  Evento,
  crearEvento,
};
