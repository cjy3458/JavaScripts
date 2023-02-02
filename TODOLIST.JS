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
  newListItem.classList.add("list-item");

  newListItem.innerHTML = text;

  list.appendChild(newListItem);
}

clearButton.addEventListener("click", () => {
  const header = document.querySelector(".list-item")
  header.parentNode.removeChild(header);
})/*일단 삭제하는거까지는 만듦 but queryselectorAll이 아니기 때문에 현재는 맨 위에 요소만 삭제 가능 */