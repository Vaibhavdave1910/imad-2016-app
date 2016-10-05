var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
article-one:{

    title:'article one|vaibhav dave',
    heading:'article one',
    content:`<p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>`
},
article-two:{title:'article two|vaibhav dave',
    heading:'article two',
    content:`<p>this is my second web site</p>`
    
},
article-three:{title:'article two|vaibhav dave',
    heading:'article two',
    content:`<p>this is my second web site</p>`
    },

    
};
    
    
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =
`  <html>
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
            <h3> ${heading}<h3>
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName', function (req,res) {
    res.send(createTemplate(articles[articalName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/eena', function(req,res) {
    res.send("joy");
});
app.get('/Pokemon-PNG-HD.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'Pokemon-PNG-HD.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
