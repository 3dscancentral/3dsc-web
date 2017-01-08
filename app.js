import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.sendfile('index.html', {root: __dirname })
});

export default app;
