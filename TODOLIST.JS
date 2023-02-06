const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector(".Clear");

addButton.addEventListener("click", () => {
  const input = document.querySelector("#input");
  const text = input.value.trim(); /*trim()을 이용해 양끝 공백을 없애주기*/

  if (text !== "") {
    addToList(text);
    input.value = "";
    input.focus();
  }
});

function addToList(text) {
  const list = document.querySelector("#list");

  const newListItem = document.createElement("li");
  const newCheckbox = document.createElement("input");

  newListItem.classList.add("list-item");
  newCheckbox.classList.add("check-box");

  newListItem.innerHTML = text;
  newCheckbox.setAttribute("type", "checkbox");
  list.appendChild(newListItem);
  list.appendChild(newCheckbox);
}

clearButton.addEventListener("click", () => {
  const header = document.querySelectorAll(".list-item")
  for (const i = 0; i < header.length; i++) {
    const item = header.item(i);
    item.parentNode.removeChild(item);
  }
})/*일단 삭제하는거까지는 만듦 but queryselectorAll이 아니기 때문에 현재는 맨 위에 요소만 삭제 가능 */
/*querySelectorAll을 사용했는데 아직도 맨 위에 요소만 삭제(이유 모름) */

clearButton.addEventListener("click", () => {
  const cb = document.querySelectorAll(".checkbox")
  for (const i = 0; i < cb.length; i++) {
    const it = cb.item(i);
    it.parentNode.removeChild(it);
  }
})
/* 체크박스도 같이 삭제해야되는데 버튼 하나로 하는 방법이 잘 안떠오름(고민해보기!)*/