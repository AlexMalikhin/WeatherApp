import {applyMiddleware, createStore} from "redux";
import {cityReducer} from "./cityReducer";
import createSagaMiddleWare from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootWatcher} from "../saga";

const sagaMiddleWare = createSagaMiddleWare()

export const store = createStore(cityReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootWatcher)