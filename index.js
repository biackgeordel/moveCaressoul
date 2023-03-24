console.log("bonjour les amis du zero");
const boxElement = document.querySelector(".box-element");
const tabElement = boxElement.querySelectorAll(".el-item");
let pas = 0;
let tabPas = [];
[...tabElement].map((element) => {
  element.addEventListener("touchmove", (event) => {
    console.log(event);

    pas = pas + 10;
    if (tabPas.length !== 0) {
      pas = tabPas[0] + 10;
      tabPas[0] = pas;
      [...tabElement].map((el) => {
        el.style.transform = `translateX(-${pas}px)`;
      });
    } else {
      tabPas.push(pas);
      console.log(tabPas);
      [...tabElement].map((el) => {
        el.style.transform = `translateX(-${pas}px)`;
      });
    }
  });
  //   element.addEventListener("touchstart", (event) => {
  //     console.log(event);
  //   });
  element.addEventListener("touchstart", (event) => {
    pas = 0;
  });
});
