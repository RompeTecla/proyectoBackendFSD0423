const express = require("express");
const db = require("./db");
const { User } = require('./models');
const bcrypt = require('bcrypt');

const app = express();

const PORT = 3000;

app.use(express.json())

app.get('/health', (req,res) => {    //PRIMER ENDPOINT DE PRUEBA
    return res.send('healthy');
});


app.post('/register', async(req,res) => {
    console.log(req.body);

    if(req.body.password.length < 4) {
        return res.send('La pasword debe tener al menos 4 caracteres alfanuméricos')
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8)

    const newUser = await User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            role_id: 1
        }
    );


    return res.send(newUser);
})




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
