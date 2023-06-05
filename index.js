const express = require("express");

const app = express();

const PORT = 3000;


app.get('/health', (req,res) => {    //PRIMER ENDPOINT DE PRUEBA
    return res.send('healthy');
});

app.listen(3000, () => {
    console.log("Server está corriendo en el PUERTO: " + PORT)
});
