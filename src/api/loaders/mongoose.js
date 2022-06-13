const mongoose = require('mongoose');
const vars = require('../../api/config/vars');



mongoose.connect(vars.MONGO_ENV.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

console.log('ANTES DE LA CONEXION');

const connection = mongoose.connection;

try {
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
}catch (error){
  console.log(error);
}
