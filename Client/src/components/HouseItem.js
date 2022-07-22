import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import { HOUSE_ROUTE } from "../utils/consts";

const HouseItem = ({house}) =>{

    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={()=> navigate(HOUSE_ROUTE + '/' + house.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + house.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{house.name}</div>
                    <div>{house.price}</div>
                </div>
            </Card>
        </Col>
    );
};

export default HouseItem;