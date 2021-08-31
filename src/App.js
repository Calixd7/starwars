import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

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
    setLoading(false);

  }, []);
  return <div className="App">
    <Router>
    <Navbar />
    <Container>
      {loading ? (
        <Dimmer active inverted> 
        <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (<Switch> 
        <Route exact path= "/">
          <Home />
        </Route>
        <Route exact path= "/people">
        <People data={people}/>
        </Route>
        <Route exact path= "/planets">
          <Planets data={planets}/>
        </Route>
      </Switch>
      )}
      
    </Container>

    </Router>
    </div>;
}
export default App;
