import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>library</h1>
                <nav>
                    <div className="lds-dual-ring active" id="loadingRing"></div>
                    <div className="logged-out" id="loggedOut">
                        <button className="btn" id="logInBtn">Log in</button>
                    </div>
                    <div className="logged-in" id="loggedIn">
                        <button className="btn" id="accountBtn">Account</button>
                        <button className="btn" id="logOutBtn">Log out</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;