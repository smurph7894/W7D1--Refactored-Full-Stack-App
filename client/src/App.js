import NewGame from './pages/NewGame';
import AllGames from './pages/AllGames';
import OneGame from './pages/OneGame';
import EditGame from './pages/EditGame';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import axios from 'axios';
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route element={<AllGames/>} path="/" />
                <Route element={<NewGame/>} path="/new" />
                <Route element={<EditGame/>} path="/game/edit/:id" />
                <Route element={<OneGame/>} path="/game/:id"  />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
