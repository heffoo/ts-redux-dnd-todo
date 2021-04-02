import { ActionTypes } from "./cards-reducer";
import store from "./store";

export interface Card {
  id: number;
  order: number;
  text: string;
}

export type CardList = Array<Card>;

export interface State {
  cardList: CardList;
}

export interface SetCardListAction {
  type: typeof ActionTypes.SET_CARD_LIST;
  cardList: CardList;
}

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type ActionType = SetCardListAction;