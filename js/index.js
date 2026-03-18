// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateInput = document.querySelector("#til-date");
    const titleInput = document.querySelector("#til-title");
    const contentInput = document.querySelector("#til-content");

    const dateValue = dateInput.value.trim();
    const titleValue = titleInput.value.trim();
    const contentValue = contentInput.value.trim();

    if (!dateValue || !titleValue || !contentValue) {
      alert("날짜, 제목, 내용을 모두 입력해주세요.");
      return;
    }

    const tilItem = document.createElement("article");
    tilItem.classList.add("til-item");

    tilItem.innerHTML = `
      <time datetime="${dateValue}">${dateValue}</time>
      <h3>${titleValue}</h3>
      <p>${contentValue}</p>
    `;

    tilList.prepend(tilItem);

    tilForm.reset();
  });