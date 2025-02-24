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

//북마크를 위한 전체 데이터 탐색
const bookalldata = async (data) => {
  try {
    const query = `update new set book_check = ? where id =?`;
    await pool.query(query, [data.book_check, data.id]);
  } catch (e) {
    console.log("수정 실패 error : ", e);
  }
};

//북마크를 페이지 전환 위한 전체 데이터 탐색
const bookalldatamove = async () => {
  const query = "SELECT * FROM new WHERE book_check = 1";
  const [rows] = await pool.query(query);

  return rows;
};

const getOne = async (userId) => {
  const query = `SELECT * FROM new WHERE id=${userId}`;
  const [rows] = await pool.query(query);
  return rows;
};

//북마크 수정하기
const updateData = async (data) => {
  try {
    const query = `update new set book_check = ? where id =?`;
    await pool.query(query, [0, data.id]);
  } catch (e) {
    console.log("수정 실패 error : ", e);
  }
};

module.exports = {
  getAlldata,
  getOne,
  bookalldata,
  bookalldatamove,
  updateData,
};
