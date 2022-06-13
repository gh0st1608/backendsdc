const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CategoriaSchema = new Schema(
  {
    Nombre: { type: String, required: true },
    Descripcion: { type: String, required: true },
    Activo: { type: Boolean, required: true },
  },
  { 
    collection: 'categoria' 
  }
  );

const Categoria = mongoose.model('categoria', CategoriaSchema);

var crearCategoria = async({nombre,descripcion,estado}) => {
  const categoria = new Categoria({
      Nombre: nombre,
      Activo: estado,
      Descripcion: descripcion

  });

  try {
    await categoria.save(); 
    console.log('categoria creada con exito')
    return categoria;


  } catch (error) {
    console.log(error)
    console.log('no reservo con exito')
    return null;
  }
  
}


module.exports = {
  Categoria,
  crearCategoria
};