const express = require("express");
const db = require("./db")

const app = express();

const PORT = 3000;


app.get('/health', (req,res) => {    //PRIMER ENDPOINT DE PRUEBA
    return res.send('healthy');
});

db.then(() => {
    app.listen(PORT, () => {
        console.log('Server está corriendo en el puerto: ' + PORT)
    })
}).catch((error) => {
    console.error("Error starting server", error.message);
});





app.listen(3001, () => {
    console.log("Server está corriendo en el PUERTO: " + PORT)
});
