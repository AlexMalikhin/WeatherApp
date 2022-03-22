import React, {useEffect} from 'react';
import {MainPage} from "./Pages/MainPage/MainPage";
import {FullCardPage} from "./Pages/FullCardPage/FullCardPage";
import {Header} from "./Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {cityReducer, fetchCurrentCity} from "./store/cityReducer";
import {Routes, Route} from "react-router-dom";

const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/Main' element={<MainPage/>}/>
                <Route path='/FullPage' element={[<FullCardPage/>, <MainPage/>]}/>


            </Routes>
        </div>
    );
}

export default App;
