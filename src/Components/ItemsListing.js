import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';

const ItemsListing = ({ items, }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <ItemComponent
                        item={item}

                    />
                )
            })}
        </>
    )
}


const ItemComponent = ({ item, }) => {

    return <ListGroup.Item>
        <Row>
            <Col xs={4}>
                <img className='imagesize' src={item.image}></img>
            </Col>
            <Col xs={4}><b> {item.title}</b>
            </Col>
            <Col xs={4}> ${item.price}
            </Col>
        </Row>
        <Row>
            <Col xs={4}></Col>
            <Col> {item.description}</Col>
        </Row>
        <br />
        <Row>
            <Col xs={3}>
                <Button variant="warning">Add</Button>
            </Col>
            <Col xs={3}>
                <Button className='marginleftpx' variant="danger">Remove</Button>
            </Col>
        </Row>
    </ListGroup.Item>
}


export default ItemsListing;
