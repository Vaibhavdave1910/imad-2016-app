var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={

'article-one': {
  title : 'article one | vaibhav dave',
  heading : 'article 1',
  content : `<p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>`},

'artical-two':{
  title : 'article two | vaibhav dave',
  heading : 'article 2',
  content : `<p>this is my first web site</p>`},

 'artical-three':{
  title : 'article two | vaibhav dave',
  heading : 'article 2',
  content : `<p>this is my first web site</p>`},
};


function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate=`<html>
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

app.get('/:articleName',function(req,res){
    var articalName = req.paramas.articalName;
    res.send(createTemplate(articles[articalName]));
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
