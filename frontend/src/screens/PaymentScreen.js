import React, { useState } from 'react'
import { Form, Button,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
import {savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = ({history}) => {
const cart= useSelector(state => state.cart)
const { shippingAddress } = cart

if(!shippingAddress){
    history.push('/shipping')
}

  const [paymentMethod, setPaymentMethod]= useState('PayPal')


    const dispatch = useDispatch()
    const submitHandler = (e) => {
    
        e.preventDefault()
       dispatch (savePaymentMethod(paymentMethod))
       history.push('/placeorder')
    }
    return(
         <FormContainer>
          <CheckoutSteps step1 step2 step3/>
        <h1 style = {{fontSize:'40px' ,color: 'rgb(255, 0, 102)'}}>How  do you want to pay?</h1>
        <Form onSubmit = {submitHandler}>
       <Form.Group>
           <Form.Label as='legend' style = {{fontSize:'30px', marginLeft:'-50px'}}>
               Select any method
        
           </Form.Label>
         
         <br></br>
         <br></br>
         
         
         
         
        

       <Col>
       <div className = 'shift'>
       <Form.Check type='radio' 
       label='PayPal or Credit Card'
       style = {{fontSize:'20px', marginLeft:'30px',color:'rgb(0, 102, 153)'}}
       id = 'PayPal'
       name= 'paymentMethod'
       value = 'PayPal'
       checked
       onChange ={(e) => setPaymentMethod(e.target.value)} 
       
       ></Form.Check>
 <br></br>
         <br></br>
         

<Form.Check type='radio'
       label='Stripe'
       style = {{fontSize:'20px',marginLeft:'30px',color:'rgb(0, 102, 153)',  }}
       id = 'Stripe'
       name= 'paymentMethod'
       value = 'Stripe'
       
       onChange ={(e) => setPaymentMethod(e.target.value)} 
       
       ></Form.Check>
       </div>
       </Col>
       </Form.Group>
<br></br>
        <Button type='submit' variant='primary' style ={{ marginLeft: '-60px'}}>
            Continue
        </Button>

</Form>
</FormContainer>
    )
}
    
export default PaymentScreen
