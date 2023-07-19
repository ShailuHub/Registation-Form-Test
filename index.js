const form = document.getElementById("addForm");
const listItem = document.getElementById("items");

form.addEventListener("submit", addItem);
listItem.addEventListener("click", removeItem);

function addItem(event) {
  event.preventDefault();
  //Target the input value
  const insertItemValue = document.getElementById("item");
  const value = insertItemValue.value;
  console.log(value);
  //Crate a ListNode
  const newItem = document.createElement("li");

  // Add class to ListNode
  newItem.className = "list-group-item";

  //Add textNode to list
  newItem.appendChild(document.createTextNode(value));

  //Add delete Button
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-info btn-sm float-right delete mr-2";
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
