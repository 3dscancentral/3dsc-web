import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('home page'));
app.get('/start-scan', (req, res) => res.send('start a scan'));

export default app;
