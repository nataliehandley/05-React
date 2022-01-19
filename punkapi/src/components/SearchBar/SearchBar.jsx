import React from 'react';
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const {placeholder,  setSearchText} = props;

    const input = <input type = "text" placeholder = {placeholder} onInput={ e => setSearchText(e.target.value)}/>
    return (
        <div className = {styles.search}>
            {input}
        </div>
    )
}

export default SearchBar
