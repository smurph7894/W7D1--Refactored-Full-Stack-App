import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Header from '../components/Header';
import DeleteButton from '../components/DeleteButton';

const AllGames = (props) => {

    const [gameList, setGameList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/games")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, []);

    return (
        <div style={{textAlign:"center"}}>
            <Header 
            titleText={"Gameon"}
            link={"/new"}
            linkText={"Add a New Game!"}
            />
            {
                gameList.map((game, index)=>(
                    //have to use round brackets on return of function instead of curly, otherwise you have to do another return for the div
                    <div key={index}>
                        <Link to={`/game/${game._id}`}>
                            <p>{game.name}</p>
                            <img src={game.image} alt="Game picture"
                            style={{width:"150px", height:"150px"}} />
                        </Link>
                        <div style={{align:"center"}}>
                            <DeleteButton 
                            id={game._id}
                            gameList={gameList}
                            setGameList={setGameList}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AllGames