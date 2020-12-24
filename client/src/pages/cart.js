import React, { useState } from "react";
import { Button, Table, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItemFromCart, AddItemToCart, SetExistingCart} from "../actions/cartAction";
import { Redirect } from "react-router-dom";

const Cart = ({ history }) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  return (
    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>product</th>
            <th>quantity</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{cartItem.product.name}</td>
              <td>
                <Form.Control as='select' value={cartItem.quantity}>
                  {[...Array(cartItem.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
                {cartItem.quantity}
              </td>

              <td>{cartItem.product.price * cartItem.quantity}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch(RemoveItemFromCart(cartItem.product.name))
                  }
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="basketTotal" style={{ display: "flex", float: "right", padding: "2rem" }}>
        <h4 style={{ textAlign: "right", margin: "2rem" }}>
          total price : שח
          {cartItems
            .map((cartItem) => +cartItem.product.price * cartItem.quantity)
            .reduce((acc, item) => acc + item, 0)}
        </h4>
        {/* <Button
          onClick={() => {
            !adminLogged && !userLogged
              ? setSmShow(true)
              : history.push("/cartsummary");
          }}
          variant='danger'
          style={{ margin: " 1rem 0" }}
        >
          continue purchese
        </Button> */}
      </div>
      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
    
        
        <Modal.Body>
          dont have an account yet ?<Button>create account</Button>
        </Modal.Body>
      </Modal>
      <Button>לתשלום</Button>
    </div>
  );
};

export default Cart;












// import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import { productQuantity ,clearProduct} from '../actions/productQuantity';
// import coins from  '../images/coins.png';
// import back from  '../images/back.png';
// import table from  '../images/table.png';
// import wallPaper from  '../images/wallPaper.jpg';


// function Cart ({basketProps, productQuantity, clearProduct}) {
//     console.log(basketProps );

//     let prouductInCart=[];

//     Object.keys(basketProps.products).forEach( function (item) {
//         console.log(item);
//         console.log(basketProps.products[item].inCart);
//         if (basketProps.products[item].inCart) {
//             prouductInCart.push(basketProps.products[item])     
//         }
//         console.log(prouductInCart);
//     })
//     const productImges=[coins, back, table , wallPaper]
 
//     prouductInCart=prouductInCart.map((product,index) =>{
//         return(
//             <Fragment key={index}>
// <div className="product"> <ion-icon onClick={() => clearProduct()} name="close-circle"> </ion-icon>
//         <img src={ productImges}/> 
//         <span className="sn-hide">{product.name}</span></div>
//         <div className="price sn-hide"> ${product.price} שח </div>
//         <div className="Quantity"> 

//         <ion-icon  onClick={() =>{productQuantity('decrease',product.name)} }  name="arrow-dropdown-circle"></ion-icon>
//         <span> {product.numbers}</span>
//         <ion-icon  onClick={() =>{productQuantity('increase',product.name)} } name="arrow-dropup-circle"></ion-icon>
//         </div>
       
//         <div className="total">${product.price * product.numbers} שח</div>


//             </Fragment>
//         )
//     })
// return(
//     <div className="container-products">
//         <div className="product-header">
//             <h5 className=" product-title"> המוצר</h5>
//             <h5 className="price sn-hide"> מחיר</h5>
//             <h5 className=" Quantity"> כמות</h5>
//               <h5 className="total"> סך הכל</h5>
//           </div>
//           <div className="basketTotalContainer ">
//           <div className="products" > {prouductInCart}</div>
//           <div className="basketTotalTitle"> סך הכל </div>
//           <div className="basketTotalCost">{basketProps.cartCost} </div>
      
//           </div>
//     </div>
// )
// }
// const mapStateToProps=state => ({
//     basketProps:state.basketState
//   })

// export default connect(mapStateToProps,{productQuantity, clearProduct} ) (Cart);