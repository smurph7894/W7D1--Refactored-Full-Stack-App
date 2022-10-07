import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
import Header from '../components/Header';
import DeleteButton from '../components/DeleteButton';

const OneGame = () => {
    const {id} = useParams();
    const [game, setGame] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [id]);

    return (
        <div style={{textAlign:"center"}}>

            <Header 
            titleText={game.name}
            link={"/"}
            linkText={"Return Home"}
            />
            
            <img src={game.image} alt="game image" 
            style={{width:"150px", height:"150px"}}/>
            <p>{game.genre}</p>
            <p>{game.yearReleased}</p>
            <p>{game.rating}</p>
            <p>{game.company}</p>
            <div style={{align:"center"}}>
                <Link to={`/game/edit/${game._id}`}>Edit</Link>
                <DeleteButton 
                id={game._id}
                />
            </div>
        </div>
    )
}

export default OneGame