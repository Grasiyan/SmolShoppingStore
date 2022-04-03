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

const TotalCalculator = ({ cart }) => {
    let cost = 0
    cart.forEach((item) => {
        if (item.counter) {
            cost = cost + (item.price * item.counter)
        } else {
            cost = cost + item.price
        }

    })



    return (
        <>
            <div className='fixposition'>
                <Card >
                    <Card.Body>

                        <Card.Subtitle className='borderbottom'>PRICE DETAILS</Card.Subtitle>
                        <br />
                        <Row className='marginbottom'>
                            <Col xs={7}>
                                <Card.Text> Price
                                </Card.Text>
                            </Col>
                            <Col xs={5}>
                                <Card.Text> {cost}
                                </Card.Text>
                            </Col>
                        </Row >

                        <Row className='marginbottom'>
                            <Col xs={7}>
                                <Card.Text> Discount
                                </Card.Text>
                            </Col>
                            <Col xs={5}>
                                <Card.Text> 0%
                                </Card.Text>
                            </Col>
                        </Row>

                        <Row className='borderbottom'>
                            <Col xs={7}>
                                <Card.Text> Delivery Charge
                                </Card.Text>
                            </Col>
                            <Col xs={5}>
                                <Card.Text> Free
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className='marginbottom'>
                            <Col xs={7}>
                                <Card.Text><b> Total Price</b>
                                </Card.Text>
                            </Col>
                            <Col xs={5}>
                                <Card.Text><b> item.total</b>
                                </Card.Text>
                            </Col>
                        </Row>
                        <br />
                        <Row className='highermargintop'>
                            <Col xs={3}>
                                <Card.Text>
                                </Card.Text>
                            </Col>
                            <Col xs={6}>
                                <Button variant="success">Proceed to Checkout</Button>
                            </Col>
                            <Col xs={3}></Col>
                        </Row>


                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default TotalCalculator;
