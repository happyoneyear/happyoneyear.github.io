import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

export class Compliments extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        
            <Col lg={{ span: 8, offset: 4 }} md={{ span: 10, offset: 2 }} sm={{ span: 12 }} xs={{span:12}} id="button" >
                  <div class="glyphicon glyphicon-heart"></div>{' '}<Button onClick={this.props.changeTitle.bind(this, this.props.compliments, this.props.id)} style={{fontSize:"23px"}}className="button" 
                  variant="info w-50 h-100">Click for a compliment!</Button>{' '} <div class="glyphicon glyphicon-heart"></div>
                  
            </Col>
            <h1 className="compliments">{this.props.title}</h1>
            </Row>
            </Container>
            </div>
        )
    }
}

export default Compliments
