//변수 선언 - DOM
const input_submit_title = document.querySelector(".input_submit_title");
const searchimg = document.querySelector(".searchimg");
const main_right = document.querySelector(".main_right");

// 확인 버튼 클릭
const input_submit = () => {
  console.log("click", input_submit_title.value);
  axios
    .get(`/search/news?query=${encodeURIComponent(input_submit_title.value)}`)
    .then((res) => {
      console.log("res", res.data.items);
      let newsdata = res.data.items;
      main_right.innerHTML = newsdata
        .map((element, index) => {
          return `
            <div class="news_row">
              <div class="news_data">
                ${element.title}
              </div> 
              <div class="news_data_link">
                <a href="${element.link}">바로가기 </a>
              </div> 
            </div>
            `;
        })
        .join("");
    });
};

//카드 클릭
const detailpage = (id) => {
  console.log("id", id);
  window.location.href = `detail/${id}`;
};

searchimg.addEventListener("click", input_submit);

//logo클릭
function mainpagemove() {
  window.location.href = "/";
}

//bookmark click
function bookmark() {
  window.location.href = "/bookmark";
}
