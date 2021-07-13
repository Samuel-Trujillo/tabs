import './App.css';
import React, {useState} from 'react';
import Tab from './components/Tab';

function App() {
  // sets info within the clickable tags
  const [tabs, setTabs] = useState(["hello this is tab 1","this is tab 2", "I like turtles"])

  return (
    <div className="App">
      <Tab tabs={tabs}/>
    </div>
  );
}

export default App;
