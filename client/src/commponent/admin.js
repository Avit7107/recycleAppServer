import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Table, FormControl, Form, Button, Modal } from "react-bootstrap";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ProductsRequest } from "../actions/productAction";


const Admin = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);

  const updateProduct = (products) => {
    Axios.put("/updateproduct", { products }).then((res) =>
      console.log(res)
    );
    // dispatch(ProductsRequest());
  };

  const removeProduct = (_id) => {
    Axios.delete(`/removeproduct/${_id}`).then((res) => {
      console.log(res);
      dispatch({ type: "PRODUCT_REMOVED", payload: res.data });
    });
    // dispatch(ProductsRequest());
  };

  const newProduct = (newProduct) => {
    Axios.post("/newProduct", { newProduct }).then((res) => {
      console.log(res);
      dispatch({ type: "PRODUCT_ADDED", payload: res.data });
    });

    // dispatch(ProductsRequest());
  };

  const [editable, seteditable] = useState(true);
  const [productsState, setproductsState] = useState(products);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>

      <h1 style={{ padding: "5rem 0" }} className='mx-3'>
        הוספת מוצרים{" "}
      </h1>
      <Form inline className='mb-3 px-3'>
        <FormControl type='text' placeholder='חפש' className='mr-sm-2 ' />
        <Button variant='outline-info'>חפש</Button>
        <Button onClick={() => setLgShow(true)} variant='outline-info'>
         הוסף מוצר
        </Button>
        <Button
          variant='outline-info'
          onClick={() => {
            seteditable(!editable);
            editable === false && updateProduct(products);
          }}
        >
          {editable ? "ערוך" : "עדכן"}
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>שם</th>
            <th>קטגוריה</th>
            <th>מחיר</th>
            <th>כמות</th>
            <th>תאור</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <td>
                <FormControl
                  type='text'
                  defaultValue={product.name}
                  readOnly={editable}
                  className='mr-sm-2 '
                  id={`name${index}`}
                  onChange={(e) => {
                    dispatch({
                      type: "PRODUCTS_UPDATED",

                      payload: {
                        index,
                        product: {
                          ...product,
                          name: e.target.value,
                        },
                      },
                    });
                  }}
                />{" "}
              </td>
              <td>
                <FormControl
                  type='text'
                  defaultValue={product.category}
                  readOnly={editable}
                  className='mr-sm-2 '
                  id={`category${index}`}
                  onChange={(e) => {
                    dispatch({
                      type: "PRODUCTS_UPDATED",

                      payload: {
                        index,
                        product: {
                          ...product,
                          category: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </td>
              <td>
                <FormControl
                  type='text'
                  defaultValue={product.price}
                  readOnly={editable}
                  className='mr-sm-2 '
                  id={`price${index}`}
                  onChange={(e) => {
                    dispatch({
                      type: "PRODUCTS_UPDATED",

                      payload: {
                        index,
                        product: {
                          ...product,
                          price: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </td>
              <td>
                <FormControl
                  type='text'
                  defaultValue={product.countInStock}
                  readOnly={editable}
                  className='mr-sm-2 '
                  id={`countinstock${index}`}
                  onChange={(e) => {
                    dispatch({
                      type: "PRODUCTS_UPDATED",

                      payload: {
                        index,
                        product: {
                          ...product,
                          countInStock: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </td>
              <td>
                <Button
                  onClick={() => {
                    removeProduct(product._id);
                  }}
                  variant='light'
                >
                 הסר
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>שם</Form.Label>
              <FormControl
                width='50%'
                type='text'
                className='mr-sm-2 '
                id='name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>קטגוריה</Form.Label>
              <Form.Control as='select' size='lg' id='category'>
                <option>WomenClothing</option>
                <option>MenClothing</option>
                <option>food</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>מחיר</Form.Label>
              <FormControl
                width='50%'
                type='number'
                className='mr-sm-2 '
                id='price'
              />
            </Form.Group>
            <Form.Group>
              <Form.File id='image' label='image' />
              <Form.Label>תמונה</Form.Label>
              <FormControl
                width='50%'
                type='text'
                className='mr-sm-2 '
                id='image'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>מלאי</Form.Label>
              <FormControl
                width='50%'
                type='text'
                className='mr-sm-2 '
                id='countinstock'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              console.log({
                name: document.querySelector("#name").value,
                category: document.querySelector("#category").value,
                price: +document.querySelector("#price").value,
                image: document.querySelector("#image").value,
                countInStock: +document.querySelector("#countinstock").value,
              });
              newProduct({
                name: document.querySelector("#name").value,
                category: document.querySelector("#category").value,
                price: +document.querySelector("#price").value,
                image: document.querySelector("#image").value,
                countInStock: +document.querySelector("#countinstock").value,
              });
            }}
          >
            Add product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Admin;