// Quando o DOM for completamente carregado
window.onload = () => {
  console.log("xesq");
  createBoard();
};

const cardArray = [
  { name: "sutia", img: "images/sutia.svg" },
  { name: "sutia", img: "images/sutia.svg" },
  { name: "bikini", img: "images/bikini.svg" },
  { name: "bikini", img: "images/bikini.svg" },
  { name: "chapeu", img: "images/chapeu-coco.svg" },
  { name: "chapeu", img: "images/chapeu-coco.svg" },
  { name: "top", img: "images/esportes-e-competicao.svg" },
  { name: "top", img: "images/esportes-e-competicao.svg" },
  { name: "meia", img: "images/meias.svg" },
  { name: "meia", img: "images/meias.svg" },
  { name: "acessorio", img: "images/acessorio.svg" },
  { name: "acessorio", img: "images/acessorio.svg" },
];

const createBoard = () => {
  const container = document.getElementById("mainContainer");

  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/card.svg");
    card.setAttribute("height", 100);
    card.setAttribute("data-id", i);
    container.appendChild(card);
    card.addEventListener("click", () => flipCard(card));
  }

  console.log("create board");
};

function flipCard(card) {
  const cardId = card.getAttribute("data-id");
  const cardData = cardArray[cardId];
  card.setAttribute("src", cardData.img);
}
