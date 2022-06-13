
const jwt = require('jsonwebtoken')

const middleware = function (req,res,next) {

const expirationSeconds = 60 * 60 * 24 * 7; // one week
const cookieExpiration = Date.now() + expirationSeconds * 1000;

const {Usuario:usuario,Clave:clave, Token:token} = req.body;

if(token == ''){

  const token = jwt.sign(usuario, TOKEN_JWT, {
    expiresIn: 1440
  });

  res.cookie('jwt', token, {expires: new Date(cookieExpiration), httpOnly: true});

  return res.json({
    success: true,
    token: `JWT ${token}`,
    usuario,
    isAdmin,
   });
   
  }

else{
  try {

    var decoded = jwt.verify(token,TOKEN_JWT);
    console.log(decoded);

    return decoded;

  } catch(err) {

    console.log(err);
    next();
    // err
  }
}
  
}

module.exports = middleware;






