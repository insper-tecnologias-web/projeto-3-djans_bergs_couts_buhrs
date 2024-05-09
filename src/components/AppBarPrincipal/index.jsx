import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <>
        <div className="navbar navbar-expand-lg bd-navbar sticky-top">
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap ">
                <div className="bd-navbar-toggle ml-auto">
                    <div className="brand-edit navbar-brand">
                        <img src="logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                        <h1 className="title">Meu Game Favorito</h1>
                    </div>
                    <div className="ml-auto"> {/* Para alinhar à direita */}
                        <img src="fav.png" alt="Imagem" width="30" height="30" className="d-inline-block align-text-top"/>
                    </div>
                </div>
            </nav>
            
        </div>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    );
}

