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
      <button onClick={getCatFacts}>Fetch Cat Facts</button>
      <ul>
        {catFacts.map((catFact) => {
          return <li>{catFact.fact}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
