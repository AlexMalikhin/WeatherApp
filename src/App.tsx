import React, {useEffect} from 'react';
import {MainPage} from "./Pages/MainPage/MainPage";
import {Header} from "./Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {cityReducer, fetchCurrentCity} from "./store/cityReducer";

const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [dispatch])

    return (

        <div className="App">
            <Header/>
            <MainPage/>

        </div>
    );
}

export default App;
