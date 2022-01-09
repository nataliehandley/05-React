import React from 'react';
import Card from "./components/Card";
import NavBar from './components/NavBar';
import Main from "./containers/Main";
import styles from "./App.module.scss";
import beers from "./data/beers";


const App = () => {
  

  
  return (
    <div className = {styles.app}>
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App

