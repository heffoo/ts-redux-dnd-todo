import { ActionType, CardList, SetCardListAction, State } from "./store-types";

export enum ActionTypes {
  SET_CARD_LIST = "SET_CARD_LIST",
}

const initialState: State = {
  cardList: [
    { id: 1, order: 1, text: "КАРТОЧКА 1" },
    { id: 2, order: 2, text: "КАРТОЧКА 2" },
    { id: 3, order: 3, text: "КАРТОЧКА 3" },
    { id: 4, order: 4, text: "КАРТОЧКА 4" },
  ],
};

export const setCardList = (cardList: CardList): SetCardListAction => ({
  type: ActionTypes.SET_CARD_LIST,
  cardList,
});

export function cardsReducer(
  state: State = initialState,
  action: ActionType
): State {
  if (action.type === ActionTypes.SET_CARD_LIST) {
    return { ...state, cardList: action.cardList };
  }

  return state;
}
