import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OrderList from "../components/OrderList";
import { fetchOrder, updateDate, deleteQuery } from "../http/orderApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Admin = observer(() =>{


    const addOrder = (id) => {
        updateDate(id);
    }

    const delOrder = (id) => {
        deleteQuery(id);
    }

    const {order} = useContext(Context);
    useEffect(() => {
        fetchOrder().then(data => order.setOrders(data));
    })

    return (
        <Container>
            {order.orders.map(order =>
                <><div key={order.id}>Имя: {order.name}/  Телефон: {order.phone}/ Начало: {order.startDate}/ Конец: {order.endDate}/ id Дома: {order.house_id}</div>
                {order.acceptDate != null ?
                 " "
                :
                <Button 
                variant="outline-success"
                onClick={() => addOrder(order.id)}
                >Принять
                </Button>
                }


                <Button 
                variant="outline-danger"
                onClick={() => delOrder(order.id)}
                >Отклонить
                </Button></>
                )}
        </Container>
    );
});

export default Admin;