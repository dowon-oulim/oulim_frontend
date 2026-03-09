// 1. 닉네임 중복확인
// 2. 이메일 중복확인
// 3. 인증 완료 > 필드 에러 출력 
// 4. 비밀번호 조건 검사 > 일정 자리수 이상, 정규식 검사
// 5. 주소검색 > api 사용
// 6. 저장 > 수정이 완료되었습니다
// 수정된 값이 없으면 그냥 현재 상태 유지

// const nickname = document.getElementsByName("nickname")[0];
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const verify = document.getElementById("verify");
const newPassword = document.getElementsByName("new-password");
const passwordChk = document.getElementsByName("new-password-check");

const exist1 = document.getElementsByClassName("c-button c-button--primary c-button--md")[0];
const exist2 = document.getElementsByClassName("c-button c-button--primary c-button--md")[1];
const verifyBtn = document.getElementsByClassName("c-button c-button--primary c-button--md")[2];
const addrBtn = document.getElementsByClassName("c-button c-button--primary c-button--md")[3];


const accept = document.getElementById("accept");
const cancel = document.getElementById("cancel");

exist1.addEventListener("click", () => { // 닉네임 검사

    if (nickname.value.trim() === "") {
        alert("비었음");
    } else if (nickname.value.trim() === "wnstmd") {
        alert("중복임");
    };

});

exist2.addEventListener("click", () => { // 이메일 검사

    if (email.value.trim() === "") {
        alert("비었음");
    } else if (email.value.trim() === "wnstmd@naver.com") {
        alert("중복임");
    };

});

verifyBtn.addEventListener("click", () => { // 인증번호 검사

    if (verify.value.trim() === "") {
        alert("값 입력 안됨");
    } else if (verify.value.trim() === "1234") {
        alert("인증성공");
    };
});

addrBtn.addEventListener("click", () => { // 주소 입력 api

    alert("주소 입력 성공");

});


accept.addEventListener("click", () => {

    alert("수정 완료");

});

cancel.addEventListener("click", () => {
    // location("../");
    alert("취소");
});