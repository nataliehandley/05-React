
import styles from './App.module.scss';
import EmployeeCard from './components/EmployeeCard';
import team from './data/data';


const App = () => {

  const getEmployeeCard = (person) => (
    <EmployeeCard person={person} key={person.id}/>
  )
  

  return(
    <main className ="container">
       <h1 className = {styles.header}>Ticket Tracker</h1>
      <div className = {styles.main}>
         {team.map(getEmployeeCard)}
      </div>
    </main>
    
  );
};

export default App;
