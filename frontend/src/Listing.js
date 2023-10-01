import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_address: "https://media.istockphoto.com/id/1136261351/vector/home-building-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=4XcVcNlXPlWqhY4zPmOMRJ0qngyW0Sq7EQ1lKDw-pkw=",
            email: "example@gmail.com",
            address: "1234 E Green St",
            description: "blah blah blah"
        }
    }
    render() {
        return (
            <Card style={{ width: '30rem' }} className="mx-auto" bg="light-blue">
                <Card.Img variant="top" src={this.state.img_address} />
                <Card.Body>
                    <Card.Title>{this.state.address}</Card.Title>
                    <Card.Text>{this.state.description}</Card.Text>
                    <Button variant="primary">{this.state.email}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Listing