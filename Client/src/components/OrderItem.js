import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import { HOUSE_ROUTE } from "../utils/consts";

const OrderItem = ({order}) =>{

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{order.name}</div>
                    <div>{order.price}</div>
                </div>
            </Card>
        </Col>
    );
};

export default OrderItem;