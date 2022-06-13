const aws  = require('aws-sdk');
const { AWS_ENV } = require('../../api/config/vars');

console.log('entro a aws');

// Cargar credenciales con un objeto.
aws.config.update({
    accessKeyId: AWS_ENV.KEY_ID,
    secretAccessKey: AWS_ENV.SECRET_KEY,
    region: AWS_ENV.REGION_ID,
  });

// Instantiate SES.
const ses = new aws.SES();

console.log('despues de la instancia ses de aws');
module.exports = ses;