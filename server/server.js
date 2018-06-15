const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join( __dirname, '../client/dist/client' )));  // make sure this agrees with angular app name

require('./models/mongoose.js');

app.use('/cakes', require('./controllers/routes.js'));