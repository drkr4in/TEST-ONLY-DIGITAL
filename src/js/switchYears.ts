let nav_1 = document.querySelector(".main-block__nav-1") as HTMLDivElement;
let nav_6 = document.querySelector(".main-block__nav-6") as HTMLDivElement;
let ye1 = document.querySelector(".main-block__years1") as HTMLDivElement;
let ye2 = document.querySelector(".main-block__years2") as HTMLDivElement;
document
  .querySelector(".circle__wrapper-el1")
  .addEventListener("click", function () {
    nav_1.style.display = "block";
    nav_1.style.transition = "1s";
    nav_6.style.display = "none";
    nav_6.style.transition = "1s";
    ye1.innerHTML = "1999";
    ye2.innerHTML = "2004";
  });
document
  .querySelector(".circle__wrapper-el6")
  .addEventListener("click", function () {
    nav_1.style.display = "none";
    nav_1.style.transition = "1s";
    nav_6.style.display = "block";
    nav_6.style.transition = "1s";
    ye1.innerHTML = "2015";
    ye2.innerHTML = "2020";
  });
