const headerFirst = document.querySelector(".header-first");
const headerSecond = document.querySelector(".header-second");

var prevScroll = window.pageYOffset

function onScroll() {
    let currentScroll = window.pageYOffset
    if (prevScroll > currentScroll) {
        headerFirst.style.top = "0px";
        headerSecond.style.top = "0px"
    } else {
        headerFirst.style.top = "-55px";
        headerSecond.style.top = "-45px"
    }
    prevScroll = currentScroll;
}

window.addEventListener("scroll", onScroll)
console.log(window)