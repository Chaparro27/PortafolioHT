var express = require('express');
var router = express.Router();
const games = [
  {
    id:1,
    name:"League of leyends",
    description:"partidas minimas de 2 horas",
    image:"https://elandroidelibre.elespanol.com/wp-content/uploads/2019/05/League-of-Legends-destacada.jpg"
  },{
    id:2,
    name:"League of leyends 2",
    description:"partidas minimas de 2 horas",
    image:"https://elandroidelibre.elespanol.com/wp-content/uploads/2019/05/League-of-Legends-destacada.jpg"
  }
]

const newgame = require('../db/new-game')

/* GET home page.(index.ejs) */
router.get('/', function(req, res, next) {
  newgame.newGame()
  res.render('index', { title: 'Express' });
});
// RUTAS
/* GET home page.(review.ejs) */
router.get('/review', function(req, res, next) {
  res.render('review', { title: 'TOP MEJOR RAITING', games:games });
});

router.get('/juegos', function(req, res, next) {
  res.render('juegos', { title: 'TOP MEJOR RAITING', games:games});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'TOP MEJOR RAITING', games:games});
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'TOP MEJOR RAITING', games:games});
});

module.exports = router;
