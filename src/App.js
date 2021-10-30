
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
import Order from './components/MyOrders/Order';
import AllOrder from './components/ManageAllOrder/AllOrder';
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
        <PrivetRoute path="/services">
          <Services></Services>
        </PrivetRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/booking/:serviceId">
          <Booking></Booking>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/myorders">
          <MyOrders></MyOrders>
          <Order></Order>
        </Route>
        <Route path="/manageallorder">
          <ManageAllOrder></ManageAllOrder>
          
        </Route>
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
