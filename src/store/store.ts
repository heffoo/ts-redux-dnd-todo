import listReducer from "../reducers/listReducer";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector} from 'react-redux';
import appReducer from "../reducers/appReducer";

const rootReducer = combineReducers({
    list: listReducer,
    app: appReducer,
    
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;