
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import AuthProvider from './Context api/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import NotFound from './components/NotFound/NotFound';

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
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/booking/:serviceId">
          <Booking></Booking>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <PrivetRoute path="/myorders">
          <MyOrders></MyOrders>
        </PrivetRoute>
        
        <PrivetRoute path="/manageallorder">
          <ManageAllOrder></ManageAllOrder>
        </PrivetRoute>
        <PrivetRoute path="/booking">
          <Booking></Booking>
        </PrivetRoute>
        <Route path="*">
          <NotFound></NotFound>

        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
