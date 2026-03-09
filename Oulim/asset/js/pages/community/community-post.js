const postContent = document.querySelector(".l-community-post-detail .c-textarea");

const postBtn = document.querySelector(".c-button-group .c-button");
const imageInput = document.querySelector("#imageInput");
postBtn.addEventListener("click",(e) => {
    console.log("등록 버튼 클릭");

    if (!isLogin) {
        alert("로그인이 필요합니다.")

        // TODO : 로그인 페이지로 이동
        return;
    }

    if (userType !== USER_TYPE.USER) {
        alert("기업 회원 및 관리자는 사용할 수 없습니다.");
        return;
    }

    if (commentText.value.trim() === "") {
        alert("댓글 내용을 입력해주세요.");
        return;
    }

    if(postContent.value.trim() === ""){
        alert("작성 내용이 없습니다.");
        return;
    }

    if(imageInput.length > 1){
        alert("이미지 첨부는 하나만 가능합니다.");
        return;
    }
});