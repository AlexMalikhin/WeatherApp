import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {store} from "./store";
import './languageUtils/i18next'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={"loading"}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
