import "./index.css";
import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div to="/" className="navbar-item">
                    <img src="logo.png" alt="Logo" className="logo"/>
                    <span className="subtitle">Meu Game Favorito</span>
                </div>
                <div className="icons">
                    <Link to="/favoritos"><img src="fav.png" className="fav" alt="Favoritos" /></Link>
                    <Link to="/edita"><img src="usuario.png" className="edita_usuario" alt="usuario" /></Link>
                </div>
            </div>
        </nav>
    );
}
