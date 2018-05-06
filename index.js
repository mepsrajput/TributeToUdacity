var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//views is the directory for all template fileSize
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

/* GET request on root */
app.get('/', function(req, res, next) {
	res.render('index', { title: 'PSRajput' });
});

app.listen(app.get('port'), function(){
	console.log('App is running on port', app.get('port'));
});
