
import "./App.css";
import GameStats from "./components/GameStatts";
import Board from "./components/Board";
import useMemoryGame from "./components/hooks/useMemoryGame";


function App() {
  const [cards, moves , isGameOver , handleClick , resetGame]=useMemoryGame();
  return (
    <div className="container">
     <GameStats moves={moves} isGameOver={isGameOver} resetGame={resetGame}> </GameStats>
     <Board cards={cards}  onCardClick={handleClick} disable={isGameOver}></Board>
    </div>
  );
}

export default App;
