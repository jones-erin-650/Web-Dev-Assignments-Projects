const model = require('../models/activities')
const express = require('express');
const app = express.Router();

/*
    Ways that we send information to the server:
    1. Path parameters
    2. Query parameters
    3. Body
    4. Headers
*/

/** 
 * @typedef {import('../../client/src/model/activity').Activity} Activity 
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<Activity> } ActivityDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<Activity> } ActivityDataListEnvelope
 * */

app
    .get('/', (req, res, next) => {
        model.getAll()
        .then(all => {
            /** @type { ActivityDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        model.search(search)
        .then(result => {
            /** @type { ActivityDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        model.get(+id)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const activity = req.body;

        model.add(activity)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const activity = req.body;
        activity.id = req.params.id;
        model.update(activity)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }

            res.send(response);
        }).catch(next);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        model.remove(+id)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })




module.exports = app