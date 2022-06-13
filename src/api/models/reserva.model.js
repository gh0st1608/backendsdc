const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReservaSchema = new Schema(
  {
    Nombres: { type: String, required: true },
    Contenido: { type: String, required: true },
    Correo: { type: String, required: true },
    Fecha: { type: String, required: true },  
    Hora: { type: String, required: true },
  },
  { 
    collection: 'reserva' 
  }
  );

const Reserva = mongoose.model('reserva', ReservaSchema);

var crearReserva = async(nombres,celular,correo,invitado,fecha,hora,contenido) => {
  const reserva = new Reserva({
      Nombres: nombres,
      Celular: celular,
      Correo: correo,
      Invitado: invitado,
      Fecha: fecha,
      Hora: hora,
      Contenido: contenido
  });

  try {
    await reserva.save(); 
    console.log('reservo con exito')
    return reserva;

  } catch (error) {
    console.log('no reservo con exito')
    return null;
  }
  
}

module.exports = {
  Reserva,
  crearReserva,
};


