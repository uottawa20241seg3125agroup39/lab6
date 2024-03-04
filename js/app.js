let express = require('express');
const {join} = require("path");
const processor = require('./result_processor');
const db=require('./memdb');


let app= express();
app.use(express.static(join(__dirname, '../')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, '../view'));
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: join(__dirname, '../view')});
})

app.get('/submitted', function(req, res) {
  res.sendFile('submitted.html', {root: join(__dirname, '../view')});
});
app.post('/submit', function(req, res) {
  console.log('Submission received');
  console.log(req.body);
  // res.sendStatus(200);
  processor(req,res);
  // console.log(req.body.length);
})

app.get('/result', function(req, res) {
  console.log('Result requested');
  res.render('result', {data: db.get()});
});

app.listen(800);
console.log('Server is running on port 800')
