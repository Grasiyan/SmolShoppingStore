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

const ItemsListing = ({ items, handleAddtoCart, counter, addItem, removeItems }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <ListGroup.Item>
                        <Row>
                            <Col xs={4}>
                                <img className='imagesize' src={item.image}></img>
                            </Col>
                            <Col xs={4}><a visibility="false ">{item.id}</a><b> {item.title}</b>
                            </Col>
                            <Col xs={4}> ${item.price}
                            </Col>

                        </Row>

                        <Row>
                            <Col xs={4}></Col>
                            <Col> {item.description}</Col>
                        </Row>

                        <br />
                        <Row><Col>
                            <Button variant="primary">-</Button>
                            <span> 0 </span>
                            <Button variant="primary" onClick={addItem}>+</Button>
                            <Button className='marginleftpx' variant="danger" onClick={() => { removeItems(item) }} >Remove</Button>
                        </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={4} >
                                <Button variant="warning" onClick={() => { handleAddtoCart(item) }}>Add to Cart</Button>
                            </Col>
                        </Row></ListGroup.Item>
                )
            })}
        </>
    )
}

export default ItemsListing;
