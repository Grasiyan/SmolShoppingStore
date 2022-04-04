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

const ItemsListing = ({ items, handleAddToCart, counter, addItem, removeItems }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <ItemComponent
                        item={item}
                        removeItems={removeItems}
                        handleAddToCart={handleAddToCart}
                    />
                )
            })}
        </>
    )
}


const ItemComponent = ({ item, handleAddToCart, removeItems }) => {

    const [counter, setCounter] = useState(0);

    // const handleIncrementCounter = () => {
    //     console.log('In');
    //     setCounter((prev) => prev + 1)
    // }

    const handleRemoveItem = (item) => {
        setCounter(0);
        removeItems(item);
    }

    const handleDecrementCounter = () => {
        const counterValue = counter - 1
        setCounter(counterValue);
        // handleUpdateProductCounter();
    }

    const handleAddItem = (item) => {
        const counterValue = counter + 1
        setCounter(counterValue)
        handleAddToCart(item, counterValue)
    }


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
        <Row><Col>
            <Button variant="primary" onClick={handleDecrementCounter}>-</Button>
            <span> {counter}</span>
            <Button variant="primary" onClick={() => { handleAddItem(item) }}>+</Button>
            <Button className='marginleftpx' variant="danger" onClick={() => { handleRemoveItem(item) }} >Remove</Button>
        </Col>
        </Row>
        <br />
        <Row>
            <Col xs={4} >
                <Button variant="warning" onClick={() => { handleAddItem(item) }}>Add to Cart</Button>
            </Col>
        </Row>
    </ListGroup.Item>
}


export default ItemsListing;
