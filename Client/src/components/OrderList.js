import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import OrderItem from "./OrderItem";



const OrderList = observer(() =>{
    const {order} = useContext(Context);

    return (
        <Row className = "d-flex">
            {order.orders.map(order =>
                <order key={order.id} order={order}/>
            )}
        </Row>
    );
});

export default OrderList;