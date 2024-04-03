const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
  const navbar = document.getElementById("navigation");
  navbar.classList.toggle("open");
  e.stopPropagation();

  const main = document.querySelector("main");
  main.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    e.stopPropagation();
  });
});
