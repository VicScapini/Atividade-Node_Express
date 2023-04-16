const express = require('express');
const usuarios = require ('./routes/usuarios');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require ("path");

const app = express();
app.use(bodyParser.json());

app.use(express.json()); 
app.use('/usuarios', usuarios);

const log = fs.createWriteStream(
    path.join(__dirname, "./logs", `express.log`), { flags: "a" }
);

morganBody(app,{
noColors: true,
stream: log
});


app.listen(3000, () => {
    console.log('Servidor iniciando na porta 3000');
});