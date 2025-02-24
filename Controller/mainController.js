const mainModel = require("../Model/mainModel");

const getAlldata = async (req, res) => {
  const alldata = await mainModel.getAlldata();
  //console.log("All", alldata);
  res.render("index", { alldata });
};

//북마크용 데이터
const getBookAlldata = async (req, res) => {
  //console.log("reqb", req.body);
  const alldata = await mainModel.bookalldata(req.body);
  res.send({ alldata });
};

//북마크 페이지 전환용
const getBookAlldataMove = async (req, res) => {
  const alldata = await mainModel.bookalldatamove();
  console.log("all", alldata);
  res.render("bookmark", { alldata });
};

const getOnedata = async (req, res) => {
  const onedata = await mainModel.getOne(req.params.id);
  console.log("onedata", onedata);
  res.render("detail", { onedata });
};

//북마크 삭제 - book_check값 변경
const updateData = async (req, res) => {
  console.log("req", req.body);
  const updatedata = await mainModel.updateData(req.body);
  res.send("200");
};

module.exports = {
  getAlldata,
  getOnedata,
  getBookAlldata,
  getBookAlldataMove,
  updateData,
};
