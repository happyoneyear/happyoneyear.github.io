import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Col } from 'react-bootstrap';

import cancel from './art2/cancel.png'
import student from './art2/student.png'
import spongebob from './art2/spongebob.png'
import danny from './art2/danny.png'
import sleep from './art2/sleep.png'
import manav from './art2/manav.png'
import car from './art2/car.png'
import krakatoa from './art2/krakatoa.png'
import aliens from './art2/aliens.png'
import mushroom from './art2/mushroom.png'
import taylor from './art2/taylor.png'
import draw from './art2/draw.png'
import meme from './art2/meme.png'
import deepfried from './art2/deepfried.png'
import goldy from './art2/goldy.png'
import wizard from './art2/wizard.png'
import game from './art2/game.png'
import statue from './art2/statue.png'
import lord from './art2/lord.png'
import crabs from './art2/crabs.png'
import eyebrows from './art2/eyebrows.png'


export class Art extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="artHead">Art Gallery</h1>
                    <Col lg={{span:8, offset: 2}} md={{span:8, offset: 2}} sm={12}>
                    <Carousel className="carouselItem" nextIcon={<span aria-hidden="true" class="glyphicon glyphicon-chevron-right"/>} 
                    prevIcon={<span aria-hidden="true" class="glyphicon glyphicon-chevron-left"/>}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cancel}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={student}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={spongebob}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={danny}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sleep}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={manav}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={car}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={krakatoa}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={aliens}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mushroom}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={taylor}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={draw}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={meme}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={deepfried}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={goldy}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={wizard}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={game}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={statue}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={lord}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={crabs}
                        alt="The Met"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={eyebrows}
                        alt="The Met"
                        />
                    </Carousel.Item>
                </Carousel>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Art
