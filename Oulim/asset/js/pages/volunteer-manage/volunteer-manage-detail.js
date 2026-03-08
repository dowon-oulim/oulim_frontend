document.addEventListener("DOMContentLoaded", () => {

  const rows = document.querySelectorAll(".c-list__row");               // 행
  const recommendBtns = document.querySelectorAll(".recommend-btn");    // 추천버튼
  const attendanceBtns = document.querySelectorAll(".attendance-btn");  // 출석버튼
  const absentBtns = document.querySelectorAll(".absent-btn");          // 결석버튼
  const card = document.querySelector(".c-detail-card");                // 상세카드
  const volunteerStatus = document.querySelector("#volunteerStatus");   // 봉사 상태

  const today = new Date();                                             // 현재날짜                                  
  const recruitStartDate = new Date(card.dataset.recruitStartDate);
  const recruitEndDate = new Date(card.dataset.recruitEndDate);
  const volunteerStartDate = new Date(card.dataset.volunteerStartDate);
  const volunteerEndDate = new Date(card.dataset.volunteerEndDate);

  today.setHours(0, 0, 0, 0);                                           // 날짜만 비교하기 위해 시간 초기화
  recruitStartDate.setHours(0,0,0,0);
  recruitEndDate.setHours(0,0,0,0);
  volunteerStartDate.setHours(0,0,0,0);
  volunteerEndDate.setHours(0,0,0,0);


  // 상태비교 후 변경
  if(today < recruitStartDate){
    volunteerStatus.textContent = "모집예정";
  }
  else if(today >= recruitStartDate && today <= recruitEndDate){
    volunteerStatus.textContent = "모집중";
  }
  else if(today >= volunteerStartDate && today <= volunteerEndDate){
    volunteerStatus.textContent = "진행중";
  }
  else if(today > volunteerEndDate){
    volunteerStatus.textContent = "완료";
  }

  // 날짜에 따라 버튼 활성화
  rows.forEach(row => {

    const volunteerDate = row.dataset.date;
    if (!volunteerDate) return;
    const targetDate = new Date(volunteerDate);
    targetDate.setHours(0, 0, 0, 0);

    const recommendBtn = row.querySelector(".recommend-btn");
    const attendanceBtn = row.querySelector(".attendance-btn");
    const absentBtn = row.querySelector(".absent-btn");
    const isActive = today >= targetDate;

    if (recommendBtn) recommendBtn.disabled = !isActive;
    if (attendanceBtn) attendanceBtn.disabled = !isActive;
    if (absentBtn) absentBtn.disabled = !isActive;
  });


  // 추천 버튼
  recommendBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      if (btn.disabled) return;
      alert("추천이 완료되었습니다.");

    });
  });


  // 출석 버튼
  attendanceBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      if (btn.disabled) return;
      alert("출석 처리되었습니다.");

    });
  });


  // 결석 버튼
  absentBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      if (btn.disabled) return;
      alert("결석 처리되었습니다.");

    });
  });

});