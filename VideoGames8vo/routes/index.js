var express = require('express');
var router = express.Router();

const {auth, storage, db} = require('../tools/init');
// const upL = require('../public/javascripts/auth')
// const games = []

const newgame = require('../db/new-game');
const { response } = require('express');
const { firestore } = require('firebase-admin');
const array =[]
// RUTAS
router.get('/', function(req, res, next) {
  newgame.newGame()
  res.render('index', { title: 'Express' });
});

router.get('/review', async (req, res) =>{
    const games = await (await db.collection('Juegos').orderBy('calificacion', 'desc').get()).docs.map(doc => ({id: doc.id, ...doc.data()}))
    console.log(games)
    res.render('review', {games: games});
    // db.ref('Juegos').once('value', (snapshot) => {ya estaxd es que estoy probando unas sentencias okXD
    // games = snapshot.docs;
    // res.render('review', {games:games})
});

router.get('/juegos', async (req, res) => {
  const games = await (await db.collection('Juegos').get()).docs.map(doc => ({id: doc.id, ...doc.data()}))
  console.log(games)
  res.render('juegos', {games: games});
});
router.get('/admin', async (req, res) => {
  const games = await (await db.collection('Juegos').where("status", "==", false).get()).docs.map(doc => ({id: doc.id, ...doc.data()}))
  res.render('admin', {games: games});
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});
router.get('/buscar', function(req, res, next) {
  res.render('buscar', { title: 'buscar'});
});

//Peticiones

router.get('/buscarJuego', async (req, res) => {
  try{
    const games = await (await db.collection('Juegos').get()).docs.map(doc => ({id: doc.id, ...doc.data()}))
    res.send({games: games});
  }catch(e){
    res.status(500).send(e)
  }
});



//Login



// REGISTRAR NUEVO JUEGO



router.post('/upGame', async (req, res)=>{
  try{
    const newGame={
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      img: req.body.img,
      status: false,
      calificacion:8
    }
    console.log(newGame)
    const res = await db.collection('Juegos').doc().set(newGame);
    // // res.status(201).send(`Created a new user: ${newGame.id}`);
    console.log(res)
    res.status(200).send(result);
  }catch(e){
    res.status(500).send(e)
  }

})

router.post('/admin', async (req, res) => {
  try{
    const id= req.body.id
    const juegosRef = db.collection('Juegos').doc(id)
    const resp = await juegosRef.update({status: true})
    console.log(resp)
    // ({
    //   "status": true
    // }, {merge: true});
    res.render('admin', {games: games});
  }catch(e){
    res.send(e)
  }
})
//OBTENER LISTA DE JUEGOS

//REGISTRAR NUEVO USUARIO


module.exports = router;
