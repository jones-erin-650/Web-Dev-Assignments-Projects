// this sets up different routes with express
// handles when a user does a specific request

const users = require('../models/users')
const express = require('express');
const app = express.Router();

app
    // getting all users
    .get('/', (req, res, next) => {
        console.log('user/ called');
        users.getAll()
        .then(all => {
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })

    // getting a user from a specific handle
    .get('/:userHandle', (req, res, next) => {
        users.get(req.params.userHandle)
        .then(all => {
            const response = {
                data: all,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        users.search(search)
        .then(result => {
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    // adding to users
    .post('/', (req, res, next) => {
        const user = req.body;
        console.log("1: About to add user");
        users.add(user)
        .then(result => {
            console.log("5: Returned from add user");
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    // editting a user
    .patch('/:id', (req, res, next) => {
        const user = req.body;
        user.id = req.params.id;
        users.update(user)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }

            res.send(response);
        }).catch(next);
    })
    // deleting a user
    .delete('/:id', (req, res, next) => {
        
        const id = req.params.id;
        console.log('.delete user in server called. id: ' + id);
        users.remove(+id)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/login', (req, res, next) => {
        console.log('/login called');
        const { email } = req.body;
        console.log('email: ' + email);
        users.login(email)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })




module.exports = app