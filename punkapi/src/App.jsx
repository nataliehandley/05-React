import React, {useState} from 'react';

import NavBar from './components/NavBar';
import Main from "./containers/Main";
import styles from "./App.module.scss";




const App = () => {
 
  const [beers, setBeers] = useState([]);
  

  const fetchBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);

      })
      .catch((err) => {
        console.error(err);
      })
  }

  const filterHighABV = () => {
    fetch("https://api.punkapi.com/v2/beers?abv_gt=6.0")
      .then((res) => res.json())
      .then((jsonResponse) => {
        (setBeers(jsonResponse));

      })
      .catch((err) => {
        console.error(err);
      })
  }

  const filterClassic = () => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=01-2010")
      .then((res) => res.json())
      .then((jsonResponse) => {
        (setBeers(jsonResponse));

      })
      .catch((err) => {
        console.error(err);
      })

  }
  


  const filterAcidity = () => {
    fetch("https://api.punkapi.com/v2/beers?ph_lt=4.0")
      .then((res) => res.json())
      .then((jsonResponse) => {
        (setBeers(jsonResponse));

      })
      .catch((err) => {
        console.error(err);
      })

  }


  
  
  
  return (
    <div className = {styles.app}>
      <div className = {styles.title}>
      <h1>BREWDOG</h1>
      </div>
      <div className = {styles.container}>
      <NavBar setSearchText = {fetchBeers} beers={beers} filterHighABV = {filterHighABV} filterClassic = {filterClassic} filterAcidity={filterAcidity}/>
      <Main beers={beers}/>
      </div>
    </div>
  );
}

export default App

