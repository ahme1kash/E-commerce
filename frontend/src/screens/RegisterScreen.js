import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'
import { register} from '../actions/userActions'

 
const RegisterScreen = ({location,history}) => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

 
  const dispatch = useDispatch()
 
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister
 
  const redirect = location.search ? location.search.split('=')[1] :'/'
 

  
  
 
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
   
     
    }
  
  , 
  [history, userInfo, redirect])
 
  const submitHandler = (e) => {
    
    e.preventDefault() 
    if(password !== confirmPassword){
        setMessage('Incorrect Password, please try again')
    }
    else{
   dispatch(register(name,email,password))
        }
  
  }
  return (
    <FormContainer>
      <h1 style = {{fontSize:'40px' ,color: 'rgb(255, 0, 102)'}}>Sign UP</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        
      <Form.Group controlId='name'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group controlId='email'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
 
        <Form.Group controlId='password'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group controlId='confirmPassword'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
           
       
        {/* <Button type='submit' variant='primary' onClick = {()=> {history.goBack()}}> */}
        <Button type='submit' variant='primary' >
      Register
           </Button>
        
        
      </Form>
      
 
      <Row className='py-3'>
        <Col>
         Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
 
export default RegisterScreen