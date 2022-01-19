import React from 'react';
import styles from "./Main.module.scss";
import beers from "../../data/beers";

import CardList from "../../components/CardList";
import FilterList from '../../components/FilterList';



const Main = (props) => {
    const {beers} = props;

    // const matchingBeers = beers.filter((beer) => {
    //     const beerName = beer.name.toLowerCase();
    //     return beerName.includes(searchText.toLowerCase());
    // })

    
      const contentJSX = (
        <CardList beers = {beers}/>
      ) 
  

    return (
        <section className = {styles.main}>
            {contentJSX}
           
        </section>
       
    )
}

export default Main

// const contentJSX = highABV.length ? (
    //     <CardList beers = {highABV} handleChange = {handleChange} />
    // ) : (
    //     <CardList beers = {matchingBeers}/>
    // )

//     const highABV = beers.filter((beer) => {
//       if (beer.abv > 6) {
//           return beer.name;
// }})

// const highAcidity = beers.filter((beer) => {
//   if (beer.ph < 4) {
//     return beer.name;
//   }
// })

// const classicBeer = beers.filter((beer) => {
//   let firstBrewedValue = beer.first_brewed;
//   let yearValue = firstBrewedValue.substring(3);
//     if (yearValue < 2010) {
//       return beer.name;
//     }
// })

{/* <CardList beers = {highABV} />
<CardList beers = {highAcidity}/>
<CardList beers = {classicBeer} /> */}