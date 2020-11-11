/* eslint-disable */
import React from "react";
import { CardDeck, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import './AddChalenge.scss';


function AddChalenge(props) {
    return (
        <>
            <main id="addChallengePage">

                <div className="container" id="container">

                    <form onSubmit={props.handleSubmit} action="#">
                        <p style={{textAlign : "center"}}>
                        <h1>Add New Challenge</h1>
                        <p>Please add your challenge information in each field and save the challenge in order to display it in the challenges page</p>
                        </p>
                        <br></br>
                        <CardDeck>
                            <Card bg="danger" text="white" className="text-center" style={{ width: '25.5rem' }} >
                                <Card.Header>Summary</Card.Header>

                                <textarea style={{resize: "none"}} onChange={props.handleChange} required type="text" placeholder=" Write your challenge summary" name="summary" cols="30" rows="10" />
                            </Card>
                            <Card bg="danger" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Description</Card.Header>
                                <textarea style={{resize: "none"}} onChange={props.handleChange} required type="text" placeholder=" Write your challenge description" name="description" cols="30" rows="10" />
                            </Card>
                            <Card bg="danger" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Starter Code</Card.Header>
                                <textarea style={{resize: "none"}} onChange={props.handleChange} required type="text" placeholder=" Write your challenge starter_code" name="starter_code" cols="30" rows="10" />
                            </Card>
                            <Card bg="danger" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Test</Card.Header>
                                <textarea style={{resize: "none"}} onChange={props.handleChange} required type='text' placeholder=' Write your challenge test' name='test' cols="30" rows="10" />
                            </Card>
                        </CardDeck>
                        <br />
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Challenge Name" onChange={props.handleChange} aria-label="challenge Name" aria-describedby="basic-addon2" name="name" id="challengeName" required
                            />
                            <InputGroup.Append>
                                <Button type="submit" variant="outline-danger">Save Challenge</Button>
                            </InputGroup.Append>
                        </InputGroup>


                    </form>

                </div>

            </main>

        </>
    );
}

export default AddChalenge;

{/* <main id="addChallengePage">

<div className="container" id="container">

    <form onSubmit={props.handleSubmit} action="#">
        <h1>Add Chalenge</h1>

        <textarea onChange={props.handleChange} required type="text" placeholder="summary" name="summary" cols="30" rows="10" />
        <textarea onChange={props.handleChange} required type="text" placeholder="description" name="description" cols="30" rows="10" />
        <textarea onChange={props.handleChange} required type="text" placeholder="starter_code" name="starter_code" cols="30" rows="10" />
        <textarea onChange={props.handleChange} required type='text' placeholder='test' name='test' cols="30" rows="10" />
        <br />

        <input type="text" name="name" id="challengeName" placeholder="challenge Name" required />
        <br />
        <button > Save Chalenge</button>

    </form>

</div>

</main> */}
