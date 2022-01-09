import React from 'react';
import styles from "./Main.module.scss";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import beers from "../../data/beers";



const Main = () => {

    const getBeerCardJsx = (beer) => (
        <div className = {styles.card} key={beer.id} >
          <Card beer={beer}/>
        </div>
    
      );
    
    
    return (
        <div className = {styles.main}>
          {beers.map(getBeerCardJsx)}
        </div>
    )
}

export default Main
