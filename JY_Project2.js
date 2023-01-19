'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);

function addItem() {
  let item = document.querySelector(".item").value;
  if (item != null) {
      itemList.push(item);
      document.querySelector(".item").value = "";
      document.querySelector(".item").focus();
  }

  showList();
}

function addItem() {
  let item = document.querySelector(".item").value;
  if (item != null) {
      itemList.push(item);
      document.querySelector(".item").value = "";
      document.querySelector(".item").focus();
  }

  showList();
}

let checkList = document.querySelector('.item__list');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});