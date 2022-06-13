const {Evento,crearEvento} = require('../models/evento.model');
const { guardarImagen } = require ('../utils/auxiliares')





const actualizarEvento = async ({id,nombre,descripcion,dia,mes,nombreOriginal,ruta}) =>{

    try{
        console.log('entro a actualiza evento')
        //console.log(imagen)

        const objEventoCreado = await Evento.findOne({Id : id})

     
        if (objEventoCreado === null){
            console.log('evento nuevo')
            return await crearEvento({id,nombre,descripcion,dia,mes,nombreOriginal,ruta})
        }
        else
        {
            console.log('evento antiguo')
            const objEventoActualizado = await Evento.findOneAndUpdate
            ({
                Id : id,
            },
            {
               Titulo: nombre,
               Descripcion: descripcion,
               Dia: dia,
               Mes: mes,
               NombreOriginal: nombreOriginal,
               Ruta : ruta
            },
            {
                new: true
            });

            console.log(objEventoActualizado)

            return objEventoActualizado;
        }
        

    }catch(e){
        console.log(e);

    }
}

const listarEventos = async () =>{

    console.log('entro a evento services')
    const eventoAux = {Id:'',Titulo:'',Descripcion:'',Dia:'',Mes:'',NombreOriginal:'',Ruta:''}
    const eventos = await Evento.find({}).sort({'Id':1})
    const limiteEventos = 8 - eventos.length

    for(let i=0; i < limiteEventos;i++){
        eventos.push(eventoAux)

    }
    console.log(eventos)
    return eventos;

}

module.exports = {
    actualizarEvento,
    listarEventos,
    guardarImagen
}
 