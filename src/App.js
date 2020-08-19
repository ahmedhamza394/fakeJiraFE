import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Name, {deeSucks} from "./components/Name"

const name="Hamza"

function App() {
  const [name, setName] = useState("Hamza")
  

  // useEffect(() => {
  //   setName( oldName => oldName + "fhwsdihhfdijhfdu")
  // },[])

  const changeName = (event) => {
      setName(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Name name={name} age="65" hobby="being gay" />
        <input type="text" placeholder="Enter Name here" onChange={changeName}/>
      </header>
    </div>
  );
}

export default App;
