const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);

app.use('/success',(req,res,next)=>{
    res.status(200).send('Form successfully Filled!');
});

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);