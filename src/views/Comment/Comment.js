/*eslint-disable*/
import { Height } from '@material-ui/icons';
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

                {props.comments.map((item, idx) => (

                    <Alert variant="secondary" className="alertText" >
                            
                         <Alert style={{paddingRight: "30px"}}>
                          <img style={{width: "50px", height: "50px" , borderRadius: "50%", marginRight: "20px"}}src={item.img} />
                         {item.user_id.username}

                            <span style={{paddingLeft: "20px"}}> {item.time} </span>
                          </Alert>  

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