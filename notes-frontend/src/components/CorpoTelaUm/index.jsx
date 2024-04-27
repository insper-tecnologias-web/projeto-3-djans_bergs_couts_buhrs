import "./index.css";
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function CorpoTelaUm(props) {
    const [titulo, setTitulo] = useState("");

    const addGame = async (event) => {
        event.preventDefault();

        const data = {
            "title": titulo
        };

        let gameData = await props.getGames(titulo);
        
        if (!gameData) {
            alert("Jogo não encontrado");
            return;
        }
        data.title = gameData.name;
        

        axios
            .post("http://localhost:8000/api/games/", data)
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
        <div className="corpo">
            <p className="titulo">Navegue pelos seus jogos favoritos!</p>
            
            <form onSubmit={addGame} className="sub_corpo">
                <input className="input" type="text" placeholder="Digite o nome do game aqui" onChange={(event) => setTitulo(event.target.value)} value={titulo} />
                <button className="botao1" type="submit">Adicionar</button>
            </form>

            
           
            <p className="texto1">Ou, descubra novos games com nosso buscador</p>
            <Link to="/buscador"> <button className="botao2">Ir para o buscador</button></Link>
        </div>
    );
}
