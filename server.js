var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' :{
  title : 'Article One | Vaibhav Dave',
  heading : 'welcome to Aricle One',
  content : '<p> this is my first website</p>',
},
'article-two' :{
  title : 'Article Two| Vaibhav Dave',
  heading : 'welcome to Article One',
  content : '<p> this is my first website</p>',
},
'article-three' :{
  title : 'Article Three | Vaibhav Dave',
  heading : 'welcome to Article Three',
  content : '<p> this is my first website</p>',
},
};


function createTemplate(data) {
var title = data.title;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
                 ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        
        <div>
            <h3> ${heading}</h3>
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/Pokemon-PNG-HD.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'Pokemon-PNG-HD.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
