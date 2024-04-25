import "./index.css";
import axios from "axios";
import { useState } from "react";

export default function CorpoTelaUm(props) {
    const [titulo, setTitulo] = useState("");

    const addGame = (event) => {
        event.preventDefault();

        const data = {
            "title": titulo
        }

        axios
            .post("http://localhost:8000/api/games/", data)
            .then((response) => {
                props.getGames(titulo);
                setTitulo("");
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="corpo">
            <p className="titulo">Navegue pelos seus jogos favoritos!</p>
            <form onSubmit={addGame}>
                <input className="input" type="text" placeholder="Digite o nome do game aqui" onChange={(event) => setTitulo(event.target.value)}
                value={titulo}/>
                <button className="botao1" type="submit">Adicionar</button>
            </form>
            <p className="texto1">Ou, descubra novos games com nosso buscador</p>
            <button className="botao2">Ir para o buscador</button>
        </div>
    );
}