
//require express in our app
var express = require('express');
var bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('/', function homepage(req, res){
  res.sendFile('views/index.html', {root: __dirname});
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  console.log(name, "get file by name");
  res.sendFile('/views/templates/' + name + '.html', {root: __dirname});
});
// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
