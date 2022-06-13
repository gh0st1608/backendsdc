const {Usuario} = require('../models/usuario.model');


const buscarUsuario = async ({usuario}) =>{

    try{

        const objUsuario = await Usuario.findOne({Usuario : usuario})

        return objUsuario

    }catch(e){
        console.log(e);

    }
}

const validarClave = async ({usuario,clave}) => {

    try {
        const objUsuario = await Usuario.findOne({Usuario : usuario})
      
        if ( objUsuario.Clave === clave ){
            console.log('clave correcta')
            return 1
        }else{
            console.log('clave incorrecta')
            return 0
        }
    }catch(err){
        console.log(err);

    }
}

const guardarToken = async ({usuario,clave,token}) => {

    try {

        const objUsuario = await Usuario.findOneAndUpdate({
            Usuario : usuario,
            Clave : clave
        },{Token : token})

        
                                                                        
        return 1
    }catch(err){
        return 0
    }
}



module.exports = {
    buscarUsuario,
    validarClave,
    guardarToken
}
 
