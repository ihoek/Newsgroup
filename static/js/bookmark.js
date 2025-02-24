//logo클릭
function mainpagemove() {
  window.location.href = "/";
}

//delete btn
function deleteData(id) {
  console.log("id", id);

  axios({
    method: "put",
    url: `/delete/${id}`,
    data: { id: id },
  }).then((res) => {
    console.log(res);
    window.location.reload();
  });
}
