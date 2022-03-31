import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';

const ItemsListing = () => {
    return (
        <>
            <ListGroup.Item>
                <Row>
                    <Col xs={4}>
                        <img src='https://rukminim1.flixcart.com/image/150/150/k6tniq80/air-cooler/w/z/k/platini-coolest-torque-px-97-bajaj-original-imafp7akmpnvrzt6.jpeg?q=70' className='imagesize'></img>
                    </Col>
                    <Col xs={4}><b> Big cooler thingie white for cold air</b>
                    </Col>
                    <Col xs={4}> price here
                    </Col>

                </Row>

                <Row>
                    <Col xs={4}></Col>
                    <Col> asgvduasvdgasv ahsvduasvdguasvduasvbgdu asvdguasvbdguasvbdgvu asdva hudvasudvasguvdasguvdguasvdguvasud uasvdasuvdgasvd asvbdasguvbdsd auyvsdguasvd guasvdguasv uvasgudvas gudvasugdv agusvdugasvdugasvdug avduasvdu a</Col>
                </Row>

                <br />
                <Row><Col>
                    <Button variant="primary">-</Button>
                    <span> 0 </span>
                    <Button variant="primary">+</Button>
                    <Button className='marginleftpx' variant="danger">Remove</Button>
                </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={4} className="marginleft">
                        <Button variant="warning">Add to Cart</Button>
                    </Col>
                </Row></ListGroup.Item>
        </>
    )
}

export default ItemsListing;
