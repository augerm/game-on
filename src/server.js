const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.ws('/', function(ws, req) {
	ws.on('message', function(msg) {
		console.log(msg);
		ws.send(msg);
  	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));