import React from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";

const NavBar = (props) => {
    const {setSearchText, beers, handleChange} = props;
   
    return (
        <div className = {styles.navbar}>
            <SearchBar placeholder = "Search for beers..." setSearchText = {setSearchText} beers={beers}/> 
            <FilterList beers={beers} handleChange = {handleChange} />
           
        </div>
    )
}

export default NavBar
