const cardDeck = [
  { value: 2, cardNumber: 2, suit: "Espadas" },
  { value: 2, cardNumber: 2, suit: "Diamantes" },
  { value: 2, cardNumber: 2, suit: "Tréboles" },
  { value: 2, cardNumber: 2, suit: "Corazones" },
  { value: 3, cardNumber: 3, suit: "Espadas" },
  { value: 3, cardNumber: 3, suit: "Diamantes" },
  { value: 3, cardNumber: 3, suit: "Tréboles" },
  { value: 3, cardNumber: 3, suit: "Corazones" },
  { value: 4, cardNumber: 4, suit: "Espadas" },
  { value: 4, cardNumber: 4, suit: "Diamantes" },
  { value: 4, cardNumber: 4, suit: "Tréboles" },
  { value: 4, cardNumber: 4, suit: "Corazones" },
  { value: 5, cardNumber: 5, suit: "Espadas" },
  { value: 5, cardNumber: 5, suit: "Diamantes" },
  { value: 5, cardNumber: 5, suit: "Tréboles" },
  { value: 5, cardNumber: 5, suit: "Corazones" },
  { value: 6, cardNumber: 6, suit: "Espadas" },
  { value: 6, cardNumber: 6, suit: "Diamantes" },
  { value: 6, cardNumber: 6, suit: "Tréboles" },
  { value: 6, cardNumber: 6, suit: "Corazones" },
  { value: 7, cardNumber: 7, suit: "Espadas" },
  { value: 7, cardNumber: 7, suit: "Diamantes" },
  { value: 7, cardNumber: 7, suit: "Tréboles" },
  { value: 7, cardNumber: 7, suit: "Corazones" },
  { value: 8, cardNumber: 8, suit: "Espadas" },
  { value: 8, cardNumber: 8, suit: "Diamantes" },
  { value: 8, cardNumber: 8, suit: "Tréboles" },
  { value: 8, cardNumber: 8, suit: "Corazones" },
  { value: 9, cardNumber: 9, suit: "Espadas" },
  { value: 9, cardNumber: 9, suit: "Diamantes" },
  { value: 9, cardNumber: 9, suit: "Tréboles" },
  { value: 9, cardNumber: 9, suit: "Corazones" },
  { value: 10, cardNumber: 10, suit: "Espadas" },
  { value: 10, cardNumber: 10, suit: "Diamantes" },
  { value: 10, cardNumber: 10, suit: "Tréboles" },
  { value: 10, cardNumber: 10, suit: "Corazones" },
  { value: 11, cardNumber: "J", suit: "Espadas" },
  { value: 11, cardNumber: "J", suit: "Diamantes" },
  { value: 11, cardNumber: "J", suit: "Tréboles" },
  { value: 11, cardNumber: "J", suit: "Corazones" },
  { value: 12, cardNumber: "Q", suit: "Espadas" },
  { value: 12, cardNumber: "Q", suit: "Diamantes" },
  { value: 12, cardNumber: "Q", suit: "Tréboles" },
  { value: 12, cardNumber: "Q", suit: "Corazones" },
  { value: 13, cardNumber: "K", suit: "Espadas" },
  { value: 13, cardNumber: "K", suit: "Diamantes" },
  { value: 13, cardNumber: "K", suit: "Tréboles" },
  { value: 13, cardNumber: "K", suit: "Corazones" },
  { value: 14, cardNumber: "AS", suit: "Espadas" },
  { value: 14, cardNumber: "AS", suit: "Diamantes" },
  { value: 14, cardNumber: "AS", suit: "Tréboles" },
  { value: 14, cardNumber: "AS", suit: "Corazones" },
];
let firstCardValue;
let secondCardValue;
let playAgain = true;

const registerEventListeners = () => {
  let generateFirstRandomCard = document.querySelector(".generate-first-card");
  generateFirstRandomCard.addEventListener(
    ("click",
    () => {
      getRandomCard(randomCard);
    })
  );

  let generateSecondRandomCard = document.querySelector(
    ".generate-second-card"
  );
  generateSecondRandomCard.addEventListener(
    ("click",
    () => {
      getSecondRandomCard(randomCard);
    })
  );
};

const getRandomCard = (randomCard) => {
  randomCard = Math.floor((Math.random() * cardDeck.length) / 4);

  return firstCardValue === cardDeck[randomCard].value;
};

const getSecondRandomCard = (randomCard) => {
  randomCard = Math.floor((Math.random() * cardDeck.length) / 4);

  return secondCardValue === cardDeck[randomCard].value;
};

const checkUserAnswer = (askCardValueToUser) => {
  getSecondRandomCard();
  if (secondCardValue < firstCardValue && askCardValueToUser === "menor") {
  }
  let reStart = confirm("Do you want to try again?");
  if (reStart === true) {
    generateNewGame();
  } else {
    playAgain = false;
  }
};

const generateNewGame = () => {
  getRandomCard();
};

const finalGame = () => {
  generateNewGame();
};

finalGame();
