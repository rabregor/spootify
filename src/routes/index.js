import React from 'react';
import Discover from './Discover';
import Login from './LoginPage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'react-router-dom/Link';
import { AnimatedRoute } from 'react-router-transition';


const code = new URLSearchParams(window.location.search).get('code')

/*
//export default function Routes() {
  // Here you'd return an array of routes
  //return code ? <Discover code={code} /> : <Login />;
 


FUNCIONAL
  export default function Routes() {
    return code ? <Discover code={code} /> : <Login />
  }
  

//}
*/

export default function Routes() {
  return code ? <Discover code={code} /> : <Login />
}