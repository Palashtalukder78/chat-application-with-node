const createError = require("http-errors");

//404 not-found handler

function notFoundHandler(req, res, next) {
  next(createError(404, "The requested content was not found!"));
}

function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "Error Page",
  });
}

module.exports = { notFoundHandler, errorHandler };
