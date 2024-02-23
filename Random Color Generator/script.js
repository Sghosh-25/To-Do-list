
let randomcolor = document.getElementsByClassName("main");

const getRandomcolor = () => {
  const randomnum = Math.floor(Math.random() * 16777215);
  const colorcode = "#" + randomnum.toString(16);

  document.body.style.backgroundColor = colorcode;
  document.getElementById("color-code").innerText = colorcode;
};

document.getElementById("btn").addEventListener("click", getRandomcolor);

getRandomcolor();
