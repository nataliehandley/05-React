import React from 'react'
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {

    const{beers} = props;

    const getBeerCardJsx = (beer) => (
        <div className = {styles.card} key={beer.id} >
          <Card beer={beer}/>
        </div>
    
      );
    return (
        <div>
            <div className = {styles.main}>
            {beers.map(getBeerCardJsx) }
             </div> 
        </div>
    )
}

export default CardList
