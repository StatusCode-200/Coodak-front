/*eslint-disable*/
import React from 'react';
import { Nav, Navbar, secondary, Alert, dark, Form, Button } from 'react-bootstrap';

import './Comment.scss';

function comment(props) {
    console.log('props>>>', props);
    return (
        <>
            <main id="commentPage">
                <div className="frame">
                    <div className="circle"></div>
                    <div className="line left"></div>
                    <div className="line right"></div>
                    <div className="bracket left"></div>
                    <div className="bracket right"></div>
                    <div className="small top"><span className="first-letter">c</span>ollect</div>
                    <div className="big">Comment</div>
                    <div className="small bottom">This <span className="first-letter">T</span>hings</div>
                    <div className="hide top"></div>
                    <div className="hide bottom"></div>
                </div>

                {props.comments.map((item, idsx) => (

                    <Alert variant="secondary" className="alertText" >
                        {/* comment text here */}
                        {item.user_id.username}
                        <br />
                        {item.comment}
                    </Alert>
                ))}

                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} className="textAria" />
                    </Form.Group>
                </Form>
                <Button variant="danger">Comment</Button>{' '}

            </main>
        </>
    )
}

export default comment;