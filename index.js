const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const http = require('http')

const app = express()

app.disable('x-powered-by');
app.use(morgan('dev'));


app.use(express.json());

require('./src/services')(app);

http.createServer(app).listen(17000, () => {
	console.log('[HTTP] El servidor esta escuchando en el puerto: ' + 17000 + '...');
});
