var path = require("path");

module.exports = function (app) {
    
   // each route handles the HTML page that the use gets sent to
   app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

    
 //stats page
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });

    //exercise page
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });
}