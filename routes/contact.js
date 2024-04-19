const path = require('path');
const express = require('express');
const router  = express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.post('/contactus',(req,res,next)=>{
    const { name, email, phone, timeForCall } = req.body;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Time for call: ${timeForCall}`);

  // Here you can implement the logic to book a call
    res.redirect('/success');
    
});


module.exports = router;