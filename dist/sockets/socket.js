"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const band_1 = require("../models/band");
const bands_1 = require("../models/bands");
const { io } = require("../index");
// const bands = require('../models/bands');
// bands.add
const bands = new bands_1.Bands();
bands.addBand(new band_1.Band);
//Mensaje de Socket
io.on("connection", (client) => {
    // client.on('event', data => {
    console.log("Cliente conectado ");
    // });
    client.on("disconnect", () => {
        console.log("Cliente  desconectado");
    });
    client.on("message", (payload) => {
        console.log("MENSAJE!!", payload.nombre);
        io.emit("message", { admin: "Nuevo Mnesaje" });
    });
    client.on("emit-message", (payload) => {
        client.broadcast.emit("new-message", payload);
    });
    client.on("emit-message-flutter", (payload) => {
        // console.log("tu nombre!!", payload.name ,"de donde",payload.message);
        client.broadcast.emit("emit-message-flutter", payload);
    });
});
//# sourceMappingURL=socket.js.map