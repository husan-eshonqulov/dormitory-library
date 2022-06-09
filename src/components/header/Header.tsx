import './Header.css';
import Login from '../login/Login';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>library</h1>
                <nav>
                    <button onClick={() => { }} className="btn" id="logInBtn">Log in</button>
                </nav>
            </div>
        </header >
    );
}

export default Header;