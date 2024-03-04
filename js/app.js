let express = require('express');
const {join} = require("path");


let app= express();
app.use(express.static(join(__dirname, '../')));
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: join(__dirname, '../view')});
})

app.listen(800);
console.log('Server is running on port 800')
