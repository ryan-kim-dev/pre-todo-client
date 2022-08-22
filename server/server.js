const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/get', (req, res) => {
  res.send('To-do Application!');
});

app.post('/upload/post', async (req, res) => {
  res.send('success');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
