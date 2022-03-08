import { combineReducers } from "redux";
import { productReducer ,  selectedproductReducer } from "./Moviereducer";

export const reducer  = combineReducers({
allproducts : productReducer,
product :  selectedproductReducer,
})