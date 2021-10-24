import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route , Switch }  from 'react-router-dom'
import ListNbaPlayerComponent from './components/ListNbaPlayerComponent';
import HeaderComponent from './components/HeaderComponent';
import SearchNbaPlayersComponent from './components/SearchNbaPlayersComponent';



function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route path = "/" exact component = {ListNbaPlayerComponent}></Route>
          <Route path = "/favorite"  component = {ListNbaPlayerComponent}></Route>
          <Route path = "/search"  component = {SearchNbaPlayersComponent}></Route>
        
        
          </Switch>
      </div>
     </Router>
    </div>
    
  );
}

export default App;
