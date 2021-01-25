import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import {logout} from '../actions/userActions'


const Header = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const dispatch = useDispatch()
    const {userInfo} = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar style={{backgroundColor: "#758283"}} variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                <Navbar.Brand  ><h2 style = {{fontSize:'23px', color:'#ffffff', marginLeft:'-35px'}}>
                    E-purchase
                    </h2>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Route render= {({history}) => <SearchBox history={history}/>}/>
                 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart' style = {{fontSize:'17px', color:'#ffffff'}}>
                        <Nav.Link ><i className='fas fa-shopping-cart' 
                        ></i>
                       
                          Basket
                    
                        
                        </Nav.Link>
                        </LinkContainer>
                     {userInfo ? (
                        <NavDropdown title = {userInfo.name} id = 'username'  style = {{fontSize:'18px', color:'#ffffff'}}>
                            <LinkContainer to= '/profile' >
                                <NavDropdown.Item> Profile </NavDropdown.Item>
                            </LinkContainer>
                        <NavDropdown.Item onClick = {logoutHandler}>
                            Logout
                            </NavDropdown.Item>
                            </NavDropdown>
                     ):( <LinkContainer to='/login'>
                     <Nav.Link><i className='fas fa-user'></i>Sign in</Nav.Link>
                     </LinkContainer>)}
               {userInfo && userInfo.isAdmin &&(
                <NavDropdown title = 'Admin' id = 'adminmenu'>
                            <LinkContainer to= '/admin/userlist'>
                                <NavDropdown.Item> Users </NavDropdown.Item>
                            </LinkContainer>
                        

                            <LinkContainer to= '/admin/productlist'>
                                <NavDropdown.Item> Products </NavDropdown.Item>
                            </LinkContainer>
                        
                            <LinkContainer to= '/admin/orderlist'>
                                <NavDropdown.Item> Orders</NavDropdown.Item>
                            </LinkContainer>
                        
                            </NavDropdown>
               )}
                        
                    </Nav>

                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header





