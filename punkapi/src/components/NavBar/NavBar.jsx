import React from 'react';
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";

const NavBar = (props) => {
    const {searchtext, setSearchText} = props;
   
    return (
        <div className = {styles.navbar}>
            <SearchBar placeholder = "Search for beers..." searchText = {searchtext} setSearchText = {setSearchText}/> 
            <FilterList />
           
        </div>
    )
}

export default NavBar
