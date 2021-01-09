import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import'../index.css'

const Product = ({ product }) => {
    
    return ( 
        <div >
        <Card border ={"primary"} className='ProductListItem-main-card'>
            
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}  className='ProductListItem-img' variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' style = {{color:"#e60000"}}>
                        <strong><big>{product.name}</big></strong>
                    </Card.Title>
            </Link>

                <Card.Text as = 'div'>
                   <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as = 'h4'>Rs {product.price}</Card.Text>
            </Card.Body>

        </Card>
       </div>
    
    )
}
export default Product
