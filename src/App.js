
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import AuthProvider from './Context api/AuthProvider';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
