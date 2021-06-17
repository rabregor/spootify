import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero2 } from '../../../assets/images/hero.svg';
//import { ReactComponent as Hero } from '../../../assets/images/ahero.svg';
import './_header.scss';
import './_headerRafa.scss';


export default function Header() {
  return (
    <>
    <div className="header">
      <Hero2 />
      <div className="is=centered">
        <h1>Spootify</h1> <h3>Time to get <br></br> <FontAwesomeIcon icon={faSun} /> G R O O V Y</h3>
      </div>
      <div class="holder">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
    </>
  );
}


/*
export default function Header() {
  return (
    <>
    <div className="header">
      <Hero2 />
      <div id="none">
        <h1>Your favourite tunes</h1> 
        <h2>All <FontAwesomeIcon icon={faSun} /> and all <FontAwesomeIcon icon={faMoon} /></h2>
      </div>
    </div>
    <div> 

    </div>
    </>
  );
}
/*

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



*/