import React from 'react'
import styles from "./Card.module.scss";

const Card = (props) => {

    const {
        image_url,
        name,
        description
    } = props.beer;

    const shortenInstructions = (instructions) =>
    instructions.length < 200
      ? instructions
      : instructions.substring(0, 100) + "...";



    return (
        <div className = {styles.card}>
            <img src={image_url} alt="beer bottle"/>
            <section className = {styles.info}>
                <h2>{name}</h2>
                <p>{shortenInstructions(description)}</p>
            </section>
        </div>
    )
}

export default Card;
