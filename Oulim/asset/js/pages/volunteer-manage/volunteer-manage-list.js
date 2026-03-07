// 페이지네이션

const rows = document.querySelectorAll(".c-list__row");
const pagination = document.querySelector(".c-pagination");

const perPage = 10; // 한 페이지 리스트 개수
const pageGroup = 10; // 페이지 버튼 개수

const totalPages = Math.ceil(rows.length / perPage);    // 전체 페이지 계싼

let currentPage = 1; 


// 페이지의 데이터 표시 함수
function showPage(page) {
  currentPage = page;

  rows.forEach((row, index) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    row.style.display = (index >= start && index < end) ? "" : "none";
  });

  renderPagination();
}

// 페이지 버튼 생성 함수
function renderPagination() {
  pagination.innerHTML = "";

  const groupStart = Math.floor((currentPage - 1) / pageGroup) * pageGroup + 1;
  const groupEnd = Math.min(groupStart + pageGroup - 1, totalPages);

  // 이전 페이지 그룹 버튼 생성
  if (groupStart > 1) {
    const prev = document.createElement("a");
    prev.className = "c-pagination__link";
    prev.textContent = "‹";
    prev.onclick = () => showPage(groupStart - 1);
    pagination.appendChild(prev);
  }

  // 페이지 번호 버튼 생성
  for (let i = groupStart; i <= groupEnd; i++) {
    const btn = document.createElement("a");
    btn.className = "c-pagination__link";
    if (i === currentPage) btn.classList.add("is-active");

    btn.textContent = i;
    btn.onclick = () => showPage(i);

    pagination.appendChild(btn);
  }

  // 다음 페이지 그룹 버튼 생성
  if (groupEnd < totalPages) {
    const next = document.createElement("a");
    next.className = "c-pagination__link";
    next.textContent = "›";
    next.onclick = () => showPage(groupEnd + 1);
    pagination.appendChild(next);
  }
}

// 첫 페이지네이션 초기 실행
showPage(1);