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

const ItemsListing = ({ items, handleAddtoCart, counter, addItem }) => {
    return (
        <>
            {items.map((items) => {
                return (
                    <ListGroup.Item>
                        <Row>
                            <Col xs={4}>
                                <img className='imagesize' src={items.image}></img>
                            </Col>
                            <Col xs={4}><a visibility="false ">{items.id}</a><b> {items.title}</b>
                            </Col>
                            <Col xs={4}> ${items.price}
                            </Col>

                        </Row>

                        <Row>
                            <Col xs={4}></Col>
                            <Col> {items.description}</Col>
                        </Row>

                        <br />
                        <Row><Col>
                            <Button variant="primary">-</Button>
                            <span> 0 </span>
                            <Button variant="primary" onClick={addItem}>+</Button>
                            <Button className='marginleftpx' variant="danger" >Remove</Button>
                        </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={4} >
                                <Button variant="warning" onClick={() => { handleAddtoCart(items) }}>Add to Cart</Button>
                            </Col>
                        </Row></ListGroup.Item>
                )
            })}
        </>
    )
}

export default ItemsListing;
