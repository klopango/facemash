var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

for (var a = 1; a < 2000; a++) {
	download('http://domain.org/photo/' + a + '.jpg', 'img/' + a + '.jpg', function(){	  
		
	});
}