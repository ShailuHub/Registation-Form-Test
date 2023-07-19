const ele = document.querySelector("#items");
// console.log(ele);
// //Parent Node
// console.log(ele.parentNode);
// console.log(ele.parentNode.parentNode);
// console.log(ele.parentNode.parentNode.parentNode);

// // ParentElement
// console.log(ele.parentElement);
// console.log(ele.parentElement.parentElement);
// console.log(ele.parentElement.parentElement.parentElement);

// // Child Node
// // Include text
// console.log(ele.childNodes);

// //Children
// //Include only element
// console.log(ele.children);

// //Siblings
// //Include text
// console.log(ele.nextSibling);
// console.log(ele.previousSibling);

// //Siblig Element
// //Include only element
// console.log(ele.nextElementSibling);
// console.log(ele.previousElementSibling);

//creating a new div element
const newDiv = document.createElement("div");

//Giving class name to it
newDiv.className = "newDiv";

//Giving id name to it
newDiv.id = "new_div";
//Adding Attribue

newDiv.setAttribute("style", "color:red");

//creating textNode
const newText = document.createTextNode("Hello World");

//Inserting newText;
newDiv.appendChild(newText);

//Insetring newDiv in DOM
const container = document.querySelector(".container");
const h1 = document.querySelector("#header-title");
container.insertBefore(newDiv, h1);

const ListItem = document.querySelector("#items");
const item1 = document.querySelector(".list-group-item:nth-child(1)");
const newListItem = document.createElement("li");
newListItem.className = "list-group-item";
const liText = document.createTextNode("Hello World");
newListItem.appendChild(liText);
ListItem.insertBefore(newListItem, item1);
console.log(newListItem);

console.log(newDiv);
