var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
articleOne:{
  title : 'article one | vaibhav dave',
  heading : 'article 1',
  content : `<p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>`},
 articleTwo:{ title : 'article two | vaibhav dave',
  heading : 'article 2',
  content : `<p>this is my first web site`},
 
 articlethree:{title : 'article three | vaibhav dave',
  heading : 'article 3',
  content : `<p>this is my first web site`}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;

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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
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
