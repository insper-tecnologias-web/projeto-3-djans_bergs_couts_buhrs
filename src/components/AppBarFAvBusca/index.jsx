import "./index.css";

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div to="/" className="navbar-item">
                    <img src="logo.png" alt="Logo" id="logo"/>
                    <span className="subtitle">Meu Game Favorito</span>
                    
                </div>
                <div className="icones">
                    <Link to="/favoritos"><img src="fav.png" className="icon" alt="Favoritos" id="fav"></img></Link>
                    <Link to="/principal"><img src="inicio.png" className="icon" alt="Favoritos" id="home"></img></Link>
                    <Link to="/edita"><img src="usuario.png" className="edita_usuario" alt="usuario" id="usuario"></img></Link>
                </div>
            </div>
            
        </nav>
    );
}
