import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const Form = (props) => {

    const{game, setGame, submitHandler, error, buttonName} = props;

    const onChangeHandler = (e)=>{
        const newStateObject = {...game};

        newStateObject[e.target.name] = e.target.value;

        console.log("e.target.name = ", e.target.name);
        console.log("e.target.value = ", e.target.value);

        setGame(newStateObject);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input name="name" type="text" value={game.name} onChange={(e)=>onChangeHandler(e)} />
                    {
                        error.name? 
                        <span>{error.name.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Year Released</label>
                    <input type="Number" name="yearReleased" value={game.yearReleased} onChange={onChangeHandler} />
                    {
                        error.yearReleased? 
                        <span>{error.yearReleased.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Genre</label>
                    <select value={game.genre} onChange={onChangeHandler} name="genre">
                        <option value="none" defaultValue hidden>Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Platform">Platform</option>
                        <option value="Survival">Survival</option>
                        <option value="RPG">RPG</option>
                        <option value="FPS">FPS</option>
                        <option value="RTS">RTS</option>
                        <option value="MMO">MMO</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Children's">Children's</option>
                    </select>
                    {
                        error.genre? 
                        <span>{error.genre.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" value={game.image} name="image" onChange={onChangeHandler} />
                    {
                        error.image? 
                        <span>{error.image.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Rating</label>
                    <select value={game.rating} onChange={onChangeHandler} name="rating">
                        <option value="none" defaultValue hidden>Select a Rating</option>
                        <option value="T">T</option>
                        <option value="E">E</option>
                        <option value="MA">MA</option>
                        <option value="AO">AO</option>
                        <option value="E10">E10</option>
                        <option value="Y">Y</option>
                        <option value="No Rating">No Rating</option>
                    </select>
                    {
                        error.rating? 
                        <span>{error.rating.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" name="company" value={game.company} onChange={onChangeHandler} />
                    {
                        error.company? 
                        <span>{error.company.message}</span>
                        :null
                    }
                </div>
                <button>{buttonName}</button>
            </form>
        </div>
    )
}

export default Form