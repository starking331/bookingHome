import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../index";
import HouseList from "../components/HouseList";
import { observer } from "mobx-react-lite";
import { fetchHouse } from "../http/houseApi";

const Shop = observer(() =>{
    const {house} = useContext(Context);

    useEffect( () => {
        fetchHouse().then(data => house.setHouses(data));
    }, [])
    return (
        <Container>
            <Row>
                <Col md={9}>
                <HouseList/>    
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;