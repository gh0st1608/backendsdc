const ProductoServices = require('../services/producto.services');

exports.actualizar = async (req, res) => {

  const { Item: id, Nombre: nombre,Precio: precio, ImagenName: nombreOriginal,ImagenType: imagenType, Descripcion: descripcion,ItemCategoria: categoria, Seccion: seccion} = req.body;
  //const { NombreImagen: nombreImagen } = req.files.Imagen.name
  console.log(req.body)
  const mv = req.files.Imagen.mv
  //console.log(requestbody)
  try {
    console.log('controllers')
    const ruta = await ProductoServices.guardarImagen({nombre,imagenType,mv})
    const productoRes = await ProductoServices.actualizarProducto({id,nombre,precio,nombreOriginal,descripcion,categoria,seccion,ruta});
    
    return res.json({
      success: true,
      productoRes,
     });
  } catch (err) {
    console.log('fallo')
    next(err);
  }
};

exports.listar = async (req,res) => {

  try {
    const {ItemCategoria:categoria, Seccion:seccion}= req.body
    console.log(req.body)
    //console.log('controller listar productos')
    const productos = await ProductoServices.listarProductos({categoria,seccion});
    console.log(productos)
    return res.json({productos});
  } catch (err) {
    console.log(err)
    console.log('fallo')
    next(err);
  }

}