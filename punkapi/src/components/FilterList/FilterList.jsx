import React, {useState} from 'react';
import FilterItem from "../FilterItem";
import CardList from '../CardList';

const FilterList = (props) => {

    const {handleChange} = props;

    

   
    return (
        <div>
             <div>
                <FilterItem handleChange = {handleChange} />
                <label>
                    BREWED BEFORE 2010
                </label>
                <label>
                    HIGH ACIDITY
                </label>
    </div>
           
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
