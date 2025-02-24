//변수 선언 - form
const form = document.forms["form_upload"];
const input_id = form.id;
const input_title = form.title;
const input_category = form.category;
const input_comment = form.comment;
const input_img = form.userfile;

//변수 선언 - DOM
const preview_image = document.querySelector(".preview_image");
const submit_btn = document.querySelector(".submit_btn");

//toast ui editor
const editor = new toastui.Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",
  height: "500px",
});
//console.log(editor.getMarkdown());

//이미지 선택 버튼
const readURL = (input) => {
  const selectedFile = input.files[0];

  console.log("imgscr", input.files[0]);
  const reader = new FileReader(); // FileReader 객체 생성

  reader.onload = function () {
    // FileReader 로드 이벤트 핸들러 등록
    preview_image.innerHTML = `<div class="preview"><img class="image_style" src="${reader.result}" /></div>`;
    //console.log("read", reader.result);
  };

  reader.readAsDataURL(selectedFile); // FileReader로 선택된 파일 읽기
};

//등록 버튼 클릭
const oneclick = () => {
  console.log("imgsrc", input_img.files[0]);
  console.log("input_id", input_id.value);

  const formData = new FormData();
  formData.append("id", input_id.value);
  formData.append("title", input_title.value);
  formData.append("category", input_category.value);
  formData.append("comment", editor.getMarkdown());
  formData.append("imgsrc", input_img.files[0]);

  axios({
    method: "post",
    url: "manager/post/data",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data", // 파일을 포함한 데이터 전송을 위한 헤더
    },
  })
    .then((res) => {
      alert("등록 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log("등록 실패 error : ", e);
    });
};

//수정 버튼
const updatePage = (id) => {
  //console.log("id", id);
  window.location.href = `manager/update/${id}`;
};

//삭제 버튼
const deleteData = (id) => {
  console.log("id", id);
  axios({
    method: "delete",
    url: `manager/delete/${id}`,
  })
    .then((res) => {
      alert("삭제 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log("삭제 실패 error : ", e);
    });
};

//중복 확인 버튼
function redundancy_id() {
  let input_id_value = input_id.value;
  axios({
    method: "post",
    url: "/manager/check",
  }).then((res) => {
    console.log(res.data.alldata);
    let resdata = res.data.alldata;
    let resdata_id = resdata.filter(
      (element) => Number(element.id) === Number(input_id_value)
    );
    if (resdata_id.length === 0) {
      //중복된 것이 없을경우
      Swal.fire({
        title: "사용가능한 아이디 입니다.",
        icon: "success",
        draggable: true,
      });
      submit_btn.disabled = false;
    } else {
      Swal.fire({
        title: "이미 사용된 아이디 입니다.",
        icon: "error",
        draggable: true,
      });
      submit_btn.disabled = true;
    }
  });
}

//window onload
window.onload = function () {
  submit_btn.disabled = true;
};
