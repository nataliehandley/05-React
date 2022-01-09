import React from 'react';
import styles from "./NavBar.module.scss"

const NavBar = () => {
    return (
        <div className = {styles.navbar}>
            <h2>Search <input></input></h2>
            <p>High ABV</p>
            <p>Classic Range</p>
            <p>Acidic</p>
        </div>
    )
}

export default NavBar
