/* eslint-disable */
import React from "react";
import { CardDeck, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import './AddChalenge.scss';


function AddChalenge(props) {
    console.log('propppps', props);
    return (
        <>
            <main id="addChallengePage">

                <div className="container" id="container">

                    <form onSubmit={props.handleSubmit} action="#">
                        <h1>Add New Chalenge</h1>
                        <br></br>
                        <CardDeck>
                            <Card bg="secondary" text="white" className="text-center" style={{ width: '25.5rem' }} >
                                <Card.Header>Summary</Card.Header>

                                <textarea onChange={props.handleChange} required type="text" placeholder=" Write your chalenge summary" name="summary" cols="30" rows="10" />
                            </Card>
                            <Card bg="secondary" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Description</Card.Header>
                                <textarea onChange={props.handleChange} required type="text" placeholder=" Write your chalenge description" name="description" cols="30" rows="10" />
                            </Card>
                            <Card bg="secondary" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Starter Code</Card.Header>
                                <textarea onChange={props.handleChange} required type="text" placeholder=" Write your chalenge starter_code" name="starter_code" cols="30" rows="10" />
                            </Card>
                            <Card bg="secondary" text="white" className="text-center" style={{ width: '23.5rem' }} >
                                <Card.Header>Test</Card.Header>
                                <textarea onChange={props.handleChange} required type='text' placeholder=' Write your chalenge test' name='test' cols="30" rows="10" />
                            </Card>
                        </CardDeck>
                        <br />
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Challenge Name" aria-label="challenge Name" aria-describedby="basic-addon2" name="name" id="challengeName" required
                            />
                            <InputGroup.Append>
                                <Button variant="outline-danger">Save Chalenge</Button>
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