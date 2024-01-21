import { AppDispatch, RootState } from ".";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRR,
  useSelector as useSelectorRR,
} from "react-redux";

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = useDispatchRR;
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRR;
