const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsuarioSchema = new Schema(
  {
    Usuario: { type: String, required: true },
    Clave: { type: String, required: true },
    Token: { type: String, required: true },
  },
  { 
    collection: 'usuario' 
  }
  );

const Usuario = mongoose.model('usuario', UsuarioSchema);


module.exports = {
  Usuario
};