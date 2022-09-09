const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();

const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

app.get('/controller', require, response) 
app.request (message ("Validation message")); 






/*_________________________________________
1) Create an endpoint to GET a validation message to test if the endpoint is working
/*________________________________________
2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________ */

ioServer.on('real-time', (socket) => {

    io.on('real-time', socket => {
        console.log(socket.id);
    
        socket.on('controller', Controller => {
            socket.broadcast.emit('display', Controller);
        });
    
        socket.on('public-controller', instructions => {
            console.log(instructions);
            socket.broadcast.emit('public-display', instructions);
        })
    
    });

});

/*___________________________________________
3) Create an endpoint to POST user score and print it
_____________________________________________ */

app.post('/display', require, response)
    console.log(send.message());

app.listen(5050);

