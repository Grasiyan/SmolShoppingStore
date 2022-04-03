import React, { useEffect, useState } from 'react';
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

    const [counter, setCounter] = useState(0);
    const [items, setItems] = useState([]);


    const [cart, setCart] = useState([])

    const addItem = () => {
        setCounter = (counter + 1);
    }


    const handleAddtoCart = (items) => {
        setCart([...cart, items])

    }
    console.log(cart)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then((json) => setItems(json))
    }, [])

    return (
        <>

            <div>

                <Row>
                    <Col xs={1}></Col>

                    <Col xs={6}>
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>My Cart</b></ListGroup.Item>
                                <ItemsListing items={items} handleAddtoCart={handleAddtoCart} counter={counter} />
                            </ListGroup>
                        </Card>

                    </Col>

                    <Col xs={4}>
                        <TotalCalculator cart={cart} counter={counter} addItem={addItem} />
                    </Col>

                    <Col xs={1}></Col>
                </Row>

            </div >


        </>
    )
};


export default Home;
