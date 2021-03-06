var express = require ('express');
var http = require ('http');
var app = express();
var server = http.createServer(app);
var path =require('path');
var io = require('socket.io')(server);
var bodyParser = require ('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.set('views',path.join(__dirname+'views'));
app.set('view engine','ejs');

app.use('/members',require('./routes/members.js'));
io.on('connection', function(client){
  console.log("client connect through web socket");
  client.emit('greet',"Hey Hi I have been logged in.");
  client.on('disconnect', function(){
    console.log("Client disconnect");
  })
});

io.on('disconnect', function(){
  console.log("scoket disconnect");
})
//catch 404 and forward to error handler and this should be always at bottom of stack
app.use(function(request,response,next){
 var err = new Error("Not Found");
 err.status = 404;
 next(err);
});

//error handler
app.use(function (err,request,response, next){
  response.locals.message = err.message;
  response.locals.error= err;
  response.status (err.status || 500);
  response.render("error");
});


/*
app.get('/',function (request,response){
  response.sendFile(__dirname+'/public/index.html');
  //response.end();
});*/
server.listen(3000 , function (){
  console.log("server is listening on port 3000");
});
