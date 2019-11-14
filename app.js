let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');
let getRoomInfoRouter = require('./routes/getRoomInfo');
let getUserState = require('./routes/getUserState');
let logoutRouter = require('./routes/logout');
let getRecentRoomExpense = require('./routes/getRecentRoomExpense');

let testLoginRouter = require('./routes/testLogin');
let testLogoutRouter = require('./routes/testLogout');

let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // 跨域请求允许携带cookie
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/getRoomInfo', getRoomInfoRouter);
app.use('/getUserState', getUserState);
app.use('/logout', logoutRouter);
app.use('/getRecentRoomExpense', getRecentRoomExpense);

app.use('/testLogin', testLoginRouter);
app.use('/testLogout', testLogoutRouter);

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
