const { getAll, create, getOne, remove, update, verifyUser, login } = require('../controllers/user.controllers');
const express = require('express');

const routerUser = express.Router();
//Rutas estáticas
routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

//Rutas dinámicas
routerUser.route('/verify/:code')
    .get(verifyUser)

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerUser;