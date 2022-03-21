import {applyMiddleware, createStore} from "redux";
import {cityReducer} from "./cityReducer";
import createSagaMiddleWare from 'redux-saga';
import {currentCityWatcher} from "../saga/citySaga";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleWare()

export const store = createStore(cityReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(currentCityWatcher)