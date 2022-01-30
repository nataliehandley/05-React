import {useState} from "react";
import styles from "./App.module.scss";

function App() {
  const [catFacts, showCatFacts] = useState([]);

  const getCatFacts = () => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse.data);
        showCatFacts(jsonResponse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className= {styles.app}>
      <button className = {styles.button} onClick={getCatFacts} >Tell me 10 facts about Cats!</button>
      <ul className = {styles.list}>
        {catFacts.map((catFact) => {
          return <li key= {catFact.fact} >{catFact.fact} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
