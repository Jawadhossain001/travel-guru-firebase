import React, { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const Booking = () => {
    const [showArea, setShowArea] = useContext(UserContext);
    const history = useHistory();
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const formControler = (event) => {
        event.preventDefault()
        history.push("/see-hotel")
    }

    const styleBooking = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), 
        url(${showArea.img})`,
        backgroundSize: "cover",
        height: '100vh'
    }
    return (
        <div style={styleBooking}>
            <Header></Header>
            <div className="booking-opt">
                <div className="places">
                    <h1>{showArea.title}</h1>
                    <p>{showArea.description}</p>
                </div>
                <div>
                    <Card className="booking-form">
                        <Form onSubmit={formControler}>
                            <Form.Group controlId="formGroupText">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text" placeholder="Enter Origin" required />
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter Destination" required />
                            </Form.Group>
                            <Form.Group className="date-from" controlId="formGroupText">
                                <Form.Group controlId="formGroupText">
                                    <Form.Label>From</Form.Label>
                                    <DatePicker className="datePicker-from" selected={from} onChange={date => setFrom(date)} required></DatePicker>
                                </Form.Group>
                                <Form.Group controlId="formGroupText">
                                    <Form.Label>To</Form.Label>
                                    <DatePicker className="datePicker-to" selected={to} onChange={date => setTo(date)} required></DatePicker>
                                </Form.Group>
                            </Form.Group>
                                <Button onClick={formControler}  variant="warning" size="lg" block>
                                    Start Booking
                                </Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Booking;