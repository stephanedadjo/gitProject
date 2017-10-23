var express = require('express');
var app = express();

app.get('/hairs', function (req, res) {
	fs.readFile('myHair.json', (err, data) => {
	  if (err) {
	  	res.end('Error:' + err);
	  }
	  else{
	  	res.end(data);
	  }
	});

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
