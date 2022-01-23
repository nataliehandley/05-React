import React from 'react';
import styles from "./FilterItemClassic.module.scss";

const FilterItemClassic = (props => {

    const {filterClassic} = props;

    const checked = <input type="checkbox" onClick={ e => filterClassic()} /> 


    return (
        <div>
            <label>
                Classic Range
                {checked}
            </label>
        </div>
    )
}
)
export default FilterItemClassic;



