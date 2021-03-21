var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router()
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose');
const methodOverride = require('method-override')

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride())

mongoose.connect('mongodb://localhost:27017/database')

restify.serve(router, mongoose.model('items', new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: Buffer },
  index: { type: Number },
  rating: { type: Number }
})))

app.use(router)

// app.listen(3000, () => {
//   console.log('Express server listening on port 3000')
// })

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
