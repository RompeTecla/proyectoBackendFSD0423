const express = require("express");
const db = require("./db");
const { User } = require('./models');
const bcrypt = require('bcrypt');
const authController = require('../controllers/authController');
const router = require("./router");


const app = express();

const PORT = 3000;

app.use(express.json())

//gestiona las rutas de router
app.use(router)

app.get('/health', (req,res) => {    //PRIMER ENDPOINT DE PRUEBA
    return res.send('healthy');
});


app.post('/register', )




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
