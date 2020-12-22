import React, { useEffect } from 'react';
import { Navbar,Button ,
  Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { getNumbers } from '../actions/getAction';
import { Link} from 'react-router-dom';
import { RemoveItemFromCart, AddItemToCart, SetExistingCart} from '../actions/cartAction';
import { useDispatch, useSelector } from "react-redux";
import Search from './search'
import './navbar.css'




function NavBar( props) {
  console.log( props);
  let cartItems = useSelector((state) => state.cartReducer.cartItems);
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
      <Nav.Link ><Link to="/WomenClothing">בגדי נשים</Link></Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={Search} />
      <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar>
           <Button variant="primary" size="lg" active><Link to="/admin">הוסף מוצר</Link></Button>
           <div class="btn btn-white btn-animted"> </div>
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
