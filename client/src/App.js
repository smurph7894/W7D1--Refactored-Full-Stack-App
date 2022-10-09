import NewGame from './pages/NewGame';
import AllGames from './pages/AllGames';
import OneGame from './pages/OneGame';
import EditGame from './pages/EditGame';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import io from 'socket.io-client';
import "./App.css";
import { useState, useEffect } from 'react';

function App() {
    const [socket] = useState(()=>io('ws://localhost:8000'));

    useEffect(()=>{
        console.log('Is this running?');
        socket.on('Welcome', data => console.log(data));
        //what is happening when data sent out by someone else is received
        //this listens for welcome events from server.js and logs what the data is
        socket.emit("event_from_client", "hi");
        //what the person sending the information is sending
        return () => socket.disconnect(true);
    }, []);

    return (
        <div className="App">
            {/* <button onClick={()=>socket.emit("event_from_client", "click")}>test</button> */}
            <BrowserRouter>
            <Routes>
                <Route element={<AllGames socket={socket}/>} path="/" />
                <Route element={<NewGame socket={socket}/>} path="/new" />
                <Route element={<EditGame socket={socket}/>} path="/game/edit/:id" />
                <Route element={<OneGame/>} path="/game/:id"  />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
