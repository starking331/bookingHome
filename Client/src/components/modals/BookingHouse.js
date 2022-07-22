import React, { useState, useContext} from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {createOrder, fetchOrder, fetchOneOrder} from "../../http/orderApi";
import {Context} from "../../index";
import jwt_decode from "jwt-decode";

const BookingHouse = ({show, onHide}) => {
    const [dateIn, setDateIn] = useState('');
    const [dateOut, setDateOut] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const user = jwt_decode(token);


    const addOrder = () => {
        const formData = new FormData()
        formData.append('startDate', dateIn);
        formData.append('endDate', dateOut);
        formData.append('name', name);
        formData.append('phone', telephone);
        formData.append('house_id', id);
        formData.append('user_id', user.id);
        createOrder(formData).then(data => onHide())
    }

    return (
        <Modal
        show = {show}
        onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Забронировать Дом
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control className="mt-3"
                value={dateIn}
                onChange={e => setDateIn(e.target.value)}
                placeholder={"Дата начала бронирования"}
              />
              <Form.Control className="mt-3"
                value={dateOut}
                onChange={e => setDateOut(e.target.value)}
                placeholder={"Дата конца бронирования"}
              />
              <Form.Control className="mt-3"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"Имя"}
              />
              <Form.Control className="mt-3"
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                placeholder={"Номер телефона"}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addOrder}>Отправить заявку</Button>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};


export default BookingHouse;