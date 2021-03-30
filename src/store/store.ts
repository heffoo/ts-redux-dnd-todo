import appReducer from "../reducers/reducer";
import { createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
    app: appReducer,
    
});


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;