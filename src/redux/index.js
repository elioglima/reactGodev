import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { reducers } from "./reducers";
import sagas from "./sagas";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import Cookies from "js-cookie";

export const history = createBrowserHistory();
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sessionStart = () => {
  const theme = Cookies.get("theme");
  localStorage.setItem("theme", theme ? theme : "dark");
};

const store = createStore(
  reducers(history),
  sessionStart(),
  composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
);

sagaMiddleware.run(sagas);
export { store };
