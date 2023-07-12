import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './header.css'


function Header() {
    return (
        <Navbar className="headNav">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <img
                            alt=""
                            src="https://i.postimg.cc/Njgx8v2c/906343.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span>E M Panel</span>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header