const submitModel = require("../Model/submitModel");

//all
const getAlldata = async (req, res) => {
  const alldata = await submitModel.getAlldata();
  res.render("manager", { alldata });
};

//중복 확인용 all
const getReAlldata = async (req, res) => {
  const alldata = await submitModel.getAlldata();
  res.send({ alldata });
};

//post - 등록하기
const createRow = async (req, res) => {
  console.log("Req", req.body);
  const { title, category, comment } = req.body;
  const imgsrc = req.file ? req.file.path : null;
  const createData = await submitModel.postData(req.body, imgsrc);
  res.send("200");
};

//행 수정하기
const updateData = async (req, res) => {
  const updatedata = await submitModel.updateData(req.body);
  res.send("200");
};

//수정 페이지 이동
const MovePage = async (req, res) => {
  const data = await submitModel.getOne(req.params.id);
  res.render("modify", { data });
};

//수정 페이지 이동 - editor
const Editor = async (req, res) => {
  const data = await submitModel.getOne(req.params.id);
  res.send({ data });
};

//행 삭제하기
const deleteData = async (req, res) => {
  const deletedata = await submitModel.deleteData(req.params.id);
  res.send("200");
};

module.exports = {
  getAlldata,
  createRow,
  deleteData,
  updateData,
  MovePage,
  getReAlldata,
  Editor,
};
