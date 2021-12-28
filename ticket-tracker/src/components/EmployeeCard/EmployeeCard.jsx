import React, {useState} from 'react';
import styles from './EmployeeCard.module.scss';
import Counter from "../Counter";

const EmployeeCard = (props) => {
    return (
        <div className= {styles.employeeCard}>
            <div>
                <h2>{props.person.name}</h2>
                <h3>{props.person.role}</h3>
            </div>
            <section>
                <Counter/>
            </section>
      </div>  
    )
}

export default EmployeeCard;
