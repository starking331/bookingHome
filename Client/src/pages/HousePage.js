import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import BookingHouse from "../components/modals/BookingHouse";
import { fetchOneHouse } from "../http/houseApi";
import { fetchOrder, updateDate, deleteQuery } from "../http/orderApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const HousePage = observer(() =>{

    const[house, setHouse] = useState({info:[]});
    const[bookingVisible, setBookingVisible] = useState(false)
    const {id} = useParams();
    const {order} = useContext(Context);

    useEffect(() => {
        fetchOrder().then(data => order.setOrders(data));
    })

    useEffect(() => {
        fetchOneHouse(id).then(data => setHouse(data));
    }, [])
    return (
        <Container className = "mt-3">
            <Col md={6}>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + house.img}/>
            <h2>{house.name}</h2>
            <h3>Price: {house.price}</h3>
            <p>Addres: {house.address}</p>
            <p>Description: {house.description}</p>
            <Button onClick={() => setBookingVisible(true)}>Забронировать</Button>
            </Col>
            <Col>
            <h3>Активные брони</h3>
            {order.orders.map(order =>
                <><div key={order.id}></div>
                {(order.house_id == id) ?
                 <div key={order.id}>Начало: {order.startDate}/ Конец: {order.endDate}</div>
                :
                 " "
                }
                </>
                )}
            </Col>
        <BookingHouse show={bookingVisible} onHide={() => setBookingVisible(false)}/>
        </Container>
    );
});

export default HousePage;