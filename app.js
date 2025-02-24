const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;
const path = require("path");

//라우터
const managerrouter = require("./Router/managerRouter");
const mainrouter = require("./Router/mainRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

//라우터 경로
app.use("/manager", managerrouter); //manager
app.use("/", mainrouter);

// app.get("/", (req, res) => {
//   res.render("index");
//   //console.log("req", req.body);
// });

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
