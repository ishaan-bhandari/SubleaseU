import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

// class Listing extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             img_address: "https://image.uhzcdn.com/house/88/efd286721ed3a94d8efb2bb8f066b68cc73a85.jpg?x-oss-process=image/resize,m_fill,w_1280,h_800,limit_0/interlace,1/quality,q_90/format,webp",
//             email: "example@gmail.com",
//             address: "1234 E Green St",
//             description: "blah blah blah"
//         }
//     }
//     render() {
//         return (
//             <Card style={{ width: '30rem' }} className="mx-auto" bg="light-blue">
//                 <Card.Img variant="top" src={this.state.img_address} />
//                 <Card.Body>
//                     <Card.Title>{this.state.address}</Card.Title>
//                     <Card.Text>{this.state.description}</Card.Text>
//                     <Button variant="primary">{this.state.email}</Button>
//                 </Card.Body>
//             </Card>
//         );
//     }
// }

function Listing(props) {
    return (
        <Card style={{ width: '50rem', backgroundColor: '#333333', boxShadow: '0 2px 4px rgba(0, 0, 0, 1)', padding: "10px"}} className="mx-auto mb-3 mt-3" bg="light-blue">
            <Card.Img className="text-white" variant="top" src={props.img_address} />
            <Card.Body>
                <Card.Title className="text-white">{props.address} - ${props.rent}/month</Card.Title>
                <Card.Text className="text-white">{props.description}</Card.Text>
                <Button className="text-white" variant="primary">{props.email}</Button>
            </Card.Body>
        </Card>
    );
}

export default Listing