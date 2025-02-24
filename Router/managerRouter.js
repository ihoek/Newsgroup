const express = require("express");
const multer = require("multer");
const router = express.Router();
const submitController = require("../Controller/submitController");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    //원본 파일명에서 확장자 추출
    const ext = path.extname(file.originalname);

    //파일명에 타이스탬프와 확장자를 포함시켜서 저장함
    cb(null, Date.now() + ext); //timestamp + 확장자
  },
});
let upload = multer({ storage: storage });

router.get("/", submitController.getAlldata);
router.post("/post/data", upload.single("imgsrc"), submitController.createRow);

//행 수정하기
router.put("/modify", submitController.updateData);

//수정 버튼 클릭 이동
router.get("/update/:id", submitController.MovePage);

//행 삭제하기
router.delete("/delete/:id", submitController.deleteData);

//중복버튼
router.post("/check", submitController.getReAlldata);

//editor 로드
router.post("/editor", submitController.Editor);

module.exports = router;
