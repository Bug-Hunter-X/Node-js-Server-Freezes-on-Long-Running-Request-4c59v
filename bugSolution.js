const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  //Simulate a long running task asynchronously
  await new Promise(resolve => setTimeout(resolve, 2000));
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});