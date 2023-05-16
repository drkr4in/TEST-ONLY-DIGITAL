const rot: number = 60;
let cir = document.querySelector(".circle") as HTMLDivElement;
for (let i: number = 1; i <= 6; i++) {
  let btn = document.querySelector(`.circle__wrapper-el${i}`) as HTMLDivElement;
  btn.addEventListener("click", (e) => {
    let one = document.querySelector(".main-block__one") as HTMLSpanElement;
    one.innerHTML = String(i);
    cir.style.rotate = `${rot * i}deg`;
    cir.style.transition = "1s";
    for (let j: number = 1; j <= 6; j++) {
      let btn_j = document.querySelector(
        `.circle__wrapper-el${j}`
      ) as HTMLDivElement;
      btn_j.style.rotate = `${-rot * i}deg`;
      btn_j.style.transition = "1s";
    }
  });
}

const prev = document.querySelector(".main-block__prev") as HTMLDivElement;
const next = document.querySelector(".main-block__next") as HTMLDivElement;

prev.addEventListener("click", function () {
  let onePr = document.querySelector(".main-block__one") as HTMLSpanElement;
  if (Number(onePr.innerHTML) == 1) return;
  let inner: number = Number(onePr.innerHTML);
  let cirWrap = document.querySelector(
    `.circle__wrapper-el${--inner}`
  ) as HTMLDivElement;
  cirWrap.click();
});
next.addEventListener("click", function () {
  let oneNxt = document.querySelector(".main-block__one") as HTMLSpanElement;
  if (Number(oneNxt.innerHTML) == 6) return;
  let inner: number = Number(oneNxt.innerHTML);
  let cirWrap = document.querySelector(
    `.circle__wrapper-el${++inner}`
  ) as HTMLDivElement;
  cirWrap.click();
});
