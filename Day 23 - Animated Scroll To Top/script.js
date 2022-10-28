// Active Menu Switcher

// SCROLL TO TOP
const scrollBtn = document.querySelector(".top");
const rootEL = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEL.scrollHeight - rootEL.clientHeight;
  if (rootEL.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEL.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}