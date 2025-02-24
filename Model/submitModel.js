const mysql = require("mysql2/promise");

//DB 연결
const pool = mysql.createPool({
  host: "localhost", // DB가 설치된 호스트 ip주소
  user: "root", // db 접속 유저 이름
  password: "Qwer1234", //db 접속 비밀번호
  database: "news", // db이름
});

//전체 데이터 탐색
const getAlldata = async () => {
  const query = "select * from new";
  const [rows] = await pool.query(query);
  return rows;
};

const getOne = async (userId) => {
  const query = `SELECT * FROM new WHERE id=${userId}`;
  const [rows] = await pool.query(query);
  return rows;
};

//행 추가 - 등록하기
const postData = async (data, imgsrc) => {
  //console.log("data", data);
  //console.log("datasrc", data.imgsrc);
  const query =
    "insert into new (id, title, category, comment ,imgsrc) values (?, ?, ?, ?, ?)";
  const values = [data.id, data.title, data.category, data.comment, imgsrc];
  //console.log("values", data);
  try {
    const [result] = await pool.query(query, values);

    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
  }
};
//행 수정하기
const updateData = async (data) => {
  try {
    const query = `update new set title = ?, category = ?, comment = ? where id =?`;
    await pool.query(query, [data.title, data.category, data.comment, data.id]);
  } catch (e) {
    console.log("수정 실패 error : ", e);
  }
};

//행 삭제하기
const deleteData = async (id) => {
  try {
    const query = `delete from new where id = ${Number(id)}`;
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제 실패 error : ", e);
  }
};

module.exports = {
  getAlldata,
  postData,
  deleteData,
  updateData,
  getOne,
};
