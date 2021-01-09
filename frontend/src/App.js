import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

// function App() 
const App = () => {
  return (
    <Router>
    <Header/>
    <main className = 'py-3'>
   
      <Container>
        
        <Route  path = '/login' component={LoginScreen}  />
        <Route  path = '/product/:id' component={ProductScreen} />
        <Route  exact path = '/' component = {HomeScreen}/>
       <Route  path = '/cart/:id?' component={CartScreen} />
       
     </Container>
     
    
    </main>
    <Footer/>
    </Router> 
     
  );
}

export default App;