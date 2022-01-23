import React from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";

const NavBar = (props) => {
    const {setSearchText, beers, filterHighABV, filterClassic, filterAcidity} = props;
   
    return (
        <div className = {styles.navbar}>
            <SearchBar placeholder = "Search for beers..." setSearchText = {setSearchText} beers={beers}/> 
            <FilterList beers={beers} filterHighABV = {filterHighABV} filterClassic = {filterClassic} filterAcidity = {filterAcidity}/>
           
        </div>
    )
}

export default NavBar
