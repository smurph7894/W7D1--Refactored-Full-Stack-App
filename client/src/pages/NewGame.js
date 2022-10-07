import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';
import Header from '../components/Header';


const NewGame = (props) => {

    const[error, setError] = useState({});
    const [newGame, setNewGame] = useState({
        name: "",
        yearReleased: "",
        genre: "",
        image: "",
        rating: "",
        company: ""
    });

    const navigate = useNavigate();

    const newSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/games", newGame)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
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
            titleText={"Add a Game!"}
            link={"/"}
            linkText={"Return Home"}
            />
            <Form 
            game={newGame}
            setGame={setNewGame}
            submitHandler={newSubmitHandler}
            error={error}
            />
        </div>
    )
}

export default NewGame