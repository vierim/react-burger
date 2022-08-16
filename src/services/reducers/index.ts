import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderDetailsPopupReducer } from "./order-details";
import { authReducer } from "./auth";
import { feedReducer } from "./feed";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  construct: burgerConstructorReducer,
  order: orderDetailsPopupReducer,
  user: authReducer,
  feed: feedReducer,
});
