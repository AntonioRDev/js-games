// Quando o DOM for completamente carregado
window.onload = () => {
  console.log("xesq");
  createBoard();
};

const cardArray = [
  { name: "sutia", img: "../images/sutia.svg" },
  { name: "sutia", img: "../images/sutia.svg" },
  { name: "bikini", img: "../images/bikini.svg" },
  { name: "bikini", img: "../images/bikini.svg" },
  { name: "chapeu", img: "../images/chapeu.svg" },
  { name: "chapeu", img: "../images/chapeu.svg" },
  { name: "top", img: "../images/top.svg" },
  { name: "top", img: "../images/top.svg" },
  { name: "meia", img: "../images/meia.svg" },
  { name: "meia", img: "../images/meia.svg" },
  { name: "acessorio", img: "../images/acessorio.svg" },
  { name: "acessorio", img: "../images/acessorio.svg" },
];

const createBoard = () => {
  const container = document.getElementById("mainContainer");

  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/card.svg");
    card.setAttribute("height", 100);
    card.setAttribute("data-id", i);
    container.appendChild(card);
    // card.addEventListener("click", flipCard);
  }

  console.log("create board");
};
