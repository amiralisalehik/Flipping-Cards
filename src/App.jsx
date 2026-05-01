import { useEffect, useState } from "react";
import "./App.css";

let values = [
  "apple",
  "banana",
  "Orange",
  "wather melone",
  "pinapple",
  "caroot",
  "peenat",
  "tomato",
];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    //swap arr[i] & arr[j]
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function createRandomCards() {
  let cards = [];
  for (let i = 0; i < values.length; i++) {
    cards.push(
      { id: i * 2, value: values[i], isFlipped: false, isMatched: false },
      { id: i * 2 + 1, value: values[i], isFlipped: false, isMatched: false },
    );
  }
  return shuffleArray(cards);
}

function App() {
  const [cards, setCards] = useState(createRandomCards()); // آرایه از آبجکت ها  object of cards whit these attre : .value .isFlipped  .isMatched
  const [selectedCards, setSelectedCards] = useState([]); //آرایه از ایندکس ها و عدد index of user selected
  const [isBoardLock, setIsBoardLock] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function handleClick(clicedIndex) {
    if (isBoardLock) return;
    if (cards[clicedIndex].isMatched) return;
    if (cards[clicedIndex].isFlipped) return;
    setCards((precCards) =>
      precCards.map((card, index) =>
        index === clicedIndex ? { ...card, isFlipped: true } : card,
      ),
    );
    setSelectedCards((prev) => [...prev, clicedIndex]);
  }

  //handle game
  useEffect(() => {
    if (selectedCards.length === 2) {
      setIsBoardLock(true);
      setMoves((prev) => prev + 1);
      let valueA = cards[selectedCards[0]].value;
      let valueB = cards[selectedCards[1]].value;

      if (valueA === valueB) {
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === selectedCards[0] || index === selectedCards[1]
              ? { ...card, isMatched: true, isFlipped: true }
              : card,
          ),
        );
        setSelectedCards([]);
        setIsBoardLock(false);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === selectedCards[0] || index === selectedCards[1]
                ? { ...card, isFlipped: false }
                : card,
            ),
          );
          setSelectedCards([]);
          setIsBoardLock(false);
        }, 600);
      }
    }
  }, [selectedCards]);

  //handle game is over
  useEffect(() => {
    if (cards.length === 0) return;

    let allMatched = true; //local Var for cheeking is all matches?
    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].isMatched) {
        allMatched = false;
        break;
      }
    }
    if (allMatched) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 1000);
    }
  }, [cards]);

  return (
    <>
      <h2>moves : {moves}</h2>
      {!isGameOver && (
        <div className="cards">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="card"
              onClick={() => {
                handleClick(index);
              }}
            >
              {card.isFlipped || card.isMatched ? card.value : "?"}
            </div>
          ))}
        </div>
      )}
      {isGameOver && <h1>Game Over </h1>}
    </>
  );
}

export default App;
