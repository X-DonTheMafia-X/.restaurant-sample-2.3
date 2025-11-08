let input_username, input_password;
let username = "admin";
let password = "123";

document.getElementById("submit").onclick = function () {
  input_username = document.getElementById("user").value;
  input_password = document.getElementById("pwd").value;

  if (input_username == username && input_password == password) {
    window.location.href = "./public/home.html";
  } else {
    document.getElementById("p1").textContent = `Your password was incorrect.`;
  }
};
