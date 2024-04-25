import "./index.css";

export default function AppBar() {
    return (
        <div className="appbar">
            <div className="logo-container">
                <img src="logo.png" className="logo" />
                <span className="subtitle">Meu Game Favorito</span>
            </div>
            <img src="fav.png" className="fav"></img>
        </div>
    );
}