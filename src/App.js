import './App.css';
import './MobResponsive.css';
import React from 'react';
import Airbnb2 from './components/airbnb2';
import NextPage from './nextPageAirbnb/nextPage';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)    
function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
    darkMode? document.body.style.backgroundColor= "white":document.body.style.backgroundColor= "#222222"
  }

  return (
    <div>
    <Router>
      <div>
        <Route exact path="" 
        render={(props) => <Airbnb2 {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> }
        />

        <Route exact path="/travel"         
        render={(props) => <NextPage {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}
        />
      </div>
    </Router>
    
    </div>
  );
}


export default App;
