import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState ([]);
  const [planets, setPlanets] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
  
    async function fetchPlanets () { 
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();

  }, []);
  return (
   <div className="App">
     hello
   </div>
  );
}
export default App;
