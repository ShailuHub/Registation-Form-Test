const headerTitle = document.getElementById("header-title");
const mainHeader = document.getElementById("main-header");
const title = document.getElementsByClassName("title");
mainHeader.style.borderBottom = "solid 2px black";
title[0].style.color = "green";
title[0].style.fontWeight = 900;
const item = document.querySelector(".list-group-item:nth-child(3)");
item.style.backgroundColor = "green";
const items = document.querySelectorAll(".list-group-item");
for (let i = 0; i < items.length; ++i) {
  items[i].style.fontWeight = 900;
}
const newName = document.getElementsByClassName("list-group-item");
for (let i = 0; i < newName.length; ++i) {
  newName[i].style.backgroundColor = "pink";
}
const newTagName = document.getElementsByTagName("li");

for (let i = 0; i < newTagName.length; ++i) {
  newTagName[i].style.backgroundColor = "yellow";
}
