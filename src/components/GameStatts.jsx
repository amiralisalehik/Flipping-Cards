export default function GameStats({ moves, isGameOver, resetGame }) {
  return (
    <>
      <p>moves : {moves} </p>
      {isGameOver && (
        <>
          <p>Game Over </p>
          <button onClick={resetGame}>start a new game</button>
        </>
      )}
    </>
  );
}
