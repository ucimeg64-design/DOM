// let zurag = document.getElementById("zurag");
// let info = document.getElementById("info");
// function showInfo() {
//   const newSrc = "/image2.png";
//   const newAlt = "river"
//   let alt = zurag.getAttribute("alt");
//   info.innerHTML = `Tailbar: ${alt}`;
//   zurag.setAttribute("src", newSrc);
//   zurag.setAttribute("alt", newAlt);
// }



let zurag = document.getElementById("zurag");
let info = document.getElementById("info");

function showInfo() {
  const newSrc = "images/image2.png";
  const newAlt = "river";

  let alt = zurag.getAttribute("alt");

  info.innerHTML = `Tailbar: ${alt}`;

  zurag.setAttribute("src", newSrc);
  zurag.setAttribute("alt", newAlt);
}
