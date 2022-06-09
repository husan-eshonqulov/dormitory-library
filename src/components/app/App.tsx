import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Login from '../login/Login';
import { useState } from 'react';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            <Header />
            <Main />
            {isLoggedIn && <Login />}
        </>
    );
}

export default App;