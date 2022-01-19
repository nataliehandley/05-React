import React, {useState} from 'react';
import Card from "./components/Card";
import NavBar from './components/NavBar';
import Main from "./containers/Main";
import styles from "./App.module.scss";
import beers from "./data/beers";
import CardList from './components/CardList';



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

  const handleChange = () => {
    console.log("hello");
    fetch("https://api.punkapi.com/v2/beers?abv_gt=6.0")
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
      <NavBar setSearchText = {fetchBeers} beers={beers} handleChange = {handleChange} />
      <Main beers={beers}/>
    </div>
  );
}

export default App


// const highABV = beers.filter((beer) => {
//   if (beer.abv > 6) {
//       return beer.name;
// }})

// const handleChange = () => {
//   console.log("hello");
// }


