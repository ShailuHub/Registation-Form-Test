const mouseover = document.getElementById("mouseover");
const mouseout = document.getElementById("mouseout");
const submit = document.getElementById("submit");

mouseover.addEventListener("mouseover", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  ``;
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
});

mouseout.addEventListener("mouseout", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
});

submit.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  ``;
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
});
