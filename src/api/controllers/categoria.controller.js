const CategoriaServices = require('../services/categoria.services');

exports.actualizar = async (req, res) => {

  const { Nombre: nombre, Descripcion: descripcion,ItemCategoria: categoria, ItemEstado: estado} = req.body;
  //const { NombreImagen: nombreImagen } = req.files.Imagen.name
  console.log(req.body)
  try {
    //console.log('controllers')
    const categoriaRes = await CategoriaServices.actualizarCategoria({nombre,descripcion,categoria,estado});
    
    return res.json({
      success: true,
      categoriaRes,
     });
  } catch (err) {
    console.log('fallo')
    console.log(err)
    next(err);
  }
};

exports.listar = async (req,res) => {

  try {
    console.log('controller listar categorias')
    const categorias = await CategoriaServices.listarCategorias();
    console.log(categorias)
    return res.json({
      categorias
     });
  } catch (err) {
    console.log('fallo')
    console.log(err)
    next(err);
  }

}