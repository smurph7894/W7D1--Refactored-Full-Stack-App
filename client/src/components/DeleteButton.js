import React from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

const DeleteButton = (props) =>{
    const {id, gameList, setGameList, socket} = props;
    const navigate = useNavigate();

    const deleteFilter = (id) =>{
        setGameList(gameList.filter((game, index) => game._id !== id));
    };

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                socket.emit("GameChanged");
                if(gameList){//if AllGame.js is parent component you need to filter and handle state immeadiately
                    deleteFilter(id);
                }
                else{//if one game is the parent component, we simply need to navigate home
                    navigate("/");
                }
            })
            .catch((err)=>console.log(err));
    };

return(
    <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteButton