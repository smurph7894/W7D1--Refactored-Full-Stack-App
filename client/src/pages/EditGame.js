import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';
import Form from '../components/Form';
import Header from '../components/Header';

const EditGame = (props) => {
    const {socket} = props;
    
    const {id} = useParams();
    const[error, setError] = useState({});
    const[editedGame, setEditedGame] = useState({
        name: "",
        yearReleased: "",
        genre: "",
        image: "",
        rating: "",
        company: ""
    })

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditedGame(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/games/${id}`, editedGame
        ).then((res)=>{
            console.log(res);
            console.log(res.data);
            socket.emit("GameChanged");
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("error.response:", err.response);
            console.log("error.response.data:", err.response.data);
            console.log("error.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors);
        });
    };

    return (
        <div style={{textAlign:"center"}}>
            <Header 
            titleText={"Edit a Game!"}
            link={"/"}
            linkText={"Return Home"}
            />
            <Form 
            game={editedGame}
            setGame={setEditedGame}
            submitHandler={editSubmitHandler}
            error={error}
            buttonName={"Update Game"}
            />
        </div>
    )
}

export default EditGame