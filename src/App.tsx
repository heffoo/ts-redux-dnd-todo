import React, { useState, DragEvent } from "react";
import { useTypedDispatch, useTypedSelector } from "./store/store-hooks";
import { setCardList } from "./store/cards-reducer";
import { Card, CardList } from "./store/store-types";
import "./App.scss";

function App() {
  const cardList = useTypedSelector((state) => state.cards.cardList);

  const dispatch = useTypedDispatch();

  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  function setCards(cardList: CardList) {
    dispatch(setCardList(cardList));
  }

  function dragStartHandler(e: DragEvent<HTMLDivElement>, card: Card) {
    setCurrentCard(card);
  }

  function dragEndHandler(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.style.backgroundColor = "white";
  }

  function dragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "lightgray";
  }

  function dropHandler(e: DragEvent<HTMLDivElement>, card: Card) {
    e.preventDefault();
    if (currentCard) {
      setCards(
        cardList.map((c: Card) => {
          if (c.id === card.id) {
            return { ...c, order: currentCard.order };
          }

          if (c.id === currentCard.id) {
            return { ...c, order: card.order };
          }

          return c;
        })
      );
    }
  }

  function sortCards(a: Card, b: Card): number {
    return a.order > b.order ? 1 : -1;
  }

  return (
    <div className="app">
      {cardList.sort(sortCards).map((card: Card) => (
        <div
          key={card.order}
          className="app__card"
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={dragEndHandler}
          onDragEnd={dragEndHandler}
          onDragOver={dragOverHandler}
          onDrop={(e) => dropHandler(e, card)}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
}

export default App;
