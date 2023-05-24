const express = require('express')
const morgan = require('morgan')
const http = require('http')

const app = express()

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(express.json({ limit: '500kb', extended: true }));

require('./src/services')(app);

app.listen(17000, () => {
	console.log('[HTTP] El servidor esta escuchando en el puerto: ' + 17000 + '...');
});
