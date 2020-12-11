import React, { useEffect } from 'react';
import { Navbar,
  Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { getNumbers } from '../actions/getAction';
import { Link} from 'react-router-dom';
import { RemoveItemFromCart, AddItemToCart, SetExistingCart} from '../actions/cartAction';
import { useDispatch, useSelector } from "react-redux";
import Search from './search'
function NavBar( props) {
  console.log( props);
  let cartItems = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {
   getNumbers();
  }, [])
    return (
        <header>
            <div className="overlay"></div>
            <nav>
            <div className="navbar-header">
           <a  className="navbar-brand" href="#"> giveItOn </a>
           </div>
            <ul>
            <li className="active"><Link to="/">עמוד הבית</Link></li>
             <li><Link to="/WomenClothing">בגדי נשים</Link></li>
             <li><Link to="/MenClothing">בגדי גברים</Link></li>
             <li><Link to="/food">אוכל</Link></li>
             <li><Link to="/Other">דברים אחרים</Link></li>
             <li><Link to="/admin">הוסף מוצר</Link></li>
             <li><Link to="/login">הרשם</Link></li>
             <li className="cart"><Link to= "/cart">
             <ion-icon name="basket"></ion-icon> סל המוצרים 
             {/* <span> {props.basketProps.basketNumbers} </span> */}
             <li> <a href="#"><span className="glyphicon glyphicon-search"></span></a> </li>
             </Link>
            </li>
           </ul>
            </nav>
      </header>
    );
}
  
  export default NavBar;
//         if (res.data.cart) {
//           console.log("cartitems : ", res.data.cart.cartItems);

//           dispatch(SetExistingCart(res.data.cart.cartItems));
//         }
//       }
//   const sendCartToServer = (username, cartItems) => {
//     Axios.post("/setcart", { username, cartItems }).then((res) => {
//       console.log(res);
//     });
//   };
//   useEffect(() => {
//     sendCartToServer(username, cartItems);
//   }, [cartItems]);
