import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Layout = () => {


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <img src='https://t3.ftcdn.net/jpg/04/70/54/00/360_F_470540076_prKq6BPFfEgg6VmBYfdPIZcwapb5o2bx.jpg' height="42" width="150"></img>
                <Container>
                    <Navbar.Brand href="#home"><h1>SmolShoppingStore</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home"> Home</Nav.Link>


                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#link" className="justify-content-end">Sign In</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <Outlet />
        </>
    )
}
export default Layout;
