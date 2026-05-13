export default function GameStats({ moves, isGameOver, resetGame, bestScore }) {
  return (
    <>
      <p>moves : {moves} </p>
      {bestScore && <p>Recored :{bestScore} </p>}
      {isGameOver && (
        <>
          <p>Game Over </p>
          <button onClick={resetGame}>start a new game</button>
        </>
      )}
    </>
  );
}
