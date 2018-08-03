const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res, next) => {
  res.json('test')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
