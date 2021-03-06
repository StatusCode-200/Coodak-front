/*eslint-disable*/
import { Height } from '@material-ui/icons';
import React from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from "moment";

import './Comment.scss';

function comment(props) {

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

                                    <Alert style={{ padding: "0px" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "20px" }} src={"https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"} />
                                        {item.user_id.username}

                                        {/* <span style={{ paddingLeft: "20px" }}>  {item.created_at}  </span> */}

                                        <span style={{ fontSize: "11px", marginLeft: "5px" }}>
                                            {moment.duration(moment().diff(moment(item.created_at))).humanize()} ago  </span>

                                    </Alert>

                                    <br />
                                    <Alert style={{ whiteSpace: "pre-line", backgroundColor:  "rgb(231 234 243)" , marginLeft: "3%",  width: "93%", marginBottom: "4%" }}>

                                        {item.comment}
                                    </Alert>
                                    <div >
                                    <i class="fa fa-reply fa-x1" style={{paddingLeft: "3%" , color: "#2a1ca5"}}>  reply  </i>
                                    <i class="fa fa-share-square fa-x2" style={{paddingLeft: "3%",     color: "#18d46c"}}>  share  </i>
                                    <i class="fa fa-exclamation-triangle" style={{paddingLeft: "3%" , color: "#cc0d30"}}>  report  </i>
                                    </div>
                                </Alert>

                            </>
                        )

                    })
                    }
                    { props.userId && 
                    <Form onSubmit={props.handleSubmit}>
                        <Form.Group className="formComment" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontSize: "0.9em", fontWeight: "bold" }} className="commentText"> </Form.Label>
                            <Form.Control onChange={props.handleChange} as="textarea" rows={2} className="textAria" name="coment" placeholder="TYPE YOUR COMMENT.."/>
                        </Form.Group>
                        <Button type="submit" className="commentBtn" variant="danger">ADD COMMENT</Button>{' '}
                    </Form>}
                </div>

            </main>
        </>
    )
}

export default comment;