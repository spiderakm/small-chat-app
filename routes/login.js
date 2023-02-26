const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    try{
        res.write('<html><head><title>Document</title></head><body>');
        res.write(`<h2>Register for chat!</h2><br>`);
        res.write(`<form action='/addUser' method="post" onsubmit="localStorage.setItem('username',document.getElementById('name').value)"> 
                <input type="text" id="name" name="name"/>
                <input type="submit"></form>`)
        res.write(`</body></html>`);
        res.end();        
    }
    catch(e){
        console.error(e);
    }
})

router.post('/addUser', (req, res) => {
    try{
        user = req.body.name;
        res.redirect('/chat');
    }
    catch(err){
        console.error(err);
    }
})





module.exports = router