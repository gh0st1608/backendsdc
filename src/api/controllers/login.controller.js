const { TOKEN_JWT } = require('../config/vars')
const jwt = require('jsonwebtoken')
const LoginServices = require('../services/login.services');



exports.autenticar = async (req,res) => {

const {Usuario:usuario,Clave:clave, Token:token} = req.body;

    try {
    
        const resUsuario = await LoginServices.buscarUsuario({usuario})

        if(Object.keys(resUsuario).length === 0){
            res.json({ mensaje: "Usuario no existe"})
        }else{
            const blnRes = await LoginServices.validarClave({usuario,clave})
            //console.log(blnRes)

            if (blnRes && token == ""){
                console.log('clave correcta y no tiene token')
                const token = jwt.sign({usuario},TOKEN_JWT, {
                    expiresIn: 1440
                    });

                console.log(token)
                console.log(blnRes)
                await LoginServices.guardarToken({usuario,clave,token});
    
                      const payload = {
                        check:  true
                    };
    
                    return res.json({
                        success: true,
                        token: `JWT ${token}`,
                        usuario,
                        payload,
                       });

            }else{  
                if (token !== ""){
                    console.log('clave incorrecta y si tiene token ')
                    var decoded = jwt.verify(token,TOKEN_JWT);
                    console.log(decoded)
                }else{
                    console.log('clave incorrecta y no tiene token ')
                    const payload = {
                        check:  false
                    };
    
                    return res.json({success: false,
                        token: `JWT ${token}`,
                        usuario,
                        payload})
                }
                
            }
        }

    }catch(e){
        console.log(e)
    }

}


    

