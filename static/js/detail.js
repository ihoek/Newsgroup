//변수 선언 - DOM
const bookmark = document.getElementById("bookmark");

//북마크 클릭
function checkbookmark(id) {
  //console.log("main_book", bookmark.src);
  if (bookmark.src.indexOf("full") === -1) {
    //full을 찾을 수 없는 경우 -> 북마크를 하지 않은 상태
    axios({
      method: "post",
      url: `/bookmark/${id}`,
      data: { book_check: 1, id: id },
    }).then((res) => {
      console.log("res", res.data);
      bookmark.src = "../static/images/fullbookmarkred.png";
    });
  } else {
    axios({
      method: "post",
      url: `/bookmark/${id}`,
      data: { book_check: 0, id: id },
    }).then((res) => {
      console.log("res", res.data);
      bookmark.src = "../static/images/bookmark_black.png";
    });
  }
}

//logo클릭
function mainpagemove() {
  window.location.href = "/";
}

//printer 클릭
function printer() {
  window.print();
}
