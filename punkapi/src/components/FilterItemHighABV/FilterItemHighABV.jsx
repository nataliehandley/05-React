import React from 'react'
import styles from "./FilterItemHighABV.module.scss";

const FilterItemHighABV = (props) => {

    const {filterHighABV} = props;

    const checked = <input type="checkbox" onClick={ e => filterHighABV()} /> 

    return (
        <div>
            <label>
                High ABV (&gt; 6.0%)
                {checked}
            </label>
        </div>
    )
}

export default FilterItemHighABV;
