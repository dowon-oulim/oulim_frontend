const volunteerStartDate = document.querySelector('#volunteerStartDate');   // 봉사시작
const volunteerEndDate = document.querySelector('#volunteerEndDate');       // 봉사종료
const recruitStartDate = document.querySelector('#recruitStartDate');       // 모집시작
const recruitEndDate = document.querySelector('#recruitEndDate');           // 모집종료
const volunteerTime = document.querySelector('#volunteerTime');             // 봉사시간
const volunteerTarget = document.querySelector('#volunteerTarget');         // 봉사대상
const volunteerLocation = document.querySelector('#volunteerLocation');     // 봉사장소
const volunteerPoint = document.querySelector('#volunteerPoint');           // 획득포인트
const volunteerTitle = document.querySelector('#volunteerTitle');           // 봉사제목
const volunteerAge = document.querySelector('#volunteerAge');               // 연령대 선택
const volunteerCapacity = document.querySelector('#volunteerCapacity');     // 일자당 모집인원 선택
const volunteerCategory = document.querySelector('#volunteerCategory');     // 활동분야
const volunteerDetail = document.querySelector('#volunteerDetail');         // 봉사상세내용
const registerButton = document.querySelector('#registerButton');           // 작성버튼
const cancelButton = document.querySelector('#cancelButton');               // 취소버튼

// 필수값 검사
function isEmpty(field) {
    return !field.value || !field.value.trim();
}

/* 날짜 범위 검사 함수 */
function validateDateRange(startInput, endInput) {
    const startValue = startInput.value;
    const endValue = endInput.value;

    if (!startValue || !endValue) {
        return true;
    }

    return startValue <= endValue;
}

// 포인트 입력칸 숫자만 입력 가능
volunteerPoint.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

registerButton.addEventListener('click', function (event) {
    // 검사 항목 지정
    const requiredFields = [
        volunteerStartDate,
        volunteerEndDate,
        volunteerTime,
        recruitStartDate,
        recruitEndDate,
        // volunteerAge,
        // volunteerCapacity,
        // volunteerCategory,
        volunteerTarget,
        volunteerLocation,
        volunteerPoint,
        volunteerTitle,
        volunteerDetail
    ];

    //  하나라도 비어 있으면 등록 막기 
    for (let i = 0; i < requiredFields.length; i++) {
        if (isEmpty(requiredFields[i])) {
            alert('필수 항목이 입력되지 않아 등록할 수 없습니다.');
            requiredFields[i].focus();
            event.preventDefault();
            return;
        }
    }

    // 날짜 검사
    if(!validateDateRange(volunteerStartDate, volunteerEndDate) || !validateDateRange(recruitStartDate, recruitEndDate) || recruitEndDate.value > volunteerStartDate.value) {
        alert('날짜를 올바르게 입력해주세요.');
        event.preventDefault();
        return;
    }
});

// 취소버튼 클릭시
cancelButton.addEventListener('click', () => {
  if (confirm('작성 중인 내용이 사라집니다. 취소하시겠습니까?')) {
    location.href = '/Oulim/front/html/volunteer-management/volunteer-manage-list.html';
  }
});