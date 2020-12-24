import React, { useState } from 'react';
import { Navbar,Button ,FormControl,Form,
  Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from 'react-router-dom';
import { RemoveItemFromCart, AddItemToCart, SetExistingCart} from '../actions/cartAction';
import { useDispatch, useSelector } from "react-redux";
import { ProductsRequest } from '../actions/productAction';
import Search from './search';




function NavBar({history},props) {
  console.log( props);
  let cartItems = useSelector((state) => state.cartReducer.cartItems);
  const products = useSelector((state) => state.productReducer.products);
  const [keyword, setKeyword] = useState('')
  const [search, setSearch] = useState("");


  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
    return (
        <header>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand><Link to="/">GiveItOn</Link></Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link ><Link to="/login">הרשם</Link></Nav.Link>
      <Nav.Link ><Link to= "/cart">
         <ion-icon name="basket"></ion-icon> סל המוצרים 
           <a href="#"><span className="glyphicon glyphicon-search"></span></a> 
           </Link></Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setKeyword(e.target.value)} />
      <Button type='submit' variant="outline-info" onSubmit={submitHandler}>Search</Button>
      </Form>
      </Navbar>

      </header>
    );
}
  
  export default NavBar;



//   <nav>
//   <ul>
//   <li className="active"><Link to="/">עמוד הבית</Link></li>
//    <li><Link to="/WomenClothing">בגדי נשים</Link></li>
//    <li><Link to="/MenClothing">בגדי גברים</Link></li>
//    <li><Link to="/food">אוכל</Link></li>
//    <li><Link to="/login">הרשם</Link></li>
//    <li className="cart"><Link to= "/cart">
//    <ion-icon name="basket"></ion-icon> סל המוצרים 
//    <span> {props.basketProps.basketNumbers} </span> */}
//     <li> <a href="#"><span className="glyphicon glyphicon-search"></span></a> </li>
//    </Link>
//   </li>
//  </ul>
//   </nav>
{/* <Nav variant="pills" defaultActiveKey="/home">
<Nav.Item>
<Nav.Link ><Link to="/">עמוד הבית</Link>Active</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-1"><Link to="/login">הרשם</Link></Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2" disabled><Link to= "/cart">
<ion-icon name="basket"></ion-icon> סל המוצרים 
  <a href="#"><span className="glyphicon glyphicon-search"></span></a> 
  </Link> </Nav.Link>
  </Nav.Item>
  </Nav> */}
