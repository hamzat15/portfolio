import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns, ListGroup } from 'react-bootstrap';
import "./tech.css";

class ZoomEx extends React.Component {
    render() {
        return (
            <div className="tech">
                <Zoom cascade>
                    <h1>TECHNOLOGIE PRINCIPALE</h1>
                </Zoom>
                <Flip left>
                    <CardColumns>
                        <Card className="react">
                            <Card.Img variant="top" src="logo512.png" className="vvv" />
                            <Card.Body>
                                <Card.Title>REACT</Card.Title>
                                <Card.Text>
                                    <h2>Projet Realise</h2>
                                    <ListGroup variant="flush" >
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.Spotify-(realiser une interface qui liste les album et musique de plus de 1000 artiste tire d'une bdd a l'aide de react)</ListGroup.Item>
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.Snapchat-(Realiser une application mobile en groupe similaire a snapchat en groupe)</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="react">
                            <Card.Img variant="top" src="js.svg.webp" className="vvv" />
                            <Card.Body>
                                <Card.Title>JAVA SCRIPTS</Card.Title>
                                <Card.Text>
                                    <h2>Projet Realise</h2>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.Puissance 4(Realiser un jeu similaire a puissance 4)</ListGroup.Item>
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.wysiwig</ListGroup.Item>
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.Quizz(Realiser un quizz en js avec ajax json)</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="react">
                            <Card.Img variant="top" src="php.png" className="php" />
                            <Card.Body>
                                <Card.Title>PHP</Card.Title>
                                <Card.Text>
                                    <h2>Projet Realise</h2>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.twiiter-(Realiser un site reseau social )</ListGroup.Item>
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.My_cinema-(Cree un site qui liste categorie , film a l'aide d'une bdd)</ListGroup.Item>
                                        <ListGroup.Item className="react" style={{fontSize: "17px"}}>.My Meetic-(Realiser un site de rencontre)</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Flip>
            </div>
        );
    }
}

export default ZoomEx;