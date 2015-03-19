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
  client.LRANGE("students", 0, -1, function(err, students){
    res.render("index", {students: students});
  });
});

// post route
app.post("/add", function(req, res){
console.log("Called add", req.body.student);
  if(req.body.student != nil and req.body.student != ""){
    client.LPUSH("students", req.body.student);
    res.redirect("/");
  } else {
    
  }
});

// delete an individual item route
app.delete('/remove/:student', function(req, res){
  // students = [];
console.log("Called remove", req.params.students);
  client.LRANGE("students", 0, -1, function(err, students){
    students.forEach(function(student){
      if(student === req.params.student){
        // lkjlkjlkjlkj
        client.LREM("students", 1, student);
        res.redirect("/");
      }
    });
  });
});

// delete an individual item route
app.delete('/allDelete', function(req, res){
console.log("Called delete ALL");
  client.LRANGE("students", 0, -1, function(err, students){
    students.forEach(function(student){
      client.LREM("students", 1, student);
    });
    res.redirect("/");
  });
});

// start the server
app.listen(3000, function(){
  console.log("Sever starting on port 3000");
});


// App should:
// DONE Student just have a name 
// DONE list students
// DONE create ...
// DONE delete one ...
// delete all ...

// ### Bonus
// Edit students

// ### Super-Bonus
// SPA (single page application) using AJAX