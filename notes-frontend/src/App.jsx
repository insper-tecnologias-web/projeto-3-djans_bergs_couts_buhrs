import AppBar from "./components/AppBar";
import "./App.css";
import CorpoTelaUm from "./components/CorpoTelaUm";
import axios from "axios";



function App() {

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

  return (
    <>
      <AppBar />
      <main>
        <CorpoTelaUm getGames={get_games}/>
      </main>
    </>
  );
}

export default App;
