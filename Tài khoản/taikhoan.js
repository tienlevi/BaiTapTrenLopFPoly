const headerFirst = document.querySelector(".header-first");
const headerSecond = document.querySelector(".header-second");
const asideLeft = document.querySelectorAll(".aside-left-name");
const asideRight = document.querySelectorAll(".aside-right-column");

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

window.addEventListener("scroll", onScroll);

for (let i = 0; i < asideLeft.length; i++) {
    asideLeft[i].addEventListener("click", () => {
        document.querySelector(".active-tab").classList.remove("active-tab");
        asideLeft[i].classList.add("active-tab");
        console.log(true);
    })
}