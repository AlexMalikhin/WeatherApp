import React, {useEffect, Suspense} from 'react';
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {Header} from "./Components/Header/Header";
import {fetchCurrentCity} from "./store/cityReducer";


const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentCity())
    }, [dispatch])

    return (
        <Suspense fallback={null}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/Main' element={<MainPage/>}/>
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;
