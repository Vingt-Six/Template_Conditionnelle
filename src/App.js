import './App.css';
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search';
import tab from './data.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      {tab.map((sanae, index) => (<Card key={index} jsp={sanae.nom} oui={sanae.alcoholic === true ? "alcoholic" : "non-alcoholic"} bool={sanae.alcoholic} />))}
    </div>
  );
}

export default App;
