import React from 'react'
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {

    const {handleChange} = props;

    const checked = <input type="checkbox" onClick={ e => handleChange()} /> 

    return (
        <div>
            <label>
                    {checked}
                    HIGH ABV
                </label>
        </div>
    )
}

export default FilterItem
