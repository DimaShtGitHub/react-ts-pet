const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hi my old Server');
})

app.listen(3008, () => console.log('server is on '))