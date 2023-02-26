const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routerLogin = require('./routes/login')
const routerChat = require('./routes/chat')


app.use(bodyParser.urlencoded({extended: true}));


app.use(routerLogin)
app.use(routerChat)

app.listen(4000);