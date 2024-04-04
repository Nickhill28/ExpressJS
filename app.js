const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Error Dont know what youre Looking for...</h1>');
});

const server = http.createServer(app);

server.listen(3000);