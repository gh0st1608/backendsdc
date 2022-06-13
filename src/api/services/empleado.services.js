const {Empleado,crearEmpleado} = require('../models/empleado.model');
const { guardarImagen } = require ('../utils/auxiliares')





const actualizarEmpleado = async ({id,nombre,apellidoPaterno,apellidoMaterno,cargo,descripcion,nombreOriginal,ruta}) =>{

    try{
        console.log('entro a actualiza empleado')
        //console.log(imagen)

        const objEmpleadoCreado = await Empleado.findOne({Id : id})

     
        if (objEmpleadoCreado === null){
            console.log('empleado nuevo')
            return await crearEmpleado({id,nombre,apellidoPaterno,apellidoMaterno,cargo,descripcion,nombreOriginal,ruta})
        }
        else
        {
            console.log('empleado antiguo')
            const objEmpleadoActualizado = await Empleado.findOneAndUpdate
            ({
                Id : id,
            },
            {
               Nombre : nombre,
               ApellidoPaterno: apellidoPaterno,
               ApellidoMaterno: apellidoMaterno,
               Cargo : cargo,
               Descripcion: descripcion,
               NombreOriginal: nombreOriginal,
               Ruta : ruta
            },
            {
                new: true
            });

            console.log(objEmpleadoActualizado)

            return objEmpleadoActualizado;
        }
        

    }catch(e){
        console.log(e);

    }
}

const listarEmpleados = async () =>{
    console.log('entro a empleado services')
    const empleadoAux = {Id:'',Nombre:'',ApellidoPaterno:'', ApellidoMaterno:'',Cargo:'',Descripcion:'',NombreOriginal:'',Ruta:''}
    const empleados = await Empleado.find({}).sort({'Id':1})
   
    const limiteEmpleados = 4 - empleados.length

    for(let i=0; i < limiteEmpleados;i++){
        empleados.push(empleadoAux)

    }
    console.log(empleados)
    return empleados;

}

module.exports = {
    actualizarEmpleado,
    listarEmpleados,
    guardarImagen
}
 