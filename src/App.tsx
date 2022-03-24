import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {Header} from "./Components/Header/Header";
import {fetchCurrentCity} from "./store/cityReducer";
import {useTranslation} from "react-i18next/hooks";


const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [])
    const {t, i18next} = useTranslation()
    return (
        <div className="App">
            <Header/>
            <h1>{t('Welcome')}</h1>
            <Routes>
                <Route path='/Main' element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
