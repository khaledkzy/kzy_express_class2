const express = require("express");
const app = express();
const fs = require("fs")
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");
app.get("/", (req, res) => {
    const callBack = (error, file) => {
   
      const postsJson = JSON.parse(file.toString());
      res.render("xindex", {
        title: "CYF",
        posts: postsJson
      });
    };
    fs.readFile((__dirname + "/data/posts.json"), callBack);
  });
app.listen(process.env.PORT || 3000, function () {console.log("Server is listening on port 3000. Ready to accept requests!");});


// app.get("/", function (req, res) { res.render("index") })
