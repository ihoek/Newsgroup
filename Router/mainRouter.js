const express = require("express");
const router = express.Router();
const mainController = require("../Controller/mainController");

//네이버 검색 api

router.get("/", mainController.getAlldata);
router.get("/search/news", async function (req, res) {
  let input_result = req.query.query;
  console.log("req", req.query.query);
  var api_url =
    "https://openapi.naver.com/v1/search/news?query=" + encodeURI(input_result); // JSON 결과
  //   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
  var request = require("request");
  var options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
router.get("/detail/:id", mainController.getOnedata);

//bookmark
router.post("/bookmark/:id", mainController.getBookAlldata);

//bookmark page move
router.get("/bookmark", mainController.getBookAlldataMove);

//bookmark item delete
router.put("/delete/:id", mainController.updateData);

module.exports = router;
