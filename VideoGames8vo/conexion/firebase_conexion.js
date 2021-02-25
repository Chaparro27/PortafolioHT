const { Router } = require('express');
const  router = Router();

const {db,auth,storage} = require('../tools/init.js')

// var ref =admin.database().ref('usuarios/mensaje')
// ref.child('mensaje').set({
// nombre:'prueba',
// mensaje:'Bienvenido'
// })
