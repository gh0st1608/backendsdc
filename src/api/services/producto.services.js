const {Producto,crearProducto} = require('../models/producto.model');
const { guardarImagen } = require ('../utils/auxiliares')

const actualizarProducto = async ({id,nombre,precio,nombreOriginal,descripcion,categoria,seccion,ruta}) =>{

    try{
        //console.log('entro a actualizaproducto')
        //console.log(imagen)

        const objUsuarioCreado = await Producto.findOne({Id : id,Categoria:categoria,Seccion:seccion})

     
        if (objUsuarioCreado === null){
            console.log('producto nuevo')
            return await crearProducto({id,nombre,precio,nombreOriginal,descripcion,categoria,seccion,ruta})
        }
        else
        {
            console.log('producto antiguo')
            const objUsuarioActualizado = await Producto.findOneAndUpdate
            ({
                Id : id,
            },
            {
               Nombre : nombre,
               Precio : precio,
               NombreOriginal: nombreOriginal,
               Descripcion : descripcion,
               Categoria: categoria,
               Seccion: seccion,
               Ruta : ruta
            },
            {
                new: true
            });

            console.log(objUsuarioActualizado)

            return objUsuarioActualizado;
        }
        

    }catch(e){
        console.log(e);

    }
}

const listarProductos = async ({categoria,seccion}) => {
    const productoAux = {Id:'',Nombre:'',Precio:'',NombreOriginal:'',Descripcion:'',Categoria:categoria,Seccion:'',Ruta:''}
    switch (seccion){
        case 'C':
            console.log('Entro a seccion Carta')
            const productosCarta = await Producto.find({Categoria:categoria}).sort({'Id':1})
            console.log(productosCarta)
            const limiteCarta = 5 - productosCarta.length
            console.log(limiteCarta)
        
            for(let i=0; i < limiteCarta;i++){
                productosCarta.push(productoAux)
        
            }
            //console.log(productosCarta)
            return productosCarta;
            //break

        case 'P':

            const productosPopulares = await Producto.find({Seccion:seccion})     
            const limitePopulares = 4 - productosPopulares.length
        
            for(let i=0; i < limitePopulares;i++){
                productosPopulares.push(productoAux)
        
            }

            return productosPopulares;
            //break

        case 'T':

            const productosPresentacion = await Producto.find({Seccion:seccion})     
            const limitePresentacion = 4 - productosPresentacion.length
        
            for(let i=0; i < limitePresentacion;i++){
                productosPresentacion.push(productoAux)
        
            }

            return productosPresentacion;
            //break
    }


    //return productos;

}



module.exports = {
    actualizarProducto,
    listarProductos,
    guardarImagen
}
 