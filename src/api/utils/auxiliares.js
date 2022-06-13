const path = require('path');
const { HOST } = require('../config/vars')


const guardarImagen = async ({nombre,imagenType,mv})=>{
    try{
    const tipo = imagenType.slice(imagenType.indexOf("/",0)+1);
    const uploadPath =  path.join(__dirname,'/../uploads/',nombre + '.' + tipo);
    const serverPath = 'https://' + HOST +':3000/' + nombre + '.' + tipo;
    console.log(tipo)
    console.log(serverPath)
    mv(uploadPath)

        return serverPath
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    guardarImagen
}