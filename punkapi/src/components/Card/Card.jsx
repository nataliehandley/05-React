import React from 'react'
import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div className = {styles.card}>
            <img src="https://images.punkapi.com/v2/24.png" alt="beer bottle"/>
            <section className = {styles.info}>
                <h2>The End Of History</h2>
                <p>The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.</p>
            </section>
        </div>
    )
}

export default Card
