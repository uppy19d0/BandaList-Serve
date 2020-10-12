const { io } = require('../index');
//Mensaje de Socket
io.on('connection', client => {
    // client.on('event', data => {
    console.log("Cliente conectado ");
    // });
    client.on('disconnect', () => {
        console.log("Cliente  desconectado");
    });
    client.on('message', (payload) => {
        console.log("MENSAJE!!", payload.nombre);
        io.emit('message', { admin: 'Nuevo Mnesaje' });
    });
});