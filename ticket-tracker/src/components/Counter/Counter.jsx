


import React, {useState} from 'react'
import styles from "./Counter.module.scss"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className = {styles.counter}>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <div className = {styles.buttonStyles}>
                <button className = {styles.button} onClick={() => setCount(count-1)}>-</button>
                <button className = {styles.button} onClick={() => setCount(count+1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
