var fs = require('fs');
var obj;
fs.readFile('youtube-new/GB_category_id.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

var parse = require('csv-parse');

var inputFile='youtube-new/GBvideos.csv';
console.log("Processing videos file");

var parser = parse({delimiter: '\n'}, function (err, data) {
    // when all countries are available,then process them
    // note: array element at index 0 contains the row of headers that we should skip
    data.forEach(function(line) {
      // create country object out of parsed fields
      var video = { "video_id":line[0]
    	              ,"trending_date":line[1]
                    //title	channel_title	category_id	publish_time	tags	views	likes	dislikes	comment_count	thumbnail_link	comments_disabled	ratings_disabled	video_error_or_removed	description
                    };
     console.log(JSON.stringify(video));
    });
});

// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);
