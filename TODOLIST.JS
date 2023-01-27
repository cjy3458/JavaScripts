const addButton = document.querySelector("#add-button");

addButton.focus();

addButton.addEventListener("keydown", function(event) { 
  if(event.keyCode){
    addButton.click();
  }
});

addButton.addEventListener("click", () => { /*이 부분이 실행이 안되서 버튼이 활성화가 안되는거 같음(확인 필요) */
  const input = document.querySelector("#input");
  const text = input.value.trim();

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
