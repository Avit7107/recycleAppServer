import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { ProductsRequest } from '../actions/productAction';

const Product = ({ product }) => {
  return (
    < div className="container-products">
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className="products img " src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
          <h3 className="product-title"> <strong>{product.name}</strong> </h3> 
          </Card.Title>
        </Link>

        <Card.Text as='div'>
        <strong>{product.description}</strong>
      
        </Card.Text>

        <Card.Text as='h3' className="price"> שח   {product.price}</Card.Text>
      </Card.Body>
    </Card>
    </ div>
  )
}

export default Product
 
