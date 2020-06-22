var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/start', function(req, res){
    res.send('start page!');
});

server.listen(process.env.PORT || 80, function(){
    console.log('Server listen on port!'+ server.address().port);
});
