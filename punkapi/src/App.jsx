import React, {useState} from 'react';
import Card from "./components/Card";
import NavBar from './components/NavBar';
import Main from "./containers/Main";
import styles from "./App.module.scss";
import beers from "./data/beers";



const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filterBeers, setFilterBeers] = useState("");

  const highABV = beers.filter((beer) => {
    if (beer.abv > 6) {
        console.log (beer.name);
    }
    
    
})

const highAcidity = beers.filter((beer) => {
  if (beer.ph < 4) {
    console.log(beer.name);
  }
})

const classicBeer = beers.filter((beer) => {
  let firstBrewedValue = beer.first_brewed;
  let yearValue = firstBrewedValue.substring(3);
    if (yearValue < 2010) {
      console.log(beer.name);
    }
})

  
  return (
    <div className = {styles.app}>
      <NavBar searchText = {searchText} setSearchText = {setSearchText}/>
      <Main searchText = {searchText} filterBeers = {filterBeers} setFilterBeers = {setFilterBeers}/>
    </div>
  );
}

export default App

