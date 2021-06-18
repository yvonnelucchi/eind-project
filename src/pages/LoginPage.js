import React from "react";
import { useHistory } from 'react-router-dom';

export default function LoginPage({ toggleAuth}) {
    const history = useHistory()

    function signIn() {
        toggleAuth(true);
        history.push('/');
    }

    return (
        <section>
            <div className="LoginPage">
                <h1>Login page</h1>
                <button type="button" onClick={signIn}>
                    Log in
                </button>
            </div>
        </section>
    );
}









