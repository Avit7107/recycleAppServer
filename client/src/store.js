
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from "./reducers/productReducer";
import { LoginReducer } from "./reducers/loginReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({ productReducer, LoginReducer, cartReducer });
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  isAdmin: false,
};

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
