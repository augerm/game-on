const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const port = 8080;

console.log(__dirname + '/dist');
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.ws('/', function(ws, req) {
	ws.on('message', function(msg) {
		console.log(msg);
		ws.send(msg);
  	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));