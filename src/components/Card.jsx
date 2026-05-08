export default function Card({ value, isFlipped, isMatched, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped || isMatched ? value : "?"}
    </div>
  );
}
