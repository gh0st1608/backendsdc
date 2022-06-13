const EmpleadoServices = require('../services/empleado.services');

exports.actualizar = async (req, res) => {

  const { Item: id, Nombre: nombre, ApellidoPaterno:apellidoPaterno, ApellidoMaterno:apellidoMaterno,  Cargo: cargo, ImagenName: nombreOriginal,ImagenType: imagenType, Descripcion: descripcion} = req.body;
  //const { NombreImagen: nombreImagen } = req.files.Imagen.name
  const mv = req.files.Imagen.mv
  console.log(req.body)
  try {
    console.log('controllers Empleado')
    const ruta = await EmpleadoServices.guardarImagen({nombre,imagenType,mv})
    const empleadoRes = await EmpleadoServices.actualizarEmpleado({id,nombre,apellidoPaterno,apellidoMaterno,cargo,nombreOriginal,descripcion,ruta});
    
    return res.json({
      success: true,
      empleadoRes,
     });
  } catch (err) {
    console.log('fallo')
    next(err);
  }
};

exports.listar = async (req,res) => {

  try {
    console.log('controller listar empleados')
    const empleados = await EmpleadoServices.listarEmpleados();
    return res.json({
      empleados
     });
  } catch (err) {
    console.log('fallo')
    next(err);
  }

}