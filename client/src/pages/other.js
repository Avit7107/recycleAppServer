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
// import "./categories.css";

const Other = () => {
  const [OtherProducts, setOtherProducts] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    setOtherProducts(
      products.filter((product) => product.category === "Other")
    );
  }, []);

  
  return (
    <div>
      <div className='heroSection'>
        <div className='heroSectionText'>
          <h1>אחר</h1>
          <p>מצרכים שונים וטובים למכירה בזול או בחינם </p>
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
        {Other.map((product) => (
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

export default  Other;