import React from 'react';
import ReactDOM from 'react-dom'
import './Login.scss' 

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=db13c7a6c4e945158c578eef05074967&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const loginPage = (
<html>
    <div class="wrapper">
        <div class="container">
            <h1 class="fade-in-text">Bienvenido a Spootify</h1>

            <div class="button"> 
            <a className="loginSession" href={AUTH_URL}> ¡Inicia tu sesión con Spotify! </a>
            </div>
        </div>
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</html>
);

export default function Login() {
    return (   
    ReactDOM.render(loginPage, document.getElementById('root'))
    )
}
