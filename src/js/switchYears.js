document
  .querySelector(".circle__wrapper-el1")
  .addEventListener("click", function () {
    document.querySelector(".main-block__nav-1").style.display = "block";
    document.querySelector(".main-block__nav-1").style.transition = "1s";
    document.querySelector(".main-block__nav-6").style.display = "none";
    document.querySelector(".main-block__nav-6").style.transition = "1s";
    document.querySelector(".main-block__years1").innerHTML = "1999";
    document.querySelector(".main-block__years1").transition = "1s";
    document.querySelector(".main-block__years2").innerHTML = "2004";
    document.querySelector(".main-block__years2").transition = "1s";
  });
document
  .querySelector(".circle__wrapper-el6")
  .addEventListener("click", function () {
    document.querySelector(".main-block__nav-1").style.display = "none";
    document.querySelector(".main-block__nav-1").style.transition = "1s";
    document.querySelector(".main-block__nav-6").style.display = "block";
    document.querySelector(".main-block__nav-6").style.transition = "1s";
    document.querySelector(".main-block__years1").innerHTML = "2015";
    document.querySelector(".main-block__years1").transition = "1s";
    document.querySelector(".main-block__years2").innerHTML = "2020";
    document.querySelector(".main-block__years2").transition = "1s";
  });
