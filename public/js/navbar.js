import * as user from "../../models/user.js";

user.init();
navBar();

export function navBar() {
  let result = `<a href="./views/register.html">Sign Up</a>`;

  if (user.inSession()) {
    result = `<a href="#" id="logOut">Log Out</a>`;
  }

  const li = document.querySelector("li:nth-child(5)");

  li.innerHTML = result;

  const logout = document.querySelector("#logOut");
  if (logout) {
    logout.addEventListener("click", function (event) {
      event.preventDefault();
      user.logout();
      navBar();
    });
  }
}