/*** if (view) { ***/
var createError = require('http-errors');
/*** } ***/
var express = require('express');
var path = require('path');
/*** Object.keys(modules).sort().forEach(function (variable) { ***/
var $/*** variable ***/ = require('/*** modules[variable] ***/');
/*** }); ***/

/*** Object.keys(localModules).sort().forEach(function (variable) { ***/
var $/*** variable ***/ = require('/*** localModules[variable] ***/');
/*** }); ***/

var app = express();

/*** if (view) { ***/
// view engine setup
/*** if (view.render) { ***/
app.engine('/*** view.engine ***/', $/*** view.render ***/);
/*** } ***/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '/*** view.engine ***/');

/*** } ***/
/*** uses.forEach(function (use) { ***/
app.use($/*** use ***/);
/*** }); ***/

/*** mounts.forEach(function (mount) { ***/
app.use('/*** mount.path ***/', $/*** mount.code ***/);
/*** }); ***/

/*** if (view) { ***/
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

/*** } ***/
module.exports = app;
