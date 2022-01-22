// header
function menutoggle(params) {
    let element = document.getElementById("nav");
    element.classList.toggle("show");
}
// scrool to top
let span = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrollY >= 600) {
        span.classList.add("vew");
    }
    else {
        span.classList.remove("vew");
    }
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
// go to section
const links = document.querySelectorAll(".scrol");
links.forEach((item) => {
    item.addEventListener("click", function () {
        const elment = document.getElementById(item.getAttribute("data-link"));
        elment.scrollIntoView({ behavior: "smooth", block: "center" })
    })
})
