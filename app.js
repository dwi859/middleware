const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route');
const uploadData = require('express-fileupload')




app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public')); //menaruh gambar,jss,css dll di public

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(uploadData())

app.get('/', (req,res) =>{
    res.render('home');
    
   
});
app.use('/dilo', routes)

var port = 8000;
app.listen(port, function(){
    console.log('Server berjalan dengan port' + port);
});