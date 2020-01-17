var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// connection of database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

//controllers 
const notes = require("./controller/note.controller.js");
const user = require("./controller/user.controller.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



mongoose.Promise = global.Promise;


// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  // process.exit();
});

// create user
app.post("/user",user.createUser);



 // Create a new user
 app.post('/user', user.createUser);

//  login user
app.post("/login",user.loginUser)

 // Retrieve all Notes
 app.get('/notes/:userId', notes.findAll);

 // Retrieve a single Note with noteId
 app.post('/createNote', notes.create);

 // Update a Note with noteId
 app.put('/updateNotes', notes.update);

 // Delete a Note with noteId
 app.delete('/notes/:noteId', notes.delete);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(8080,function(req,res){
    console.log(" server start at 8080");
    
})