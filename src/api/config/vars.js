const path = require('path');
const dotenv = require('dotenv');

/*
dotenv.config({
  path: path.join(__dirname,'/./../../.env')
})
*/



console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV.trim() == 'production'){
  dotenv.config({
    path: path.resolve(__dirname, '../../.env') ///${process.env.NODE_ENV}   Users/ismael/Documents/proyectos/NodeJS/Diplomado-Backend-4/clase6/src/shared/config
  });

  console.log(process.env.HOST);
  console.log(process.env.AWS_KEY_ID);
  }else{
    dotenv.config({
      path: path.resolve(__dirname, `../../development.env`) 
    });
    console.log(path.resolve(__dirname, '../../development.env'))
    console.log(process.env.HOST);
    console.log(process.env.AWS_KEY_ID);

}

const vars = {
  ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  TOKEN_JWT: process.env.TOKEN_ADMIN,
  MONGO_ENV: {
    MONGO_URI: process.env.DB_MONGO_URI,
  },
  AWS_ENV: {
    KEY_ID: process.env.AWS_KEY_ID,
    SECRET_KEY: process.env.AWS_SECRET_KEY,
    REGION_ID : process.env.AWS_REGION_ID
  },
};



  
module.exports = vars;