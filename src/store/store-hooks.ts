import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "./store-types";

export const useTypedDispatch = () => useDispatch<Dispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
