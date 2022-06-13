const express = require('express');
const db = require('../loaders/mongoose');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const { TOKEN_JWT } = require('../config/vars')
//const { converter, notFound, handler } = require('../middlewares/error');
const routes = require('../../api/routes/');
//const middleware  = require('../middlewares/index');
const app     = express();

app.use(cors());
//app.use(express.json());


app.set('llave',TOKEN_JWT)
console.log(app.get('llave'))

//app.use(middleware)

app.use(express.json());
//app.use(express.raw({type:'image/*'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/../','uploads')));
//console.log(path.join(__dirname,'/../','uploads'))
app.use(fileUpload())



//app.use(converter);

//app.use(notFound);

//app.use(handler);

app.use(routes);

app.initServer = () => {
    const server = app.listen(3000, function () {
        const host = server.address().address;
        const port = server.address().port;
        console.log('AWS SES example app listening at http://%s:%s', host, port);
    });
};

module.exports = app;

// Start server.
