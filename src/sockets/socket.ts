import { Band } from "../models/band";
import { Bands } from "../models/bands";

const { io } = require("../index");

// const bands = require('../models/bands');
// bands.add

const bands = new Bands();

bands.addBand(new Band("Codplay"));

bands.addBand(new Band("The Chainsmorkers"));
bands.addBand(new Band("Graffen"));
bands.addBand(new Band("Queen"));
bands.addBand(new Band("Flutter"));

// console.log(bands);
//Mensaje de Socket
io.on("connection", (client) => {
  // client.on('event', data => {
    client.emit('active-bands',bands.getBand())
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

  client.on('vote-band',(payload)=>{
    bands.voteBand(payload.id);
    io.emit('active-bands',bands.getBand());
  });

  client.on('add-band',(payload)=>{
    const newBand= new Band(payload.name);  
    bands.addBand(newBand);
    io.emit('active-bands',bands.getBand());
  });

  client.on('delete-band',(payload)=>{
    bands.deleteBand(payload.id);
    io.emit('active-bands',bands.getBand());
  });



});
