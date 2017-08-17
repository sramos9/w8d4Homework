const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const travelController = require('./controllers/travel.js');
app.use('/travel', travelController);

app.get('/', (req,res)=>{
  res.send('Hello World')
})

mongoose.connect('mongodb://localhost:27017/travel');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('listening...');
});
