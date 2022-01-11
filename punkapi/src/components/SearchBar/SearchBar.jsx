import React from 'react';
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const {placeholder, searchText, setSearchText} = props;

    const input = <input type = "text" placeholder = {placeholder} value = {searchText} onInput={ e => setSearchText(e.target.value)}/>
    return (
        <div className = {styles.search}>
            {input}
        </div>
    )
}

export default SearchBar
