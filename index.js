const form = document.getElementById("addForm");
const listItem = document.getElementById("items");
const filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
listItem.addEventListener("click", removeItem);
filter.addEventListener("keyup", searchItem);

function addItem(event) {
  event.preventDefault();
  //Target the input value
  const insertItemValue1 = document.getElementById("item1");
  const insertItemValue2 = document.getElementById("item2");
  //const insertItemValue = document.getElementById("item1");
  const value1 = insertItemValue1.value;
  const value2 = insertItemValue2.value;

  //Crate a ListNode
  const newItem = document.createElement("li");

  // Add class to ListNode
  newItem.className = "list-group-item";

  //Add textNode to list
  newItem.appendChild(document.createTextNode(value1));
  newItem.appendChild(document.createTextNode(` ${value2}`));

  //Add delete Button
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-info btn-sm float-right edit mr-2";
  //Add textNode to button
  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("edit"));

  //inserting delete button to newItem list
  newItem.appendChild(deleteBtn);
  newItem.appendChild(editBtn);

  //Insert newItem to the DOM
  listItem.appendChild(newItem);
}

function removeItem(event) {
  event.preventDefault();
  let contain = event.target.classList.contains("delete");
  if (contain) {
    if (confirm("Are u sure ?")) {
      listItem.removeChild(event.target.parentElement);
    }
  }
}

function searchItem(event) {
  event.preventDefault();
  let text = event.target.value.toLowerCase();
  const item = listItem.getElementsByTagName("li");
  Array.from(item).forEach((element) => {
    let filteredItem = element.childNodes[0].textContent;
    let description = element.childNodes[1].textContent;
    // searching text in string using indexOf();
    //gives the index of first matching character.
    if (
      filteredItem.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
