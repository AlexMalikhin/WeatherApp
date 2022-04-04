import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Header} from "./components/Header/Header";
import {fetchCurrentCity} from "./store/reducers/citiesReducer/citiesReducer";
import {I18nProvider} from "./i18n";
import {LanguageBlock} from "./components/LanguagesBlock/LanguageBlock";
import {RootState} from "./store";


const App: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [dispatch])
    const {language} = useSelector((state:RootState)=>state.languageReducer)

    return (
        <I18nProvider locale={language} >
            <div className="App">
                <Header/>
                <LanguageBlock/>
                <Routes>
                    <Route path='/Main' element={<MainPage/>}/>
                </Routes>
            </div>
        </I18nProvider>
    );
}

export default App;
