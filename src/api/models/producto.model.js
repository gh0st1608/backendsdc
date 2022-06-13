const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductoSchema = new Schema(
  {
    Id: { type: String, required: true },
    Nombre: { type: String, required: true },
    Precio: { type: String, required: true },
    NombreOriginal:{ type: String, required: true },
    Descripcion:{ type: String},
    Categoria:{ type: String },
    Seccion:{ type: String },
    Ruta:{ type: String, required: true }
  },
  { 
    collection: 'producto' 
  }
  );

const Producto = mongoose.model('producto', ProductoSchema);

var crearProducto = async({id,nombre,precio,nombreOriginal,descripcion,categoria,seccion,ruta}) => {
  console.log(categoria)
  const producto = new Producto({
      Id: id,
      Nombre: nombre,
      Precio: precio,
      NombreOriginal: nombreOriginal,
      Descripcion: descripcion,
      Categoria: categoria,
      Seccion: seccion, //carta,populares,presentacion
      Ruta: ruta
  });

  try {
    await producto.save(); 
    console.log('reservo con exito')
    return producto;


  } catch (error) {
    console.log(error)
    console.log('no reservo con exito')
    return null;
  }
  
}


module.exports = {
  Producto,
  crearProducto
};