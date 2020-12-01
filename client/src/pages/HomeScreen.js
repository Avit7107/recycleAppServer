import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './homeScreen.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Card,
  Row,
  Col,
  Image,
  Container,
  Navbar,
} from "react-bootstrap";
import Product from'../commponent/product';
import NavBar from '../commponent/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { ProductsRequest} from '../actions/productAction';
import Axios from "axios";
import { AddItemToCart } from "../actions/cartAction";
import SettingAdmin from '../commponent/SettingAdmin';



const HomeScreen = ({ match }) => {
  const disptach = useDispatch();
  let username = useSelector((state) => state.LoginReducer.userData.username);
  let cartItems = useSelector((state) => state.cartReducer.cartItems);
  const products = useSelector((state)=> state.productReducer.products)
  // const { products  } =  ProductsRequest;
  const product = products.find(
    (product) => product.name === match.params.name
  );
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  useEffect(() => {
    disptach(ProductsRequest());
  }, []);
  const sendCartToServer = (username, cartItems) => {
    if (username) {
      Axios.post("http://localhost:5000/setcart", { username, cartItems }).then((res) => {
        console.log(res);
      });
    }
  };

 
  return (
    <div>
    
    <Row>
    {products.map((product) => (
      <Col key={product._id} sm={6} md={4} lg={3} xl={2}>
        <Product product={product} />
        <Button
              onClick={() => dispatch(AddItemToCart(quantity, product))}
              className='btn btn-info'
            >
              הוסף לסל
            </Button>
      </Col>
    ))}
  </Row>
  <SettingAdmin/>
  </div>
  )
}
export default HomeScreen;