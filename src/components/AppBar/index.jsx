import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <div className="navbar navbar-expand-lg bd-navbar sticky-top">
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap ">
                <div className="bd-navbar-toggle">
                    <div className="brand-edit navbar-brand">
                        <img src="logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
                        <h1 className="title">Meu Game Favorito</h1>
                    </div>
                </div>
            </nav>
        </div>
    );
}

