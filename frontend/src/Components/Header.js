import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
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
            <Navbar style={{backgroundColor: "#404040"}} variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                <Navbar.Brand ><h2>E-purchase</h2></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link><i className='fas fa-shopping-cart'></i><big>Basket</big></Nav.Link>
                        </LinkContainer>
                     {userInfo ? (
                        <NavDropdown title = {userInfo.name} id = 'username'>
                            <LinkContainer to= '/profile'>
                                <NavDropdown.Item> Profile </NavDropdown.Item>
                            </LinkContainer>
                        <NavDropdown.Item onClick = {logoutHandler}>
                            Logout
                            </NavDropdown.Item>
                            </NavDropdown>
                     ):( <LinkContainer to='/login'>
                     <Nav.Link><i className='fas fa-user'></i>Sign in</Nav.Link>
                     </LinkContainer>)}

                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header





