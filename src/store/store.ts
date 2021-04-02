import { createStore, combineReducers } from "redux";
import { cardsReducer } from "./cards-reducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

const store = createStore(rootReducer);

export default store


