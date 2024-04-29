import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import AppBarFav from '../AppBarFav';
import axios from 'axios';


const JogosFav = () => {
    // Pegando os jogos favoritos da base de dados
    const [games, setGames] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/games/")
            .then((response) => setGames(response.data))
            .catch((error) => console.error('Error fetching games:', error));
    }, []);

    // Criando uma função para deletar um jogo
    const deleteGame = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/games/${id}/`);
            setGames(games.filter((game) => game.id !== id));
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    };
    
    return (
        <>
            <AppBarFav />
            <main className='total'>
                <div>
                    <h1>Jogos Favoritos</h1>
                    {games.length > 0 ? (
                        <ul>
                            {/* Adicionando o botão para deletar o jogo */}
                            {games.map((game) => (
                                <li className="jogos_list" key={game.id}>
                                    {game.title}
                                    <button className='botao_delete' onClick={() => deleteGame(game.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No games found.</p>
                    )}
                </div>
            </main>
        </>
    );
};

export default JogosFav;