import React from 'react';
import styles from "./Main.module.scss";
import beers from "../../data/beers";

import CardList from "../../components/CardList";
import FilterList from '../../components/FilterList';



const Main = (props) => {
    const {searchText, filterBeers} = props;

    const matchingBeers = beers.filter((beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(searchText.toLowerCase());
    })

   

    return (
        <section className = {styles.main}>
            <CardList beers = {matchingBeers}/>
        </section>
       
    )
}

export default Main
