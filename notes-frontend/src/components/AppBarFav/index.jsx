import "./index.css";

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <div className="appbar_fav">
            <div className="logo-container_fav">
                <img src="logo.png" className="logo_fav" />
                <span className="subtitle_fav">Meu Game Favorito</span>
            </div>
            <Link to="/"><img src="inicio.png" className="home" alt="Favoritos"></img></Link>
        </div>
    );
}
