import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {Header} from "./Components/Header/Header";
import {fetchCurrentCity} from "./store/cityReducer";
import {I18nProvider, LOCALES} from "./i18n";
import {FormattedMessage} from "react-intl";

const App: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [dispatch])
    const language = useSelector(state=>state.language)
    console.log(language)

    return (
        <I18nProvider locale={language} >
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/Main' element={<MainPage/>}/>
                </Routes>
            </div>
        </I18nProvider>
    );
}

export default App;
