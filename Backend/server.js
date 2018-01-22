const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite = require("sqlite3").verbose();
const app = express();
const port = 3000;

var file = "./database/database.db";
var db;

connectDb = function () {
    db = new sqlite.Database(file);
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.get('/', function(req, res, next) {
  //  res.render('index.html');
    console.log('aaa');
});

app.post('/test', function(req, res, next) {
    console.log(req.headers['x-forwarded-for'] + "---");
});

app.post('/clicked', function(req, res, next){
    connectDb();

    var IP = req.connection.remoteAddress;
    var jobOffer = req.body.jobOffer;
    var time = (new Date()).toString(); 

    var query = 'INSERT INTO clicks(Ip, JobOffer, Time) VALUES (?, ?, ?)';
    db.run(query, [IP, jobOffer, time],
        (err) => {
            if (err) {
                console.log("Neuspesna operacija \n" + err + "\n");
            } else {
                console.log("Uspesna operacija \n");
            }
        }
    );
});


app.post('/email', function(req, res, next){
    connectDb();

    var email = req.body.email;

    var query = 'INSERT INTO signedUpEmails(email) VALUES (?)';
    db.run(query, [email],
        (err) => {
            if (err) {
                console.log("Neuspesna operacija \n" + err + "\n");
            } else {
                console.log("Uspesna operacija \n");
            }
        }
    );
});


app.listen(port, () => console.log('Server up'));

