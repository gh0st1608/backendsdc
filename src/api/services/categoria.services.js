const {Categoria,crearCategoria} = require('../models/categoria.model');

const actualizarCategoria= async ({nombre,descripcion,categoria,estado}) =>{

    try{
        var objCategoriaActualizado = {};
        if(estado == 'Activo'){
            estado = true
        }else{
            estado = false
        }
        console.log('entro a actualizarCategoria')
        //console.log(imagen)
        if (categoria == '0'){
            console.log('Nueva categoria')
            return await crearCategoria({nombre,descripcion,estado})
        }
        //const objCategoria = await Categoria.findOne({Nombre:categoria})

        else
        {
            console.log('categoria antiguo')
            if (nombre != '' && descripcion != ''){
                console.log('nombre  no vacio y descripcion no vacio')
                objCategoriaActualizado = await Categoria.findOneAndUpdate
                ({
                    Nombre : categoria,
                },
                {
                   Nombre:nombre,
                   Descripcion: descripcion,
                   Activo: estado
                },
                {
                    new: true
                });
            }
            if( nombre != '' && descripcion == ''){
                console.log('nombre vacio y descripcion no vacio')
                    objCategoriaActualizado = await Categoria.findOneAndUpdate
                ({
                    Nombre : categoria,
                },
                {
                   Nombre: nombre,
                   Activo: estado
                },
                {
                    new: true
                });
            }
            if( nombre == '' && descripcion != ''){
                console.log('nombre no vacio y descripcion vacio')
                objCategoriaActualizado = await Categoria.findOneAndUpdate
            ({
                Nombre : categoria,
            },
            {
               Descripcion : descripcion,
               Activo: estado
            },
            {
                new: true
            });
            }
            if( nombre == '' && descripcion == ''){
                console.log('nombre vacio y descripcion vacio')
                objCategoriaActualizado = await Categoria.findOneAndUpdate
            ({
                Nombre : categoria,
            },
            {
               Activo: estado
            },
            {
                new: true
            });
            }

            console.log(objCategoriaActualizado)

            return objCategoriaActualizado;
        }
        

    }catch(e){
        console.log(e);

    }
}


const listarCategorias = async () =>{

    const categorias = await Categoria.find({}).sort({'Nombre':1})
    //console.log(categorias)
    return categorias;

}

module.exports = {
    actualizarCategoria,
    listarCategorias
}
 