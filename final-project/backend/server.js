var express = require('express');
var db = require('./models');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

//posting form data to database
app.post('/prospects', function(req, res) {
    console.log("got request");
    var prospects= req.body; 
    var name= req.body.name;
    var email= req.body.email;
    var phone= req.body.phone;
    var casetype= req.body.caseType;
    var comments= req.body.comments;
    var notes = req.body.notes; 
    var status = req.body.status;

    db.prospects.create({ name:name, email:email, phone:phone, caseType: casetype, comments: comments, notes:notes, status: status });

    res.send('Success');
  });

//grabbing form information from database
app.get('/getProspectData', function(req,res) {
    console.log("grabbing all")  
    db.prospects.findAll({raw:true})
    .then((results) => {
      res.send(JSON.stringify(results));
})
})



app.listen(3000, function(){
    console.log('now listening on port 3001...');
})