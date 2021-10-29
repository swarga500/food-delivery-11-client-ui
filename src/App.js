
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import AuthProvider from './Context api/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivateRoute';
import AddService from './components/AddService/AddService';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivetRoute path="/services">
          <Services></Services>
        </PrivetRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
