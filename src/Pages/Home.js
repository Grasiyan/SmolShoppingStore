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
import TotalCalculator from '../Components/TotalCalculator';
import ItemsListing from '../Components/ItemsListing';

const Home = () => {
    return (
        <>
            <div>

                <Row>
                    <Col xs={1}></Col>

                    <Col xs={6}>
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>My Cart</b></ListGroup.Item>

                                <ListGroup.Item> <Row>
                                    <Col xs={4}>
                                        <img src='https://rukminim1.flixcart.com/image/224/224/kl9rssw0/surge-protector/z/u/k/ssk-ebu-0302-syska-original-imagyffq7tgwzy3v.jpeg?q=90' className='imagesize'></img>
                                    </Col>
                                    <Col xs={4}> <b>Title here</b>
                                    </Col>
                                    <Col xs={4}> price here
                                    </Col>

                                </Row>

                                    <Row>
                                        <Col xs={4}></Col>
                                        <Col> Description here</Col>
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

                                <ListGroup.Item> <Row>
                                    <Col xs={4}>
                                        <img src='https://rukminim1.flixcart.com/image/312/312/klo27bk0/showpiece-figurine/o/5/l/wdd-033-brothers-creation-original-imagyr26t4gtq8zt.jpeg?q=70' className='imagesize'></img>
                                    </Col>
                                    <Col xs={4}> <b>Title here</b>
                                    </Col>
                                    <Col xs={4}> price here
                                    </Col>

                                </Row>

                                    <Row>
                                        <Col xs={4}></Col>
                                        <Col> Description here</Col>
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
                            </ListGroup>
                        </Card>

                    </Col>



                    <Col xs={4}>
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
                                            <Card.Text> item.price
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
                    </Col>










                    <Col xs={1}></Col>
                </Row>

            </div >



        </>
    )
};


export default Home;
