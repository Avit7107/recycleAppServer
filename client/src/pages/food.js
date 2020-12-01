import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
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
  InputGroup,
} from "react-bootstrap";
import Product from "../commponent/product";
import NavBar from "../commponent/Navbar";
// import "./categories.css";
import axios from "axios";

const Food = () => {
  const [FoodProducts, setFoodProducts] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    setFoodProducts(
      products.filter((product) => product.category === "Food")
    );
  }, []);
  return (
    <div>
      <div className='heroSection'>
        <div className='heroSectionText'>
          <h1> מסירה ומכירה של מזון</h1>
          <p> בגדי גברים במחיר מעולה ובאיכות מעולה
          </p>
          <div className='inputHeroSearch'>
            <label>סינון לפי מחיר</label>
            <input placeholder='החל' />
            <input placeholder='עד' />
            <Button style={{ margin: "1rem 0" }} variant='info'>
              חפש
            </Button>
          </div>
        </div>
        <div className='heroSectionBackground'></div>
      </div>

      <Row style={{ position: "relative" }} className='mx-5 my-auto'>
        {FoodProducts.map((product) => (
          <Col>
            <Row>
              <Product product={product} />
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Food;