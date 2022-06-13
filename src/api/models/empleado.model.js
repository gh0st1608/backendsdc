const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EmpleadoSchema = new Schema(
  {
    Id: { type: String, required: true },
    Nombre: { type: String, required: true },
    ApellidoPaterno: { type: String, required: true },
    ApellidoMaterno: { type: String, required: true },
    Cargo: { type: String, required: true },
    Descripcion: { type: String, required: true },
    NombreOriginal: { type: String, required: true }, 
    Ruta: { type: String, required: true },  
  },
  { 
    collection: 'empleado' 
  }
  );

const Empleado = mongoose.model('empleado', EmpleadoSchema);

var crearEmpleado = async({id,nombre,apellidoPaterno,apellidoMaterno,cargo,descripcion,nombreOriginal,ruta}) => {
  const empleado = new Empleado({
      Id: id,
      Nombre: nombre,
      ApellidoPaterno: apellidoPaterno,
      ApellidoMaterno: apellidoMaterno,
      Cargo: cargo,
      Descripcion: descripcion,
      NombreOriginal: nombreOriginal,
      Ruta: ruta
  });

  try {
    await empleado.save(); 
    console.log('guardo empleado con exito')
    return empleado;

  } catch (error) {
    console.log(error)
    console.log('no guardo empleado con exito')
    return null;
  }
  
}

module.exports = {
  Empleado,
  crearEmpleado,
};
