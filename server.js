var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: 'article one | vaibhav dave',
    heading: ' article 1' ,
    content: `<p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>
            
            <p>this is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web sitethis is my first web site</p>`
};



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/Pokemon-PNG-HD.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'Pokemon-PNG-HD.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
