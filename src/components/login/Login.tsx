import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function sendLoginReq(username: string, password: string) {
        const res = await fetch('http://164.92.144.90:1003/api/library/book-list/', { method: 'GET' });
        console.log(res)
    }

    return (
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="username" />

                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />

                <button onClick={() => sendLoginReq(username, password)}>Log in</button>
            </div>
        </div>
    );
}

export default Login;