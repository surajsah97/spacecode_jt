import Rootreducer from "./components/redux/reducer/rootreduder";
import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk"
const Store=createStore(Rootreducer,applyMiddleware(Thunk))
export default Store;

