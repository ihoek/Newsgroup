const commentData = document.querySelector("#editor");

//toast ui editor
const editor = new toastui.Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",
  height: "400px",
  initialValue: commentData.className,
});
console.log(editor.getMarkdown());

//수정 버튼 클릭
function updateForm(id) {
  const form = document.forms["updataData"];

  const data = {
    id: id,
    title: form["title"].value,
    category: form["category"].value,
    comment: editor.getMarkdown(),
  };

  axios({
    method: "put",
    url: "/manager/modify",
    data: data,
  })
    .then((res) => {
      alert("수정 성공!");
      window.location.href = "/manager";
    })
    .catch((e) => {
      console.log("수정 실패 error : ", e);
    });
}
