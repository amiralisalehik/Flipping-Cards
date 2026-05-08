import Card from "./Card";

export default function Board({ cards, onCardClick , disable }) {
  return (
    <>
    {!disable && <div className="cards">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          value={card.value}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          onClick={() => onCardClick(index)}
        ></Card>
      ))}
    </div>}
    </>
  );
}
