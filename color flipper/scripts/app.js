const btn = document.querySelector(".submit-btn");
const h1 = document.querySelector("h1");
const bg = document.querySelector(".main");

console.log(btn);
console.log(h1);
console.log(bg);

btn.addEventListener("click", checking);

function checking() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  h1.innerText = `Background Color: #${randomColor}`;
  bg.style.backgroundColor = `#${randomColor}`;
}
