require('dotenv').config();
const path = require('path');
const express = require('express');
const users = require('./controllers/users');
const activities = require('./controllers/activities');

/**  
 * @typedef {import('../client/src/model/transportTypes').DataEnvelope<null> } ErrorDataEnvelope
 * */


const app = express();
const PORT = process.env.PORT ?? 3000;

app
// Static files
  .use(express.static('client/dist'))

// Middleware
  .use(express.json())
  .use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  })


app
  .get('/', (req, res) => {
    res.send('Hello New Paltz!')
  })
  .use('/api/v1/users', users)
  .use('/api/v1/activities', activities)

// 404
app.use((req, res) => {
  res.sendFile(path.join(__dirname,  '../client/dist/index.html'));
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  /** @type {ErrorDataEnvelope } */
  const results = { 
    isSuccess: false,
    message: err.message || 'Internal Server Error',
    data: null,
   };
  res.status(500).send(results);
})


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});