import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import AppBarFav from '../AppBarFav';


const JogosFav = () => {
    // Pegando os jogos favoritos da base de dados
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/games/")
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);
    

    return (
        <>
        <AppBarFav />
        <main className='total'>
        <div>
            <h1>Favorite Games</h1>
            {games.length > 0 ? (
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>{game.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No games found.</p>
            )}
        </div>

        </main>
    ;
        </>
    );
        
};

export default JogosFav;