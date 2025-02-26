# 📖News Group
## ✅프로젝트 소개
<div>Bookstore 프로젝트에서는 localstorage를 사용하였고, 이번 프로젝트에서는 axios와 mySQL를 사용하여 백엔드를 구축하고 DB에서 값을 가져오는 연습을 하고자 하였다.</div>
<div>해당 프로젝트에서는 Manager페이지에서 입력한 값을 Index페이지에 띄워 사용자가 해당 아이템을 선택하고 북마크 기능을 통해 해당 아이템만 확인할 수 있도록 하였다.</div>

## ✅개발 환경 및 사용 TOOL, 사용 API
<div>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
</div>
<div>
  <ul>
    <li>Express</li>
    <li>Multer</li>
    <li>Axios</li>
    <li>naver 검색 API</li>
    <li>Toast UI editor</li>
  </ul>
</div>

## ✅상세 기능
### Manager Page
![관리자-페이지-1](https://github.com/user-attachments/assets/789a38c1-99e8-4c1f-acd8-bb0e25a0b014)
<!-- 내용 -->
#### 1-1) 등록버튼
<div>기사ID, 기사제목, 카테고리, 상새 내용을 차례대로 입력할 수 있다.</div>
<div>기사ID는 중복이 불가능 하며, 등록을 할 때 나오는 이미지는 multer를 사용하여 개발하였다.</div>
<div>상세 내용에서는 input이나 textarea가 아닌 toast ui editor를 사용하여 개발하였다.</div>
<br><br>

![관리자-페이지-2](https://github.com/user-attachments/assets/3bfb0562-563a-40bc-ad1e-23ac3a6cd485)

<!-- 내용 -->
#### 1-2) 수정, 삭제버튼
<div>수정 버튼을 클릭하면 수정 페이지를 호출한다</div>
<div>관리자 페이지에서 클릭한 행의 ID값을 받아 해당 정보를 수정할 수 있도록 하였다.</div>
<div>삭제 버튼 또한 클릭 시 해당한 행의 ID값에 해당한 정보를 삭제하도록 하였다.</div>

<div>해당 내용은 mySql과 연동하여 등록, 삭제, 수정 사항들을 모두 DB에 저장하도록 하였다.</div>
<br>

### Main Page
![메인화면-1](https://github.com/user-attachments/assets/690aaaf9-b50b-4a75-acb1-aa01fd7e637e)

<!-- 내용 -->
#### 2-1) 메인 기사
<div>관리자 페이지에서 입력한 기사들이 메인화면에 카드형식으로 보여준다.</div>
<div>각 카드를 클릭하면 해당하는 카드의 상세 페이지로 이동한다.</div>
<br>

![메인화면-2](https://github.com/user-attachments/assets/76bd96cd-d6c7-46c4-b272-a371d67037e7)
<!-- 내용 -->
#### 2-2) 키워드 기사 찾기
<div>네이버 검색API를 활용하여 키워드에 해당하는 기사만 검색되도록 작성하였다.</div>
<div>또한 바로가기 버튼을 통해 해당 원본 기사로 바로 갈 수 있게 하였다.</div>
<br>

### Detail Page
![상세화면](https://github.com/user-attachments/assets/42060da1-73b5-416e-b7c7-a98a1430052c)
<!-- 내용 -->
#### 3-1) 상세 페이지
<div>메인 페이지에서 클릭한 기사에 대한 상세 정보를 보여준다.</div>
<div>또한 프린터 기능과 북마크 기능을 추가하였다.</div>
<br>

### Bookmark Page
![북마크](https://github.com/user-attachments/assets/171c60bb-6a12-44eb-bcd2-8b97c78a23e8)
#### 4-1) 북마크 페이지
<div>상세 페이지에서 클릭한 북마크를 DB에 저장하였다가 메인화면의 북마크 페이지에서 모두 확인 할 수 있도록 하였다.</div>
<div>삭제 버튼을 통해 북마크를 취소할 수 있다.</div>
<br><br><br>

<div>*** 모든 Js 코드는 AI의 도움없이 작성함을 알림</div>
