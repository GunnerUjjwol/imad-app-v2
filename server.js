var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
 'article-one': {
    title: "Article One | Ujjwol Dandekhya",
    heading: "Article One",
    date: "Feb 22.2017",
    content: `<div>
    This is the content for my first article . And this is all the mess I could muster to fill this page up a little bit. I
    I am only just trying .
    
    Lets see....
    </div>`
},
 'article-two': {
    title: "Article Two | Ujjwol Dandekhya",
    heading: "Article Two",
    date: "Feb 21.2017",
    content: `<div>
    This is the content for my second article . And this is all the mess.
    </div>`
   },
 'article-three': {
    title: "Article Three | Ujjwol Dandekhya",
    heading: "Article Three",
    date: "Feb 23.2017",
    content: `<div>
    This is the content for my third article . And this is all the mess I could muster to fill this page up a little bit. I
    I am only just trying .
    
    Lets see....
    </div>`
   }
};

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
    <!DOCTYPE html>
<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
       <link href="ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
       ${content}
        </div>
    </body>
    
    
</html>
`
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

counter=0;
app.get('/counter',  function(req,res){
   counter+=1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req,res){
    //articleName is article-one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
