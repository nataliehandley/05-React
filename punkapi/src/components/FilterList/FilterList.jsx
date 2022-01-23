import React from 'react';

import styles from "./FilterList.module.scss"
import FilterItemHighABV from "../FilterItemHighABV";
import FilterItemClassic from '../FilterItemClassic';
import FilterItemAcidity from '../FilterItemAcidity';


const FilterList = (props) => {

    const {filterHighABV, filterClassic, filterAcidity} = props;

    

   
    return (
        <div className = {styles.filter}>
                <FilterItemHighABV filterHighABV = {filterHighABV} />
                <FilterItemClassic filterClassic = {filterClassic} />
                <FilterItemAcidity filterAcidity = {filterAcidity} />
        </div>
    )

}

    // const [filterBeers, setFilterBeers] = useState("");

    // const {beers} = props;

    // const [checked, setChecked] = useState(true);

    
//     
    
// }


    

//     const checkIfTrue = () => {
//         if (checked === true) {
//             const highABV = beers.filter((beer) => {
//                 if (beer.abv > 6) {
//                     console.log (beer.name);
//                 }
//         }
//             )
//     }
// }
    

// }

export default FilterList;
