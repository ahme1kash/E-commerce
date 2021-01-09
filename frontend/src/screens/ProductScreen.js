import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button,Form} from 'react-bootstrap'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import{listProductDetails} from '../actions/productActions'

const ProductScreen = ({history,match}) => {
    const [qty,setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading,error,product} = productDetails
   useEffect(() => {
    dispatch(listProductDetails(match.params.id))
 
    
 },[dispatch,match] )

 const addToCartHandler =( )=> {
     history.push(`/cart/${match.params.id}?qty=${qty}`)
  
 }

    return (
        <>
      
      <div style = {{backgroundColor:'#ffffff', height: '100vh',width:'100%'}}>
        
                
            {loading? <Loader/>:error?<Message variant= 'danger'>{error}</Message>:(
                <Row>
                <Col md = {5} >
                    <Image src= {product.image} style ={{marginTop:'50px',marginLeft:'80px'}}alt = {product.name} fluid/>
    
                </Col>
               
    
    
                <Col md ={3}>
                  
                  <ListGroup variant = 'flush' style={{marginTop:'50px',marginLeft:'20px'}}>
                   
                   <ListGroup.Item>
                     <h3>{product.name}</h3>
                     
    
                   </ListGroup.Item>
    
    
                   <ListGroup.Item>
                       <Rating
                       value = {product.rating}
                       text = {`${product.numReviews} reviews`}
                       />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <big>Price: Rs {product.price}</big>
                        </ListGroup.Item>
    
                        <ListGroup.Item style = {{color:"#006666",fontSize:'18px'}}>
                        Description : {product.description}
    
                        </ListGroup.Item>
    
                  </ListGroup>
                  </Col>
    
                  <Col md = {3}>
                 <Card style={{marginTop:'50px',marginLeft:'20px'}}>
                     <ListGroup variant = 'flush'>
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 Price:
                                 </Col>
                                 <Col>
                                <strong><big> Rs {product.price}</big> </strong>
                                 </Col>
                             </Row>
    
                         </ListGroup.Item>
    
    
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 Status:
                                 </Col>
                                 <Col>
                               {product.countInStock>0?'In Stock':'Out of Stock'}
                                 </Col>
                             </Row>
                             
                         </ListGroup.Item>

                         {product.countInStock >0 && (
                             <ListGroup.Item>
                                 <Row>
                                     <Col>Qty:</Col>
                                     <Col>
                                     <Form.Control as = 'select' value = {qty} onChange = {(e)=>
                                         setQty(e.target.value)}
                                        >
                    
                                      {  [...Array((product.countInStock)).keys()].map((x) => (
                                            <option key={x+1} value={x+1}> {x+1}</option>
                                        )) }
                                         
                                  </Form.Control>
                                  
                                  </Col>
                                 </Row>
                             </ListGroup.Item>
                         )}
                         <ListGroup.Item>
                             <Row>
                                 <Col>
                                 Brand: 
                                 </Col>
                                 <Col>
                                 {product.brand}
                                 </Col>
                             </Row>
                         </ListGroup.Item>
    
                         <ListGroup.Item>
                             <Button  onClick = {addToCartHandler}className = 'btn-block' type='button' disabled = {product.countInStock===0}>
                                <strong><big> Add to Basket </big></strong>
                             </Button>
                         </ListGroup.Item>
        
            
                     </ListGroup>
                 </Card>
    
                 </Col>
    
                
    
                 
                
            </Row>
    

            )}
            <Link className = 'btn btn-danger my-3' to = '/' style ={{color:'white', fontWeight:'bold',marginLeft:'95px',marginBottom:'30rem'}} >
            Go Back
            </Link>
        </div>
        </>
    )
}

export default ProductScreen
