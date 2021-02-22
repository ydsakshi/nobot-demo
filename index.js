const express = require('express');
const app = express();
const APIAI_TOKEN = '4a110724556fe136a84012800161a4f3275713a7';
const APIAI_SESSION_ID = '12';

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
// const apiai = require('apiai')(APIAI_TOKEN);

io.on('connection', function (socket) {
    console.log('a user connected');
});
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', (text) => {
        // let apiaiReq = apiai.textRequest(text, {
        //     sessionId: APIAI_SESSION_ID
        // });
        // apiaiReq.on('response', (response) => {
        //     let aiText = response.result.fulfillment.speech;
        //     socket.emit('bot reply', aiText); // Send the result back to the browser!
        // });
        console.log("what you said:",text);
        // if(text.includes('not')) socket.emit('bot reply', 'I don\'t understand you');
        // else socket.emit('bot reply', 'I can hear you..');
        socket.emit('bot reply', 'You said :' + text);
        // apiaiReq.on('error', (error) => {
        //     console.log(error);
        // });

        // apiaiReq.end();
    })
})