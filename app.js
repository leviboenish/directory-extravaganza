const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries')

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  queries.getAll().then((data) => {
    res.json({data})
  })
})

app.get('/:id', (req,res,next) => {
  queries.getById(req.params.id).then((data) => {
    res.json({data})
  })
})

app.delete('/:id', (req,res,next) => {
  queries.delete(req.params.id).then(() => {
    res.status(200).json('deleted');
  })
})

app.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body.firstName, req.body.lastName, req.body.photo, req.body.hometownLat, req.body.hometownLong, req.body.prevOccupation).then(updatedUser => res.json({updatedUser}));
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
