import "./index.css";

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src="logo.png" alt="Logo" id="logo"/>
                        <span className="subtitle">Meu Game Favorito</span>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/favoritos" className="button is-primary">
                            <span>Meus Favoritos</span>
                            <span className="icon">
                                <i className="fas fa-heart"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

