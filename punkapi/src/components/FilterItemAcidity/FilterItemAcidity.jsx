import React from 'react'
import styles from "./FilterItemAcidity.module.scss"

const FilterItemAcidity = ( props) => {

    const {filterAcidity} = props;

    const checked = <input type="checkbox" className = {styles.checkbox} onClick={ e => filterAcidity()} /> 

    return (
        <div>
            <label>
                Acidic (ph &lt; 4)
                {checked}
            </label>
        </div>
    )
}

export default FilterItemAcidity;
