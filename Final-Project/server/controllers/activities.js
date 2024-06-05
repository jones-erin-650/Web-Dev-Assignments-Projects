const model = require('../models/activities')
const express = require('express');
const app = express.Router();


app
    // gets all activities
    .get('/', (req, res, next) => {
        model.getAll()
        .then(all => {
           
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

            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    // gets from id
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        model.get(+id)
        .then(result => {

            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    // adds activity
    .post('/:currentUserHandle', (req, res, next) => {
        const activity = req.body;
        
        model.add(activity, req.params.currentUserHandle)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    // edits an activity
    .patch('/:activityId', (req, res, next) => {
        console.log('.patch activity called in controller');
        const activity = req.body;


        const originalActivityId = req.params.activityId
        console.log('originalActivityId: ' + originalActivityId );

        activity.id = req.params.activityId;
        
        model.update(activity)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }

            res.send(response);
        }).catch(next);
    })
    // deletes an activity
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        model.remove(+id)
        .then(result => {
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })




module.exports = app