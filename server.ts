const express = require('express');
const app = express();
const path = require('path');

const port: (number|string) = process.env.PORT || 3000;

app.get('/app.js', (req: object, res: { sendFile: Function })=> res.sendFile(path.join(__dirname, 'dist', 'bundle.js')));

app.get('/', (req: object, res: { sendFile: Function })=> res.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, ()=> console.log(`listening on port ${port}`))
