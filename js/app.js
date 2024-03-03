let express = require('express');
const {join} = require("path");


let app= express();
app.get('/', function(req, res) {
  res.sendFile(join(__dirname, 'index.html'));
})

app.listen(800);
console.log('Server is running on port 800')
