const rotate = "60";
let circle = document.querySelector(".circle");
for (let i = 1; i <= 6; i++) {
  let btn = document.querySelector(`.circle__wrapper-el${i}`);
  btn.addEventListener("click", (e) => {
    document.querySelector(".main-block__one").innerHTML = i;
    circle.style.rotate = `${rotate * i}deg`;
    circle.style.transition = "1s";
    for (let j = 1; j <= 6; j++) {
      let btn_j = document.querySelector(`.circle__wrapper-el${j}`);
      btn_j.style.rotate = `${-rotate * i}deg`;
      btn_j.style.transition = "1s";
    }
  });
}
document
  .querySelector(".main-block__prev")
  .addEventListener("click", function () {
    let prev = document.querySelector(".main-block__one");
    if (prev.innerHTML == 1) return;
    document.querySelector(`.circle__wrapper-el${--prev.innerHTML}`).click();
  });
document
  .querySelector(".main-block__next")
  .addEventListener("click", function () {
    let nxt = document.querySelector(".main-block__one");
    if (nxt.innerHTML == 6) return;
    document.querySelector(`.circle__wrapper-el${++nxt.innerHTML}`).click();
  });
