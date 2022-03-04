
const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user.js');


const app = express();
app.use(express.json());
app.use("/api/user", user);

const port = process.env.PORT || 3003
app.listen(port, ()=> console.log('escuchando puerto ' + port));


mongoose.connect('mongodb://localhost/biblioMean', {useNewUrlParser: true,
useUnifiedTopology: true})
.then(()=> console.log('conectado a mongo DB'))
.catch(error => console.log('No se ha conectado a Mongo DB'));