import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import HouseItem from "./HouseItem";



const HouseList = observer(() =>{
    const {house} = useContext(Context);

    return (
        <Row className = "d-flex">
            {house.houses.map(house =>
                <HouseItem key={house.id} house={house}/>
            )}
        </Row>
    );
});

export default HouseList;