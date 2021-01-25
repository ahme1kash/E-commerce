import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartActions'

const ShippingScreen = ({history}) => {
const cart= useSelector(state => state.cart)
const { shippingAddress } = cart


  const [address, setAddress]= useState(shippingAddress.address)
    const [city, setCity]= useState(shippingAddress.city)
    const [postalCode, setPostalCode]= useState(shippingAddress.postalCode)
    const [country, setCountry]= useState(shippingAddress.country)


    const dispatch = useDispatch()
    const submitHandler = (e) => {
    
        e.preventDefault()
       dispatch (saveShippingAddress({address,city,postalCode,country}))
       history.push('/payment')
    }
    return(
         <FormContainer>
          <CheckoutSteps step1 step2 step3/>
        <h1 style = {{fontSize:'40px' ,color: 'rgb(255, 0, 102)'}}>Shipping</h1>
        <Form onSubmit = {submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}>

            </Form.Control>
        </Form.Group>


        <Form.Group controlId='city'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}>

            </Form.Control>
        </Form.Group>



        <Form.Group controlId='postalCode'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>PostalCode</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your postalCode'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}>

            </Form.Control>
        </Form.Group>


        <Form.Group controlId='country'>
          <Form.Label style = {{fontSize:'25px', color:'rgb(0, 102, 153)'}}>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}>

            </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
            Continue
        </Button>

</Form>
</FormContainer>
    )
}
    
export default ShippingScreen
