const headerFirst = document.querySelector(".header-first");
const headerSecond = document.querySelector(".header-second");
const formSubmit = document.querySelector(".submit");
const body = document.querySelector("body");
const falseUser = document.querySelector(".form-user span");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const actionFormUser = document.querySelector(".form-user form");

var prevScroll = window.pageYOffset;

function onScroll() {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    headerFirst.style.top = "0px";
    headerSecond.style.top = "0px";
  } else {
    headerFirst.style.top = "-55px";
    headerSecond.style.top = "-45px";
  }
  prevScroll = currentScroll;
}

window.addEventListener("scroll", onScroll);

const array = [
  {
    username: "tienntph33298@fpt.edu.vn",
    password: "tien2004",
  },
  {
    username: "tien@gmail.com",
    password: "tien2401",
  },
];

actionFormUser.addEventListener("submit", (e) => {
  if (
    username.value == array[0].username &&
    password.value == array[0].password
  ) {
    actionFormUser.action = "/Tài khoản/taikhoan.html";
  } else {
    falseUser.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
    e.preventDefault();
  }
});
console.log(dataArray);
