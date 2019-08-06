import { combineReducers } from "redux";
import SymbolReducer from "./symbolsReducer";
import Convert from "./convertReducer";

export default combineReducers({
  SymbolReducer,
  Convert
});
