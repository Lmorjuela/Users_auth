const { getAll, create, getOne, remove, update, verifyUser, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verify');

const routerUser = express.Router();
//Rutas estáticas
routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJwt, logged)
  

//Rutas dinámicas
routerUser.route('/verify/:code')
    .get(verifyUser)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;