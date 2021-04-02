import React, { useState, DragEvent } from "react";

import "./App.scss";

interface Card {
  id: number;
  order: number;
  text: string;
}

type CardList = Array<Card>;

function App() {
  const [cardList, setCardList] = useState<CardList>([
    { id: 1, order: 3, text: "КАРТОЧКА 3" },
    { id: 2, order: 1, text: "КАРТОЧКА 1" },
    { id: 3, order: 2, text: "КАРТОЧКА 2" },
    { id: 4, order: 4, text: "КАРТОЧКА 4" },
  ]);

  const [currentCard, setCurrentCard] = useState<Card | null>(null)

  function dragStartHandler(e: DragEvent<HTMLDivElement>, card: Card) {
    console.log("drag", card);
  }

  function dragEndHandler(e: DragEvent<HTMLDivElement>) {}

  function dragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: DragEvent<HTMLDivElement>, card: Card) {
    e.preventDefault();
    console.log("drop", card);
  }

  return (
    <div className="app">
      {cardList.map((card: Card, index: number) => (
        <div
          key={index + card.id}
          className="app__card"
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
}

export default App;
