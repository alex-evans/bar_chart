const express = require('express');
const app = express();
const path = require("path");
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});

const port = process.env.port || 3000;

app.use('/', router);
app.listen(port);

console.log(`Running on Port ${port}`)