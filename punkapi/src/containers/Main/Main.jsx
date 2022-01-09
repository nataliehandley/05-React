import React from 'react';
import styles from "./Main.module.scss";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";

const Main = () => {
    return (
        <div className = {styles.main}>
            <Card/>
        </div>
    )
}

export default Main
