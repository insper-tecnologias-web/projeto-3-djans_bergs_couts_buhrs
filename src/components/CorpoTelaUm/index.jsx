import "./index.css";
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import AppBarPrincipal from '../AppBarPrincipal';

export default function CorpoTelaUm(props) {
    async function get_games(gameName) {
        try {
          // URL da API para buscar um jogo específico pelo nome
          const url = `https://api.rawg.io/api/games?key=64e9b22860784b7083f6dcab592047df&search=${encodeURIComponent(gameName)}`;
    
          // Faz a requisição GET usando Axios
          const response = await axios.get(url);
    
          // response.data já é um objeto JavaScript (parsed JSON)
          const data = response.data;
    
          if (data.results.length > 0) {
            console.log(`Game found: ${data.results[0].name}`);
            return data.results[0]; // Retorna o primeiro jogo encontrado
          } else {
            console.log('Game not found');
            return null; // Retorna nulo se nenhum jogo foi encontrado
          }
        } catch (error) {
          console.error('There was an error!', error);
        }
      }
    const [titulo, setTitulo] = useState("");

    const config = {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      };

    const addGame = async (event) => {
        event.preventDefault();

        const data = {
            "title": titulo
        };

        let gameData = await get_games(titulo);
        
        if (!gameData) {
            alert("Jogo não encontrado");
            return;
        }
        data.title = gameData.name;
        

        axios
            .post("http://127.0.0.1:8000/api/games/",data,config)
            .then((response) => {
                alert("Jogo encontrado e adicionado aos favoritos!");
                setTitulo("");
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    alert("Jogo já adicionado aos favoritos!");
                    return;
                }
                console.error('Houve um erro!', error);
            });
            

    };

    return (
        <>
            <AppBarPrincipal/>
            <div className="corpo">
                <p className="titulo">Navegue pelos seus jogos favoritos!</p>
                
                <form onSubmit={addGame} className="sub_corpo">
                    <input className="input" type="text" placeholder="Digite o nome do game aqui" onChange={(event) => setTitulo(event.target.value)} value={titulo} />
                    <button className="botao1" type="submit">Adicionar</button>
                </form>

                
            
                <p className="texto1">Ou, descubra novos games com nosso buscador</p>
                <Link to="/buscador"> <button className="botao2">Ir para o buscador</button></Link>
            </div>
        </>
    );
}
