/*eslint-disable*/
import { Height } from '@material-ui/icons';
import React from 'react';
import { Nav, Navbar, secondary, Alert, dark, Form, Button } from 'react-bootstrap';

import './Comment.scss';

function comment(props) {
    console.log('props in comment compon >>>', props);
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

                <div className="comments">

                    {props.comments.map((item, idx) => {
                        console.log('item >>', item)

                        return (
                            <>
                                <Alert key={idx} variant="secondary" className="alertText" >

                                    <Alert style={{ paddingRight: "30px" }}>
                                        {/* <img style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }} src={item.img} /> */}
                                        {item.user_id.username}

                                        {/* <span style={{ paddingLeft: "20px" }}>  {item.time}  </span> */}
                                    </Alert>

                                    <br />
                                    <Alert  style={{ whiteSpace: "pre-line", backgroundColor: "#ccc", marginLeft: "7%", marginRight: "5%", width: "80%", marginBottom: "4%" }}>

                                        {item.comment}
                                    </Alert>
                                </Alert>

                            </>
                        )

                    })
                    }

                    <Form onSubmit={props.handleSubmit}>
                        <Form.Group className="formComment" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontSize: "1.2em", fontWeight: "bold" }} className="commentText">WRITE YOUR COMMENT</Form.Label>
                            <Form.Control onChange={props.handleChange} as="textarea" rows={3} className="textAria" name="coment" />
                        </Form.Group>
                        <Button type="submit" className="commentBtn" variant="danger">Comment</Button>{' '}
                    </Form>
                </div>

            </main>
        </>
    )
}

export default comment;