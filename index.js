const item2 = document.querySelector(".list-group-item:nth-child(2)");
const item3 = document.querySelector(".list-group-item:nth-child(3)");
item2.style.backgroundColor = "green";
item3.style.display = "none";
const items = document.querySelectorAll(".list-group-item");

items[2].style.backgroundColor = "green";
const oddItems = document.querySelectorAll(".list-group-item:nth-child(odd");
for (let i = 0; i < oddItems.length; ++i) {
  oddItems[i].style.backgroundColor = "green";
}
