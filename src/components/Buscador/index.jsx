import "./index.css";
import axios from "axios";
import { useState } from "react";
import AppBarFavBusca from '../AppBarFAvBusca';

export default function CorpoTelaUm(props) {
    // Estado para armazenar os jogos
    const [jogos, setJogos] = useState([]);
    // Estado para controlar a visibilidade da lista de jogos
    const [mostrarLista, setMostrarLista] = useState(false);

    const config = {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      };

    // Função para pegar os jogos da API e atualizar o estado
    async function getGames() {
        try {
            let games = [];
            let i = Math.floor(Math.random() * 25000);
            let j = i
            while (i <j + 10) {
                const url = `https://api.rawg.io/api/games?key=64e9b22860784b7083f6dcab592047df&page=${i}`;
                const response = await axios.get(url);
                const data = response.data;
                games = games.concat(data.results);
                i++;
            }
            setJogos(games); // Atualiza o estado com os jogos obtidos
            setMostrarLista(true); // Define a visibilidade da lista como verdadeira após obter os jogos
        } catch (error) {
            console.error('Houve um erro!', error);
        }
    }

    // Função para salvar um jogo na base de dados
    async function salvarJogo(jogo) {
        const data = {
            "title": jogo.name // Supondo que o nome do jogo seja o título a ser salvo
        };

        try {
            await axios.post("http://127.0.0.1:8000/api/games/",data, config);
            alert("Jogo adicionado aos favoritos!");
        } catch (error) {
            if (error.response.status === 409) {
                alert("Jogo já adicionado aos favoritos!");
                return;
            }
            console.error('Houve um erro!', error);
        }
    }
    if (mostrarLista){
        return(
            <>
            <AppBarFavBusca />
            <div className="lista-jogos">
                    {jogos.map(jogo => (
                        <div key={jogo.id} className="jogo">
                            <h3>{jogo.name}</h3>
                            <img 
                                src={jogo.background_image} 
                                alt={jogo.name} 
                                className="jogoimg" 
                                onClick={() => salvarJogo(jogo)} // Chama a função salvarJogo ao clicar na imagem
                                style={{ cursor: 'pointer' }} // Define o cursor como ponteiro para indicar que é clicável
                            />
                        </div>
                    ))}
                </div>
            </>

            
        )

    }

    return (
       <>
         <AppBarFavBusca />
        <div className="corpo_busca">
            <div className="titulo-btn">
                <p className="titulo_busca">Clique e descubra novos jogos!</p>
                <button className="btn-edit-2 btn btn-outline-dark " onClick={getGames}>Mostrar jogos</button>
            </div>
        </div>
            
            
        

       </>
    );
}
