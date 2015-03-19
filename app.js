var express = require("express"),
    app = express(),
    redis = require("redis"),
    client = redis.createClient(),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

// connect the middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// If I want to include static files like css/js/images
app.use(express.static(__dirname + '/public'));

// root route
app.get('/', function(req, res){
  res.render("index");
});

// delete an individual item route
app.delete('/remove/:student', function(req, res){
  console.log("Called remove", req.params.student);
  client.LRANGE("students", 0, -1, function(err, todos){
    lkjlkjlkjlkj
  });
});

// start the server
app.listen(3000, function(){
  console.log("Sever starting on port 3000");
});