import "./index.css";

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <div className="appbar">
            <div className="logo-container">
                <img src="logo.png" className="logo" />
                <span className="subtitle">Meu Game Favorito</span>
            </div>
            <Link to="/favoritos"><img src="fav.png" className="fav" alt="Favoritos"></img></Link>
        </div>
    );
}
