const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
const Usuarios = [
    { usuario: "solbriceno", clave: "123456" },
    { usuario: "pablo", clave: "2345" },
    { usuario: "galletas", clave: "galletas123" }
];

router.get('/usuarios', (req, res) => {
    res.status(200).json(Usuarios);
});

// Ruta POST para manejar la autenticación
router.post('/login', (req, res) => {
    const { usuario, clave } = req.body;
    console.log('Usuario y clave recibidos:', usuario, clave);

    // Busca el usuario en el array de Usuarios
    const usuarioEncontrado = Usuarios.find(u => u.usuario === usuario && u.clave === clave);
    console.log('Usuario encontrado:', usuarioEncontrado);

    if (usuarioEncontrado) {
        res.status(200).json({ mensaje: 'Autenticación exitosa' });
    } else {
        res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
});

module.exports = router;
