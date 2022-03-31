import {applyMiddleware, createStore} from "redux";
import {citiesReducer} from "./reducers/citiesReducer/citiesReducer";
import {modalFullForecastReducer} from "./reducers/modalFullForecastReducer/modalFullForecastReducer";
import {languageReducer} from "./reducers/languageReducer/languageReducer";
import {themeReducer} from "./reducers/themeReducer/themeReducer";
import createSagaMiddleWare from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootWatcher} from "./saga";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    citiesReducer,
    modalFullForecastReducer,
    languageReducer,
    themeReducer
})
const sagaMiddleWare = createSagaMiddleWare()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

export type RootState = ReturnType<typeof rootReducer>
sagaMiddleWare.run(rootWatcher)