import React from 'react';
import './App.css';
import Navbar from './commponent/Navbar';
import Header from './commponent/header';
import { Provider } from 'react-redux'; 
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/cart';
import Footer from './commponent/footer';
import HomeScreen from './pages/HomeScreen';
import Product from './commponent/product';
import Admin from './commponent/admin';
import Login from './pages/login';
import WomenClothing from './pages/wemon';
import MenClothing from './pages/men';
import Food from './pages/food';
import Other from './pages/other';
import 'bootstrap/dist/css/bootstrap.min.css';


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
}

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Route  exact path="/" component={ HomeScreen }/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/WomenClothing" component={WomenClothing}/>
      <Route exact path="/MenClothing" component={MenClothing}/>
      <Route exact path="/Food" component={Food}/>
      <Route exact path="/Other" component={Other}/>

      <Route exact path="/login" component={Login}/>
      <Route exact path="/cart" component={Cart}/>
  
      </BrowserRouter>
      <Footer/>
    </div>
    </Provider>
   
  );
}

export default App;
