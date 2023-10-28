import React, { useState } from 'react';
import { Button, Form, ListGroup, Tab, Tabs } from 'react-bootstrap';

const Messages = () => {
    const [sentMessages, setSentMessages] = useState([]);
    const [composeMessage, setComposeMessage] = useState({ to: '', content: '' });

    const handleSend = () => {
        setSentMessages([...sentMessages, composeMessage]);
        setComposeMessage({ to: '', content: '' });
    };

    return (
        <div>
            <h1>Messages Page</h1>
            <Tabs defaultActiveKey="inbox" id="uncontrolled-tab-example">
                <Tab eventKey="compose" title="Compose">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>To:</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={composeMessage.to}
                                onChange={(e) => setComposeMessage({ ...composeMessage, to: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={composeMessage.content}
                                onChange={(e) => setComposeMessage({ ...composeMessage, content: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSend}>
                            Send
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="inbox" title="Inbox">
                    <ListGroup>
                        {}
                        <ListGroup.Item>Message from: user@example.com</ListGroup.Item>
                        <ListGroup.Item>Message from: user2@example.com</ListGroup.Item>
                        {}
                    </ListGroup>
                </Tab>
                <Tab eventKey="sent" title="Sent">
                    <ListGroup>
                        {sentMessages.map((msg, index) => (
                            <ListGroup.Item key={index}>
                                To: {msg.to} - Message: {msg.content}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Tab>
            </Tabs>
        </div>
    );
};
export default Messages;
