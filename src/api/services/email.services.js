const {Reserva,crearReserva} = require('../models/reserva.model');
const Ses = require('../loaders/aws')

const emailFrom = 'egalindoa@uni.pe';

/*
    ses_mail = ses_mail + "Subject: Reserva - " + nombres + "\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    ses_mail = ses_mail + "Fecha: " + fecha + "\n\n";
    ses_mail = ses_mail + "Hora: " + hora + "\n\n";
    ses_mail = ses_mail + "Mensaje: " + contenido + "\n\n";
    ses_mail = ses_mail + "--NextPart--";
*/



exports.reservar = async ({
    nombres,
    celular,
    correo,
    invitado,
    fecha,
    hora,
    contenido
  }) => {
    
    const objReserva = await crearReserva(nombres,celular,correo,invitado,fecha,hora,contenido);
    
    console.log(objReserva)

    var ses_mail = 
    "From: 'Mensaje De Reserva SDC-AWS' <" + emailFrom + ">\n" +
    "To: " + emailFrom + "\n" +
    "Subject: Reserva - " + objReserva.Nombres + "\n" +
    "MIME-Version: 1.0\n" +
    "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n" +
    "--NextPart\n" + 
    "Content-Type: text/html; charset=us-ascii\n\n" +
    `\n` + "<br>" + "Fecha: " + `\n` + objReserva.Fecha + 
    `\n` + "<br>" + "Hora: " + `\n` + objReserva.Hora + 
    `\n` + "<br>" + "Mensaje: " + objReserva.Contenido + `\n`
    "--NextPart--";

    console.log(ses_mail);
    
   
    var params = {
        RawMessage: { Data: new Buffer(ses_mail) },
        Destinations: [ emailFrom ],
        Source: "'Mensaje De Reserva SDC-AWS' <" + emailFrom + ">'"
    };
    
    Ses.sendRawEmail(params,function(err){
        if(err) {
            console.log(err);
        } 
        else {
            console.log('Exito en el envio');
        }
    });   
    
}

// Verify email addresses.
/*const verificar =  async () => {
    var params = {
        EmailAddress: email
    };
    
    ses.verifyEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
};*/

// Listing the verified email addresses.
/*router.get('/list', function (req, res) {
    ses.listVerifiedEmailAddresses(function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
});
*/

// Deleting verified email addresses.
/*router.get('/delete', function (req, res) {
    var params = {
        EmailAddress: email
    };

    ses.deleteVerifiedEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
});
*/




