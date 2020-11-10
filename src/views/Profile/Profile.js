/* eslint-disable */
import React from "react";
import "./Profile.scss";
import { CardDeck, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    imgStyle: {
        width: '100%',
        padding: '20px 15px 0 15px'
    },
    rightAlign: {
        textAlign: 'right'
    },
    addBtn: {
        margin: '20px 0 30px 0'
    },
    container: {
        padding: '20px 0 50px 0'
    },
    margin: {
        margin: '30px 0 10px 0'
    },
}));
function profile(props) {
    const classes = useStyles();
    console.log("challenge", props.challenges);
    console.log("project", props.projects);
    // const renderProjects = () => {
    //     {
    //         props.projects ? props.projects.map((project, idx) =>
    //             <ul>
    //                 <li key={idx}> {project.project_name} </li>
    //             </ul>
    //         )
    //         : <br></br>
    //     }
    // }

    return (
        <main id="profilePage">

            <Card bg="light" border="danger" style={{ width: '40rem', marginLeft: "28%", paddingTop: "5%" }} >
                <div className="container">

                    <h2>USER INFORMATION</h2>
                    <section id="user-info">
                        <img src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" alt="" style={{ width: "200px", height: "200px" }} />
                        <div>
                            <h1>
                                {props.username}
                            </h1>
                        </div>
                    </section>
                </div>
                <Container maxWidth='sm' className={classes.container}>
                    <Grid container>
                        <Grid className={classes.margin} item xs={12}>
                            <Typography variant='h5'>Project Details</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1a-content'
                                    id='panel1a-header'
                                >
                                    <Typography>My Projects</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {props.projects ? props.projects.map((project, idx) =>
                                            <ul className="profileList">
                                                <Link key={idx} to={`/projects/${project._id}`}>
                                                    {project.name}
                                                </Link>
                                                {/*  style={{padding: "0px" , width: "2rem", height: "1.5rem", marginRight: "20px" }} */}
                                                <Button variant="outline-danger" onClick={() => props.handleDelete("project",project._id)} className="deleteButton" ><i class="fa fa-times-circle"></i></Button>
                                            </ul>
                                        )
                                            : <> </>
                                        }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel2a-content'
                                    id='panel2a-header'
                                >
                                    <Typography>My Challenges</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {props.challenges ? props.challenges.map((challenge, idx) =>
                                            <ul className="profileList">
                                                <Link key={idx} to={`/challenges/${challenge.challenge_id._id}`}>
                                                    {challenge.challenge_id.name}
                                                </Link>
                                                <Button variant="outline-danger" onClick={() => props.handleDelete("challenge",challenge.challenge_id._id)} className="deleteButton"><i class="fa fa-trash"></i></Button>
                                            </ul>
                                        )
                                            : <> </>
                                        }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </main>
    );
}
export default profile;
